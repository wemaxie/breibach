import { useEffect, useState } from 'react';
import * as THREE from 'three/webgpu';

/** Loads an image as a three Texture (sRGB by default). Returns null until ready. */
export function useImageTexture(url: string, srgb = true): THREE.Texture | null {
  const [tex, setTex] = useState<THREE.Texture | null>(null);
  useEffect(() => {
    let cancelled = false;
    new THREE.TextureLoader().load(url, (t) => {
      if (cancelled) return;
      t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = 8;
      t.needsUpdate = true;
      setTex(t);
    });
    return () => {
      cancelled = true;
    };
  }, [url]);
  return tex;
}
