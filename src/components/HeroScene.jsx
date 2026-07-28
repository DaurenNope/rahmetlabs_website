'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const MANUAL_COLOR = new THREE.Color('#B4513A');
const AMBER_COLOR = new THREE.Color('#D97706');
const PARTICLE_COUNT = 1400;
const LANES = 6;

function makeSprite() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setClearColor(0x000000, 0);
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const count = PARTICLE_COUNT;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const progress = new Float32Array(count);
    const speed = new Float32Array(count);
    const lane = new Int16Array(count);
    const seedA = new Float32Array(count);
    const seedB = new Float32Array(count);
    const freq = new Float32Array(count);
    const scale = new Float32Array(count);

    const WORLD_W = 24;
    const WORLD_H = 8;

    for (let i = 0; i < count; i += 1) {
      progress[i] = Math.random();
      speed[i] = 0.014 + Math.random() * 0.018;
      lane[i] = Math.floor(Math.random() * LANES);
      seedA[i] = Math.random() * Math.PI * 2;
      seedB[i] = Math.random() * Math.PI * 2;
      freq[i] = 0.15 + Math.random() * 0.25;
      scale[i] = 0.4 + Math.random() * 1;

      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      colors[i * 3] = MANUAL_COLOR.r;
      colors[i * 3 + 1] = MANUAL_COLOR.g;
      colors[i * 3 + 2] = MANUAL_COLOR.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.34,
      map: makeSprite(),
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const railGroup = new THREE.Group();
    for (let l = 0; l < LANES; l += 1) {
      const y = (l / (LANES - 1) - 0.5) * WORLD_H * 0.55;
      const railGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(1.5, y, -3),
        new THREE.Vector3(WORLD_W / 2 + 4, y, -3),
      ]);
      const railMat = new THREE.LineBasicMaterial({ color: 0x2b2d35, transparent: true, opacity: 0.35 });
      railGroup.add(new THREE.Line(railGeo, railMat));
    }
    scene.add(railGroup);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(mount.clientWidth, mount.clientHeight), 0.32, 0.55, 0.42);
    composer.addPass(bloom);

    const mouse = { x: 0, y: 0 };
    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('pointermove', handlePointerMove);

    const posAttr = geometry.getAttribute('position');
    const colorAttr = geometry.getAttribute('color');

    let frameId;
    let time = 0;
    const clock = new THREE.Clock();

    function laneTargetY(l) {
      return (l / (LANES - 1) - 0.5) * WORLD_H * 0.55;
    }

    function tick() {
      const dt = Math.min(clock.getDelta(), 0.05);
      time += dt * (prefersReduced ? 0.2 : 1);

      for (let i = 0; i < count; i += 1) {
        let t = progress[i] + speed[i] * dt * (prefersReduced ? 0.2 : 1);
        if (t > 1) t -= 1;
        progress[i] = t;

        const x = -WORLD_W / 2 + t * WORLD_W;

        const orderAmount = THREE.MathUtils.smoothstep(t, 0.46, 0.66);
        const drift =
          Math.sin(time * freq[i] + seedA[i]) * (WORLD_H * 0.26) * scale[i] +
          Math.sin(time * freq[i] * 0.37 + seedB[i]) * (WORLD_H * 0.1);
        const orderY = laneTargetY(lane[i]) + Math.sin(time * 0.6 + lane[i] * 1.7) * 0.08;
        const y = THREE.MathUtils.lerp(drift, orderY, orderAmount);

        posAttr.array[i * 3] = x;
        posAttr.array[i * 3 + 1] = y;

        const c = MANUAL_COLOR.clone().lerp(AMBER_COLOR, orderAmount);
        colorAttr.array[i * 3] = c.r;
        colorAttr.array[i * 3 + 1] = c.g;
        colorAttr.array[i * 3 + 2] = c.b;
      }
      posAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;

      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.015;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.015;
      camera.lookAt(2, 0, 0);

      composer.render();
      frameId = requestAnimationFrame(tick);
    }
    tick();

    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      geometry.dispose();
      material.dispose();
      material.map?.dispose();
      renderer.dispose();
      composer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
