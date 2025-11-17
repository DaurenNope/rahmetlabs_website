'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export default function ThreeDScene() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometry network
    const geometries = [];
    const materials = [];
    const meshes = [];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.IcosahedronGeometry(Math.random() * 0.5 + 0.1, 0);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.5),
        emissive: new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.7, 0.2),
        shininess: 100,
        transparent: true,
        opacity: 0.8
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      geometries.push(geometry);
      materials.push(material);
      meshes.push(mesh);
      scene.add(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 0.8, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 * (index % 3 + 1);
        mesh.rotation.y += 0.002 * (index % 2 + 1);
        
        // Floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        
        // React to mouse
        const mouseX = (mousePos.x - 0.5) * 2;
        const mouseY = (mousePos.y - 0.5) * 2;
        mesh.position.x += (mouseX - mesh.position.x * 0.1) * 0.01;
        mesh.position.z += (mouseY - mesh.position.z * 0.1) * 0.01;
      });

      // Rotate scene slightly
      scene.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      renderer.dispose();
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [mousePos]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}
