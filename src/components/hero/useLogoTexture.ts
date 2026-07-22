import { useEffect, useState } from 'react';
import * as THREE from 'three/webgpu';

/**
 * Rasterizes the logo SVG to an offscreen canvas and builds a DataTexture that
 * carries, per texel:
 *   R = coverage (anti-aliased alpha, 0..1)  -> used as the fill mask
 *   G = signed distance field, normalized (0.5 = edge, >0.5 inside)  -> used for
 *       the pour front, meniscus and crisp edges in later stages
 *
 * The SDF is a true Euclidean distance transform (Felzenszwalb & Huttenlocher),
 * computed once on the CPU — cheap for a one-off hero asset and dependency-free.
 */

// 1D squared distance transform of a row/column `f` of length `n`.
function edt1d(f: Float64Array, n: number): Float64Array {
  const d = new Float64Array(n);
  const v = new Int32Array(n);
  const z = new Float64Array(n + 1);
  let k = 0;
  v[0] = 0;
  z[0] = -Infinity;
  z[1] = Infinity;
  for (let q = 1; q < n; q++) {
    let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= z[k]) {
      k--;
      s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = Infinity;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++;
    d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
  }
  return d;
}

// In-place 2D squared EDT over a w*h grid (columns, then rows).
function edt2d(grid: Float64Array, w: number, h: number) {
  const col = new Float64Array(h);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) col[y] = grid[y * w + x];
    const d = edt1d(col, h);
    for (let y = 0; y < h; y++) grid[y * w + x] = d[y];
  }
  const row = new Float64Array(w);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) row[x] = grid[y * w + x];
    const d = edt1d(row, w);
    for (let x = 0; x < w; x++) grid[y * w + x] = d[x];
  }
}

const SPREAD = 42; // px range mapped into the normalized SDF around the edge

function buildTexture(img: HTMLImageElement): THREE.DataTexture {
  const logoAspect = img.width / img.height;
  const pad = 70;
  const contentW = 904;
  const contentH = Math.round(contentW / logoAspect);
  const W = contentW + pad * 2;
  const H = contentH + pad * 2;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(img, pad, pad, contentW, contentH);
  const alpha = ctx.getImageData(0, 0, W, H).data;

  const n = W * H;
  const inside = new Float64Array(n); // distance to nearest OUTSIDE pixel
  const outside = new Float64Array(n); // distance to nearest INSIDE pixel
  const cov = new Float32Array(n);
  const INF = 1e20;
  for (let i = 0; i < n; i++) {
    const a = alpha[i * 4 + 3] / 255;
    cov[i] = a;
    const isIn = a > 0.5;
    inside[i] = isIn ? INF : 0;
    outside[i] = isIn ? 0 : INF;
  }
  edt2d(inside, W, H);
  edt2d(outside, W, H);

  // Pack into RGBA8, flipping rows so texel row 0 == bottom (three UV origin).
  const data = new Uint8Array(n * 4);
  for (let y = 0; y < H; y++) {
    const srcY = H - 1 - y;
    for (let x = 0; x < W; x++) {
      const src = srcY * W + x;
      const dst = (y * W + x) * 4;
      const sdfPx = Math.sqrt(outside[src]) - Math.sqrt(inside[src]); // + outside, - inside
      const sdfNorm = Math.max(0, Math.min(1, 0.5 - sdfPx / (2 * SPREAD)));
      data[dst] = Math.round(cov[src] * 255); // R: coverage
      data[dst + 1] = Math.round(sdfNorm * 255); // G: SDF
      data[dst + 2] = 0;
      data[dst + 3] = 255;
    }
  }

  const tex = new THREE.DataTexture(data, W, H, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  tex.colorSpace = THREE.NoColorSpace;
  tex.needsUpdate = true;
  return tex;
}

export function useLogoTexture(url: string): THREE.DataTexture | null {
  const [tex, setTex] = useState<THREE.DataTexture | null>(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (cancelled) return;
      setTex(buildTexture(img));
    };
    img.src = url;
    return () => {
      cancelled = true;
    };
  }, [url]);
  return tex;
}
