'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  isMenuOpen?: boolean;
}

export default function ThreeBackground({ isMenuOpen = false }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

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
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      preserveDrawingBuffer: true // Ayuda con el z-index
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limitar para mejor rendimiento
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1'; // Asegurar que esté detrás
    renderer.domElement.style.pointerEvents = 'none'; // Evitar interferencias con eventos
    
    rendererRef.current = renderer;
    currentMount.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMenuOpen ? 2000 : 5000; // Reducir partículas cuando el menú está abierto
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xffffff,
      transparent: true,
      opacity: isMenuOpen ? 0.3 : 0.8, // Reducir opacidad cuando el menú está abierto
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const animate = () => {
      if (isMenuOpen) {
        // Pausar animación cuando el menú está abierto para mejor rendimiento
        return;
      }
      
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
      if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.clear();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const cleanup = createScene();
    return cleanup;
  }, [createScene]);

  // Actualizar opacidad del renderer cuando cambia el estado del menú
  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.domElement.style.opacity = isMenuOpen ? '0.3' : '1';
    }
  }, [isMenuOpen]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0"
      style={{ zIndex: -1 }} 
    />
  );
}