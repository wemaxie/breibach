import * as THREE from 'three/webgpu';
import {
  Fn,
  vec2,
  vec3,
  vec4,
  float,
  uv,
  texture,
  uniform,
  vertexIndex,
  smoothstep,
} from 'three/tsl';

/**
 * GPU particle SHOWER (fragment ping-pong for physics + additive point splat for
 * rendering — runs on WebGL2 and WebGPU). A stream of "balls" falls from
 * center-top (under the header), drops under gravity, and is absorbed when it
 * reaches the rising fill surface inside the letters (or falls off-screen). The
 * particles are the VISIBLE pour.
 *
 * Particle data (RGBA16F, PW×PH, ping-pong): xy = pos (box uv, y up), zw = vel.
 */
export function createShower(logoTex: THREE.Texture, PW = 96, PH = 96) {
  const N = PW * PH;

  const makeRT = () => {
    const rt = new THREE.RenderTarget(PW, PH, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthBuffer: false,
      stencilBuffer: false,
    });
    rt.texture.colorSpace = THREE.NoColorSpace;
    return rt;
  };
  let dataA = makeRT();
  let dataB = makeRT();

  const DW = 512;
  const DH = Math.round((DW * (logoTex.image?.height || 572)) / (logoTex.image?.width || 1024));
  const densityRT = new THREE.RenderTarget(DW, DH, {
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
    stencilBuffer: false,
  });
  densityRT.texture.colorSpace = THREE.NoColorSpace;

  const uTime = uniform(0);
  const uFill = uniform(0);
  const uStreamX = uniform(0.5);
  const uStreamW = uniform(0.42);
  const uInject = uniform(1.1);
  const uGrav = uniform(1.4);
  const uOn = uniform(1);

  const sd = texture(logoTex);
  const insideAt = (c: any) => smoothstep(0.46, 0.54, sd.sample(c).g);
  const rnd = (x: any) => x.mul(12.9898).sin().mul(43758.5453).fract();

  const dataSrc = texture(dataA.texture);
  const updateMat = new THREE.MeshBasicNodeMaterial();
  updateMat.colorNode = Fn(() => {
    const p = uv();
    const seed = p.x.add(p.y.mul(57.0)).add(0.123);
    const d = dataSrc.sample(p);
    const pos = d.xy.toVar();
    const vel = d.zw.toVar();

    // integrate
    vel.y.subAssign(uGrav.mul(0.016));
    vel.x.mulAssign(0.985);
    pos.addAssign(vel.mul(0.016));

    // respawn conditions
    const reachedFill = pos.y.lessThan(uFill.add(0.01)).and(insideAt(pos).greaterThan(0.5));
    const offscreen = pos.y.lessThan(-0.06).or(pos.x.lessThan(-0.05)).or(pos.x.greaterThan(1.05));
    const dead = reachedFill.or(offscreen).or(uOn.lessThan(0.5));

    // staggered respawn at center-top
    const rx = rnd(seed.add(uTime.mul(1.7)));
    const ry = rnd(seed.add(11.3).add(uTime.mul(2.1)));
    const rvx = rnd(seed.add(23.7)).sub(0.5);
    const spawnPos = vec2(uStreamX.add(rvx.mul(uStreamW).mul(2.0)), float(1.02).add(ry.mul(0.5)));
    const spawnVel = vec2(rvx.mul(0.12), uInject.negate().mul(float(0.6).add(rx.mul(0.6))));

    const outPos = dead.select(spawnPos, pos);
    const outVel = dead.select(spawnVel, vel);
    return vec4(outPos, outVel);
  })();
  updateMat.toneMapped = false;
  updateMat.depthTest = false;
  updateMat.depthWrite = false;

  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), updateMat);
  quad.frustumCulled = false;
  const updScene = new THREE.Scene();
  updScene.add(quad);
  const cam = new THREE.Camera();

  // point cloud that splats particles into densityRT
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  const dataForPoints = texture(dataA.texture);
  const ptMat = new THREE.PointsNodeMaterial();
  ptMat.positionNode = Fn(() => {
    const idx = vertexIndex.toFloat();
    const px = idx.mod(PW).add(0.5).div(PW);
    const py = idx.div(PW).floor().add(0.5).div(PH);
    const d = dataForPoints.sample(vec2(px, py));
    return vec3(d.x.mul(2).sub(1), d.y.mul(2).sub(1), 0);
  })();
  ptMat.sizeNode = float(16.0);
  (ptMat as any).size = 16;
  ptMat.colorNode = vec3(1.0);
  ptMat.opacityNode = float(0.85);
  ptMat.transparent = true;
  ptMat.depthTest = false;
  ptMat.depthWrite = false;
  ptMat.blending = THREE.AdditiveBlending;
  const points = new THREE.Points(geo, ptMat);
  points.frustumCulled = false;
  const ptScene = new THREE.Scene();
  ptScene.add(points);

  const run = (renderer: any, obj: THREE.Object3D, target: THREE.RenderTarget) => {
    const prev = renderer.getRenderTarget();
    renderer.setRenderTarget(target);
    renderer.clear();
    renderer.render(obj, cam);
    renderer.setRenderTarget(prev);
  };

  function step(renderer: any, time: number, fill: number, streamX: number, on: number) {
    uTime.value = time;
    uFill.value = fill;
    uStreamX.value = streamX;
    uOn.value = on;

    dataSrc.value = dataA.texture;
    quad.material = updateMat;
    run(renderer, updScene, dataB);
    const t = dataA;
    dataA = dataB;
    dataB = t;

    dataForPoints.value = dataA.texture;
    run(renderer, ptScene, densityRT);

    return densityRT.texture;
  }

  function dispose() {
    dataA.dispose();
    dataB.dispose();
    densityRT.dispose();
    updateMat.dispose();
    ptMat.dispose();
    geo.dispose();
    quad.geometry.dispose();
  }

  return {
    step,
    dispose,
    get texture() {
      return densityRT.texture;
    },
    grid: { DW, DH },
    uniforms: { inject: uInject, grav: uGrav, streamW: uStreamW },
  };
}
