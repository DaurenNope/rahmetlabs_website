'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import type { Dictionary } from '@/lib/content';
import Magnetic from './Magnetic';

const SKY = '#3A5D72';
const DUSK = '#2B3A4A';
const NIGHT = '#17140F';

function Masked({ text, accentClass }: { text: string; accentClass?: string }) {
  const words = text.split(' ').filter(Boolean);
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="w">
          <span className={accentClass}>{word}</span>
          {i < words.length - 1 ? <span className="sp" aria-hidden="true" /> : null}
        </span>
      ))}
    </>
  );
}

/* the shanyrak crown, drawn once and sampled into particle targets */
function buildCrownPoints(count: number): Float32Array {
  const S = 1200;
  const C = S / 2;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const x = cv.getContext('2d')!;
  x.translate(C, C);
  x.strokeStyle = '#fff';
  x.lineCap = 'round';
  const ring = (r: number, w: number) => {
    x.lineWidth = w;
    x.beginPath();
    x.arc(0, 0, r, 0, Math.PI * 2);
    x.stroke();
  };
  const seg = (x1: number, y1: number, x2: number, y2: number, w: number) => {
    x.lineWidth = w;
    x.beginPath();
    x.moveTo(x1, y1);
    x.lineTo(x2, y2);
    x.stroke();
  };
  const spiral = (cx: number, cy: number, startAng: number) => {
    x.lineWidth = 22;
    x.beginPath();
    for (let i = 0; i <= 64; i++) {
      const t = i / 64;
      const r = 10 + t * 84;
      const a = startAng + t * Math.PI * 4.1;
      const px = cx + Math.cos(a) * r;
      const py = cy + Math.sin(a) * r;
      i === 0 ? x.moveTo(px, py) : x.lineTo(px, py);
    }
    x.stroke();
  };
  ring(398, 24);
  ring(340, 13);
  seg(-350, -27, 350, -27, 26);
  seg(-350, 27, 350, 27, 26);
  seg(-27, -350, -27, 350, 26);
  seg(27, -350, 27, 350, 26);
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([sx, sy]) => seg(238 * sx, 27 * sy, 27 * sx, 238 * sy, 18));
  ring(64, 20);
  [45, 135, 225, 315].forEach((deg) => {
    const a = ((deg - 90) * Math.PI) / 180;
    spiral(Math.cos(a) * 492, Math.sin(a) * 492, a + Math.PI * 0.5);
  });

  const img = x.getImageData(0, 0, S, S).data;
  const pts: number[][] = [];
  for (let py = 0; py < S; py += 2) {
    for (let px = 0; px < S; px += 2) {
      if (img[(py * S + px) * 4 + 3] > 120) pts.push([px - C, C - py]);
    }
  }
  const out = new Float32Array(count * 3);
  const step = pts.length / count;
  for (let i = 0; i < count; i++) {
    const p = pts[Math.floor(i * step) % pts.length];
    out[i * 3] = p[0] + (Math.random() - 0.5) * 3;
    out[i * 3 + 1] = p[1] + (Math.random() - 0.5) * 3;
    out[i * 3 + 2] = 0;
  }
  return out;
}

/* the jailau scene line art, sampled into particle targets */
function buildScenePoints(
  count: number,
  img: HTMLImageElement,
  targetW: number,
  offsetX: number,
  offsetY: number
): { data: Float32Array; w: number; h: number } | null {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const x = cv.getContext('2d')!;
  x.drawImage(img, 0, 0);
  const data = x.getImageData(0, 0, w, h).data;
  const pts: number[][] = [];
  let minX = w, minY = h, maxX = 0, maxY = 0;
  for (let py = 0; py < h; py += 2) {
    for (let px = 0; px < w; px += 2) {
      const i = (py * w + px) * 4;
      // silhouettes are pure black on pure white: sample the dark forms
      if (data[i] + data[i + 1] + data[i + 2] < 300) {
        pts.push([px, py]);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
      }
    }
  }
  if (!pts.length) return null;
  // crop to the content bounding box so the scene fills its stage
  const cw = maxX - minX;
  const ch = maxY - minY;
  const sc = targetW / cw;
  const out = new Float32Array(count * 3);
  const step = pts.length / count;
  for (let i = 0; i < count; i++) {
    const p = pts[Math.floor(i * step) % pts.length];
    out[i * 3] = (p[0] - minX - cw / 2) * sc + offsetX + (Math.random() - 0.5) * 2;
    out[i * 3 + 1] = (ch / 2 - (p[1] - minY)) * sc + offsetY + (Math.random() - 0.5) * 2;
    out[i * 3 + 2] = 0;
  }
  return { data: out, w: cw * sc, h: ch * sc };
}

const VERTEX = `
attribute vec3 aChaos;
attribute vec3 aScene;
attribute float aRand;
attribute float aSize;
attribute float aDust;
uniform float uProgress;
uniform float uMorph;
uniform float uPulse;
uniform float uTime;
uniform float uRot;
uniform vec2 uMouse;
uniform vec2 uCenter;
uniform float uDPR;
uniform float uAlpha;
varying float vT;
varying float vRand;
varying float vDust;
varying float vGlow;
varying float vShimmer;
void main() {
  float t = clamp((uProgress - aRand * 0.35) / 0.65, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  t = t * (1.0 - aDust);
  float m = clamp((uMorph - aRand * 0.3) / 0.7, 0.0, 1.0);
  m = m * m * (3.0 - 2.0 * m);
  float formed = max(t, m);
  vT = formed;
  vRand = aRand;
  vDust = aDust;

  // chaos -> crown, along a curved swirl path
  vec3 pos = mix(aChaos, position, t);
  vec2 dirC = position.xy - aChaos.xy;
  float dC = length(dirC);
  vec2 perpC = (vec2(-dirC.y, dirC.x) + vec2(0.0001)) / max(dC, 0.0001);
  pos.xy += perpC * sin(t * 3.14159) * min(dC * 0.35, 110.0) * (aRand * 2.0 - 1.0);

  // idle drift: coherent currents while scattered, settling as it forms
  float wob = (1.0 - formed) * 16.0 + 1.2;
  pos.x += sin(uTime * 0.4 + (pos.y + uCenter.y) * 0.006 + aRand * 2.0) * wob * 0.6;
  pos.y += cos(uTime * 0.33 + (pos.x + uCenter.x) * 0.005 + aRand * 2.0) * wob * 0.6;

  // crown rotation (spins up on release, uRot accumulates)
  float ang = uRot * t;
  float c = cos(ang), s = sin(ang);
  pos.xy = mat2(c, -s, s, c) * pos.xy;

  // crown -> scene: lift, arc, rain into the pasture
  vec2 dirS = aScene.xy - pos.xy;
  float dS = length(dirS);
  vec2 perpS = (vec2(-dirS.y, dirS.x) + vec2(0.0001)) / max(dS, 0.0001);
  float arc = sin(m * 3.14159);
  pos = mix(pos, aScene, m);
  pos.xy += perpS * arc * min(dS * 0.3, 90.0) * (aRand * 2.0 - 1.0);
  pos.y += arc * (30.0 + aRand * 120.0);

  // scene life: gentle ripple across the pasture, hover in the sky band
  float skyBand = smoothstep(40.0, 140.0, aScene.y);
  float grassBand = 1.0 - smoothstep(-140.0, -30.0, aScene.y);
  pos.x += sin(uTime * 1.15 + aScene.x * 0.02 + aRand * 1.5) * 2.2 * grassBand * m;
  pos.y += cos(uTime * 0.95 + aScene.x * 0.025) * 1.2 * grassBand * m;
  pos.x += sin(uTime * 0.3 + aRand * 6.2831) * 8.0 * skyBand * m;
  pos.y += sin(uTime * 0.7 + aRand * 6.2831) * 4.5 * skyBand * m;

  // constellation shimmer, always on
  vShimmer = 0.78 + 0.22 * sin(uTime * 1.7 + aRand * 43.0);

  // steppe motes: the ambient dust never fully stills once the land forms
  pos.x += sin(uTime * 0.22 + aRand * 6.2831) * 6.0 * aDust * m;
  pos.y += cos(uTime * 0.18 + aRand * 6.2831) * 4.0 * aDust * m;

  vec2 world = pos.xy + uCenter;

  // cursor repulsion
  vec2 d = world - uMouse;
  float dist = length(d);
  float rep = smoothstep(130.0, 0.0, dist);
  world += normalize(d + vec2(0.0001)) * rep * 46.0 * (0.35 + 0.65 * (1.0 - t));

  // lock pulse: a bright wave through the crown the moment it completes
  float pd = length(pos.xy);
  float wave = exp(-abs(pd - uPulse * 700.0) * 0.015) * (1.0 - uPulse);
  vGlow = wave * t * (1.0 - m);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(world, 0.0, 1.0);
  gl_PointSize = aSize * uDPR * (1.0 + m * 0.6) * (1.0 + rep * 1.6 + vGlow * 2.2);
}
`;

const FRAGMENT = `
varying float vT;
varying float vRand;
varying float vDust;
varying float vGlow;
varying float vShimmer;
uniform float uAlpha;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float a = smoothstep(0.5, 0.3, length(uv));
  vec3 ink = vec3(0.09, 0.078, 0.06);
  vec3 bone = vec3(0.949, 0.929, 0.886);
  vec3 col = mix(ink, bone, vT);
  col = mix(col, vec3(1.0, 0.98, 0.94), step(0.985, vRand) * vT * 0.8);
  col = mix(col, vec3(1.0), clamp(vGlow * 1.6, 0.0, 1.0));
  float alpha = a * mix(0.85, 1.0, vT) * vShimmer;
  alpha *= (1.0 - vDust * 0.55);
  gl_FragColor = vec4(col, alpha * uAlpha);
}
`;

export default function Hero({ t }: { t: Dictionary }) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 900px)').matches;
    if (reduced) document.body.classList.add('reduced');

    let renderer: THREE.WebGLRenderer | null = null;
    let rafId = 0;
    let disposed = false;
    const cleanups: (() => void)[] = [];

    const prog = { p: reduced ? 1 : 0 };
    const morph = { m: reduced ? 1 : 0 };
    const pulse = { v: 1 };
    const rotSpeed = { v: 0.05 };
    const cam = { z: 1 };
    let rotAcc = 0;
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    const setCounter = () => {
      const elm = counterRef.current;
      if (!elm) return;
      if (morph.m > 0.02) {
        elm.textContent = 'HOME ' + String(Math.round(morph.m * 100)).padStart(2, '0') + '%';
      } else {
        elm.textContent = 'ORDER ' + String(Math.round(prog.p * 100)).padStart(2, '0') + '%';
      }
    };
    setCounter();

    function initGL(sceneImg: HTMLImageElement | null) {
      if (disposed) return;
      renderer = new THREE.WebGLRenderer({
        canvas: canvas!,
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(vw, vh, false);
      const scene3 = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-vw / 2, vw / 2, vh / 2, -vh / 2, 1, 1000);
      camera.position.z = 10;

      const COUNT = isDesktop ? 48000 : 22000;
      const DUST = isDesktop ? 6000 : 2600;
      const crownPts = buildCrownPoints(COUNT);
      const crownScale = Math.min(vw, vh) * (isDesktop ? 0.00115 : 0.0008);
      const center = new THREE.Vector2(vw * (isDesktop ? 0.235 : 0), isDesktop ? 0 : -vh * 0.17);

      const sceneW = isDesktop ? vw * 0.5 : vw * 1.04;
      const sceneOffX = vw * (isDesktop ? 0.18 : 0) - center.x;
      const sceneOffY = (isDesktop ? -vh * 0.04 : -vh * 0.16) - center.y;
      const scenePts = sceneImg
        ? buildScenePoints(COUNT, sceneImg, sceneW, sceneOffX, sceneOffY)
        : null;

      const chaos = new Float32Array(COUNT * 3);
      const target = new Float32Array(COUNT * 3);
      const sceneA = new Float32Array(COUNT * 3);
      const rand = new Float32Array(COUNT);
      const size = new Float32Array(COUNT);
      const dust = new Float32Array(COUNT);
      for (let i = 0; i < COUNT; i++) {
        const isDust = i >= COUNT - DUST;
        chaos[i * 3] = (Math.random() - 0.5) * vw * 1.15 - center.x;
        chaos[i * 3 + 1] = (Math.random() - 0.5) * vh * 1.15 - center.y;
        chaos[i * 3 + 2] = 0;
        if (isDust) {
          target[i * 3] = chaos[i * 3];
          target[i * 3 + 1] = chaos[i * 3 + 1];
          dust[i] = 1;
        } else {
          target[i * 3] = crownPts[i * 3] * crownScale * 1.12;
          target[i * 3 + 1] = crownPts[i * 3 + 1] * crownScale * 1.12;
        }
        rand[i] = Math.random();
        size[i] = isDust ? 1.1 + Math.random() * 1.2 : 2.6 + Math.random() * 2.9;
        if (scenePts && !isDust) {
          sceneA[i * 3] = scenePts.data[i * 3];
          sceneA[i * 3 + 1] = scenePts.data[i * 3 + 1];
        } else if (scenePts && isDust) {
          /* the steppe dust becomes the land itself, full viewport width:
             grass band below the ground line, two rolling hill lines,
             and loose motes drifting in the air above the pasture */
          const groundY = sceneOffY - scenePts.h / 2;
          const role = Math.random();
          if (role < 0.45) {
            sceneA[i * 3] = (Math.random() - 0.5) * vw - center.x;
            sceneA[i * 3 + 1] = groundY + 4 - Math.random() * vh * 0.09;
          } else if (role < 0.7) {
            const px = (Math.random() - 0.5) * vw - center.x;
            const line = Math.random() < 0.5 ? 0 : 1;
            sceneA[i * 3] = px;
            sceneA[i * 3 + 1] =
              groundY + Math.sin((px + center.x) * 0.004 + line * 2.2) * (12 + line * 8) - 6 - line * 26;
          } else {
            sceneA[i * 3] = (Math.random() - 0.5) * vw - center.x;
            sceneA[i * 3 + 1] = groundY + 40 + Math.random() * vh * 0.5;
          }
        } else {
          sceneA[i * 3] = target[i * 3];
          sceneA[i * 3 + 1] = target[i * 3 + 1];
        }
        sceneA[i * 3 + 2] = 0;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(target, 3));
      geo.setAttribute('aChaos', new THREE.BufferAttribute(chaos, 3));
      geo.setAttribute('aScene', new THREE.BufferAttribute(sceneA, 3));
      geo.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
      geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
      geo.setAttribute('aDust', new THREE.BufferAttribute(dust, 1));

      const uniforms = {
        uProgress: { value: prog.p },
        uMorph: { value: morph.m },
        uPulse: { value: 1 },
        uTime: { value: 0 },
        uRot: { value: 0 },
        uMouse: { value: new THREE.Vector2(9999, 9999) },
        uCenter: { value: center },
        uDPR: { value: Math.min(window.devicePixelRatio, 2) },
        uAlpha: { value: 1 },
      };

      const mat = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthTest: false,
        vertexShader: VERTEX,
        fragmentShader: FRAGMENT,
      });

      const points = new THREE.Points(geo, mat);
      scene3.add(points);

      let running = true;
      let inView = true;
      const start = performance.now();
      let last = start;

      const frame = (now: number) => {
        rafId = requestAnimationFrame(frame);
        if (!running || !inView || !renderer) return;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        rotAcc += rotSpeed.v * dt;
        camera.zoom = cam.z;
        camera.updateProjectionMatrix();
        uniforms.uTime.value = (now - start) / 1000;
        uniforms.uProgress.value = prog.p;
        uniforms.uMorph.value = morph.m;
        uniforms.uPulse.value = pulse.v;
        uniforms.uRot.value = rotAcc;
        renderer.render(scene3, camera);
      };
      rafId = requestAnimationFrame(frame);

      const onResize = () => {
        vw = window.innerWidth;
        vh = window.innerHeight;
        if (!renderer) return;
        renderer.setSize(vw, vh, false);
        camera.left = -vw / 2;
        camera.right = vw / 2;
        camera.top = vh / 2;
        camera.bottom = -vh / 2;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      const io = new IntersectionObserver((e) => {
        inView = e[0].isIntersecting;
      });
      io.observe(canvas!);
      cleanups.push(() => io.disconnect());

      const onVis = () => {
        running = document.visibilityState === 'visible';
        last = performance.now();
      };
      document.addEventListener('visibilitychange', onVis);
      cleanups.push(() => document.removeEventListener('visibilitychange', onVis));

      if (isDesktop && !reduced) {
        const onMove = (e: PointerEvent) => {
          uniforms.uMouse.value.set(e.clientX - vw / 2, -(e.clientY - vh / 2));
        };
        const onLeave = () => uniforms.uMouse.value.set(9999, 9999);
        root!.addEventListener('pointermove', onMove);
        root!.addEventListener('pointerleave', onLeave);
        cleanups.push(() => {
          root!.removeEventListener('pointermove', onMove);
          root!.removeEventListener('pointerleave', onLeave);
        });
      }

      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        geo.dispose();
        mat.dispose();
        renderer?.dispose();
      });

      buildTimeline();
    }

    function buildTimeline() {
      const stateA = root!.querySelector('.state-a');
      const stateB = root!.querySelector('.state-b');
      const stateC = root!.querySelector('.state-c');
      const aSpans = root!.querySelectorAll('.state-a .w > span');
      const bSpans = root!.querySelectorAll('.state-b .w > span');
      const cSpans = root!.querySelectorAll('.state-c .w > span');
      const sub = root!.querySelector('.sub');
      const ctas = root!.querySelector('.cta-row');
      const scrollCue = root!.querySelector('.scroll-cue');

      gsap.set(root, { backgroundColor: SKY });

      if (reduced) {
        gsap.set([aSpans, bSpans, cSpans], { y: 0 });
        gsap.set([sub, ctas, root!.querySelector('.hero-kicker')], { opacity: 1, y: 0 });
        gsap.set(root, { backgroundColor: NIGHT });
        setCounter();
        return;
      }

      /* states share one grid cell: only one may ever be visible.
         the wrapper crossfades hard; the word masks only flavor the cut */
      gsap.set([stateB, stateC], { autoAlpha: 0 });

      gsap.to(aSpans, { y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.055, delay: 0.25 });
      gsap.to(root!.querySelector('.hero-kicker'), { opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.5 });
      gsap.to(sub, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.9 });
      gsap.to(ctas, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 1.05 });

      /* act one: chaos swirls into the crown, pulse at lock, headline flips.
         act two: spin-up release, crown rains into the night-pasture
         constellation scene, field journeys sky -> dusk -> night. */
      const tl = gsap.timeline({ paused: true, onUpdate: setCounter });
      /* the camera travels: push into the crown as it forms, pull back
         to reveal the land as the crown dissolves */
      tl.to(cam, { z: 1.14, duration: 0.34, ease: 'none' }, 0);
      tl.to(prog, { p: 1, duration: 0.32, ease: 'none' }, 0);
      tl.to(scrollCue, { opacity: 0, duration: 0.06, ease: 'none' }, 0.05);
      tl.fromTo(pulse, { v: 0.001 }, { v: 1, duration: 0.1, ease: 'power2.out' }, 0.315);
      tl.to(stateA, { autoAlpha: 0, duration: 0.035, ease: 'none' }, 0.26);
      tl.fromTo(
        aSpans,
        { y: '0%' },
        { y: '-115%', duration: 0.05, stagger: 0.008, ease: 'power2.in', immediateRender: false, overwrite: 'auto' },
        0.26
      );
      tl.to(stateB, { autoAlpha: 1, duration: 0.035, ease: 'none' }, 0.3);
      tl.fromTo(bSpans, { y: '115%' }, { y: '0%', duration: 0.06, stagger: 0.009, ease: 'expo.out' }, 0.3);
      /* act three of the story: the night pasture gets its own line */
      tl.to(stateB, { autoAlpha: 0, duration: 0.035, ease: 'none' }, 0.62);
      tl.fromTo(
        bSpans,
        { y: '0%' },
        { y: '-115%', duration: 0.05, stagger: 0.008, ease: 'power2.in', immediateRender: false, overwrite: 'auto' },
        0.62
      );
      tl.to(stateC, { autoAlpha: 1, duration: 0.04, ease: 'none' }, 0.66);
      tl.fromTo(cSpans, { y: '115%' }, { y: '0%', duration: 0.07, stagger: 0.01, ease: 'expo.out', immediateRender: false }, 0.66);
      tl.to(rotSpeed, { v: 0.55, duration: 0.05, ease: 'power1.in' }, 0.44);
      tl.to(rotSpeed, { v: 0, duration: 0.08, ease: 'power1.out' }, 0.5);
      tl.to(cam, { z: 0.94, duration: 0.42, ease: 'none' }, 0.46);
      tl.to(morph, { m: 1, duration: 0.38, ease: 'none' }, 0.5);
      tl.to(root, { backgroundColor: DUSK, duration: 0.16, ease: 'none' }, 0.46);
      tl.to(root, { backgroundColor: NIGHT, duration: 0.2, ease: 'none' }, 0.62);
      if (!isDesktop) {
        // mobile: only the sub bows out; the headline flips to the night line
        // and the CTA must persist — motivation peaks in the night pasture
        tl.to(sub, { opacity: 0, y: -20, duration: 0.1, ease: 'power1.in', immediateRender: false }, 0.6);
      }

      const st = gsap.to(tl, {
        progress: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 0.45,
          onUpdate: (self) => {
            /* the field starts darkening at 0.46 (dusk): flip the CTAs
               to bone as soon as the ink button would go dark-on-dark */
            root!.classList.toggle('night', self.progress > 0.48);
            const prog = root!.querySelector<HTMLElement>('.hero-progress');
            if (prog) prog.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
      cleanups.push(() => {
        st.scrollTrigger?.kill();
        st.kill();
        tl.kill();
      });
      /* the pin spacer shifts every section below by 260vh — triggers mounted
         earlier measured a pre-pin layout and must be recalculated */
      ScrollTrigger.refresh();
    }

    const sceneImg = new Image();
    sceneImg.onload = () => initGL(sceneImg);
    sceneImg.onerror = () => initGL(null);
    sceneImg.src = '/scene/nomad-scene.png';

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
      document.body.classList.remove('reduced');
    };
  }, []);

  const h = t.hero;
  return (
    <header ref={rootRef} className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <span className="comet" aria-hidden="true" />
      <span className="hero-progress" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-kicker mono">{h.kicker}</p>
        <h1>
          <span className="state state-a">
            <Masked text={`${h.line1} ${h.line2}`} />
            <span className="sp" aria-hidden="true" />
            <Masked text={h.line2Accent} accentClass="a-manual" />
          </span>
          <span className="state state-b">
            <Masked text={h.line3} />
            <span className="sp" aria-hidden="true" />
            <Masked text={h.line3Accent} accentClass="a-system" />
            <span className="sp" aria-hidden="true" />
            <Masked text={h.line3Tail} />
          </span>
          <span className="state state-c">
            <Masked text={h.line4} />
          </span>
        </h1>
        <p className="sub">{h.subheadline}</p>
        <div className="cta-row">
          <Magnetic>
            <a className="btn-tumar" href="#contact">
              {h.ctaPrimary}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H3.5M11 2V9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Magnetic>
          <a className="btn-ghost" href="#work">
            {h.ctaSecondary}
          </a>
        </div>
      </div>
      <span className="tele mono tele-tl">
        Almaty <b>43.24°N 76.91°E</b>
      </span>
      <span className="tele mono tele-r">
        <b>EN / RU / KZ</b>
      </span>
      <span className="tele mono tele-br">
        {h.weeksLabel} <b>{h.weeksValue}</b>
      </span>
      <a className="tele mono tele-skip" href="#doors">
        {h.skipLabel} ↓
      </a>
      <span className="tele mono scroll-cue">{h.scrollLabel}</span>
      <span className="tele mono tele-counter" ref={counterRef}>
        ORDER 00%
      </span>
    </header>
  );
}
