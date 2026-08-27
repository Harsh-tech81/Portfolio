import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import useIsMobile from '../../hooks/useIsMobile';

const Particles = () => {
  const mesh = useRef();
  const { theme } = useTheme();
  const { invalidate } = useThree();

  const isDark = theme === 'dark';
  const particleColor = isDark ? '#818cf8' : '#4f46e5'; // Indigo-400 / Indigo-600

  const count = 50;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5;
      temp.push({
        position: new THREE.Vector3(x, y, z),
        rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, 0),
        scale: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.02 + 0.01,
        seed: Math.random() * 100
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = (state.pointer.x * 2);
    const mouseY = (state.pointer.y * 2);
    
    if (mesh.current) {
      particles.forEach((particle, i) => {
        dummy.position.copy(particle.position);
        
        // Float effect using sin waves
        dummy.position.y += Math.sin(time * particle.speed + particle.seed) * 0.05;
        dummy.position.x += Math.cos(time * particle.speed + particle.seed) * 0.05;
        
        // Parallax effect based on mouse movement
        dummy.position.x += (mouseX - dummy.position.x) * 0.01;
        dummy.position.y += (mouseY - dummy.position.y) * 0.01;

        dummy.rotation.x = particle.rotation.x + time * particle.speed;
        dummy.rotation.y = particle.rotation.y + time * particle.speed;
        
        dummy.scale.set(particle.scale, particle.scale, particle.scale);
        dummy.updateMatrix();
        
        mesh.current.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }

    // With frameloop="demand", we must explicitly request the next frame
    invalidate();
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color={particleColor} 
        transparent 
        opacity={isDark ? 0.4 : 0.2}
        wireframe
      />
    </instancedMesh>
  );
};

/** Lightweight CSS-only gradient background for mobile (no GPU-heavy WebGL) */
const MobileBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs — pure CSS, GPU-friendly via transform */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #818cf8 0%, transparent 70%)'
            : 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
          animation: 'mobileOrb1 8s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(circle, #a78bfa 0%, transparent 70%)'
            : 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          animation: 'mobileOrb2 10s ease-in-out infinite alternate',
        }}
      />
    </div>
  );
};

const HeroBackground = () => {
  const isMobile = useIsMobile();

  // On mobile, skip the entire Three.js Canvas to avoid GPU lag
  if (isMobile) {
    return <MobileBackground />;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 75 }}
          frameloop="demand"
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Particles />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroBackground;
