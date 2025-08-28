'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const createScene = useCallback(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10; // Spread particles in a cube
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xffffff,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const animate = () => {
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.clear();
    };
  }, []);

  useEffect(() => {
    const cleanup = createScene();
    return cleanup;
  }, [createScene]);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
}
