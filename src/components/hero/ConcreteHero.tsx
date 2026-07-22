import * as THREE from 'three/webgpu';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { useLogoTexture } from './useLogoTexture';
import { useImageTexture } from './useImageTexture';
import { createConcreteMaterial } from './concreteMaterial';
import { createShower } from './particleShower';

extend(THREE as any);

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);

// Timeline (seconds)
const DELAY = 0.3;
const T_POUR = 4.2;
const T_SETTLE = 1.3;
const T_CURE = 4.5;

function LogoPlane() {
  const logoTex = useLogoTexture('/logo_breitbach.svg');
  const concreteTex = useImageTexture('/textures/concrete_131L.webp');
  const { size } = useThree();

  const shower = useMemo(() => (logoTex ? createShower(logoTex) : null), [logoTex]);

  const built = useMemo(
    () =>
      logoTex && concreteTex && shower
        ? createConcreteMaterial(logoTex, concreteTex, shower.texture, shower.grid.DW, shower.grid.DH)
        : null,
    [logoTex, concreteTex, shower]
  );

  useEffect(() => () => shower?.dispose(), [shower]);

  const start = useRef<number | null>(null);
  useFrame((state) => {
    if (!built || !shower) return;
    const now = state.clock.elapsedTime;
    if (start.current === null) start.current = now;
    const e = now - start.current - DELAY;

    const pouring = e > 0 && e < T_POUR;
    const fill = 0; // DIAGNOSTIC: disable scripted fill so the shower falls full-height
    const cureStart = T_POUR + T_SETTLE;
    const cure = clamp01((e - cureStart) / T_CURE);

    shower.step(state.gl as any, Math.max(e, 0), fill, 0.5, pouring ? 1 : 0);
    built.uniforms.fill.value = fill;
    built.uniforms.cure.value = cure;
  });

  if (!logoTex || !built) return null;

  const texAspect = logoTex.image.width / logoTex.image.height;
  const fitW = Math.min(size.width * 0.58, size.height * 0.62 * texAspect);

  return (
    <mesh scale={[fitW, fitW / texAspect, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={built.material} attach="material" />
    </mesh>
  );
}

export default function ConcreteHero() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 100], zoom: 1, near: 0.1, far: 1000 }}
      dpr={[1, 1.75]}
      gl={async (props: any) => {
        const renderer = new THREE.WebGPURenderer({
          ...props,
          antialias: true,
          alpha: true,
          forceWebGL: true,
        });
        await renderer.init();
        return renderer;
      }}
    >
      <LogoPlane />
    </Canvas>
  );
}
