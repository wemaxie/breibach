import * as THREE from 'three/webgpu';
import { Fn, vec2, vec3, float, uv, texture, uniform, mix, smoothstep, max, dot, normalize, pow } from 'three/tsl';

/**
 * Renders the pour: a rising fill level inside the letters (fed by the shower)
 * plus the falling shower balls (from particleShower's density texture), all as
 * dark concrete. Settled fill cures (uCure) into matte photo-concrete; the
 * balls stay wet/glossy. Masked to the logo.
 */
export function createConcreteMaterial(
  logoTex: THREE.DataTexture,
  concreteTex: THREE.Texture,
  showerTex: THREE.Texture,
  DW: number,
  DH: number
) {
  const dtx = 1 / DW;
  const dty = 1 / DH;
  const boxAspect = logoTex.image.width / logoTex.image.height;
  const texAspect = (concreteTex.image?.width || 3) / (concreteTex.image?.height || 2);
  const yScale = texAspect / boxAspect;

  const uFill = uniform(float(0));
  const uCure = uniform(float(0));
  const showerNode = texture(showerTex);
  const emptyCol = vec3(0.72, 0.72, 0.7);

  const lum = (c: any) => dot(c, vec3(0.299, 0.587, 0.114));

  const concreteColor = Fn(() => {
    const uc = vec2(uv().x, uv().y.mul(yScale).add((1.0 - yScale) * 0.5));
    const l = lum(texture(concreteTex, uc).rgb);
    const t1 = smoothstep(0.2, 0.62, l);
    const t2 = smoothstep(0.62, 0.92, l);
    return mix(mix(vec3(0.05, 0.05, 0.056), vec3(0.15, 0.148, 0.152), t1), vec3(0.34, 0.335, 0.33), t2).add(
      vec3(0.7).mul(smoothstep(0.55, 0.75, l).mul(0.06))
    );
  });

  const colorNode = Fn(() => {
    const p = uv();
    const letterCov = texture(logoTex, p).r;
    const belowFill = smoothstep(uFill.add(0.012), uFill.sub(0.012), p.y);
    const fillAmt = letterCov.mul(belowFill);

    const dC = showerNode.sample(p).r;
    const showAmt = smoothstep(0.05, 0.35, dC);

    // ball normal from shower density gradient (rounded droplets)
    const dL = showerNode.sample(p.sub(vec2(dtx, 0))).r;
    const dR = showerNode.sample(p.add(vec2(dtx, 0))).r;
    const dD = showerNode.sample(p.sub(vec2(0, dty))).r;
    const dU = showerNode.sample(p.add(vec2(0, dty))).r;
    const N = normalize(vec3(dL.sub(dR).mul(3.0), dD.sub(dU).mul(3.0), 1.0));

    const Ldir = normalize(vec3(-0.3, 0.5, 0.8));
    const Hh = normalize(Ldir.add(vec3(0.0, 0.0, 1.0)));
    const specBall = pow(max(dot(N, Hh), 0.0), 30.0).mul(0.9);
    const ball = vec3(0.05, 0.05, 0.06).add(vec3(0.2, 0.2, 0.22).mul(specBall));

    // fill: wet near the surface, cured concrete below
    const nearSurf = smoothstep(uFill.sub(0.06), uFill, p.y);
    const wetFill = vec3(0.05, 0.05, 0.06).add(vec3(0.1).mul(nearSurf));
    const fillCol = mix(mix(wetFill, concreteColor(), uCure), wetFill, nearSurf.mul(float(1.0).sub(uCure)));

    const col = mix(fillCol, ball, showAmt);
    const amt = max(fillAmt, showAmt);
    return mix(emptyCol, col, amt);
  });

  const opacityNode = Fn(() => {
    const p = uv();
    const letterCov = texture(logoTex, p).r;
    const belowFill = smoothstep(uFill.add(0.012), uFill.sub(0.012), p.y);
    const fillAmt = letterCov.mul(belowFill);
    const showAmt = smoothstep(0.05, 0.35, showerNode.sample(p).r);
    return max(max(fillAmt, showAmt), letterCov.mul(0.09));
  });

  const material = new THREE.MeshBasicNodeMaterial();
  material.colorNode = colorNode();
  material.opacityNode = opacityNode();
  material.transparent = true;
  material.depthWrite = false;

  return { material, uniforms: { fill: uFill, cure: uCure, showerNode } };
}
