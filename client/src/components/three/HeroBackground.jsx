import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const Particles = () => {
  const mesh = useRef();
  const { theme } = useTheme();

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

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Suspense fallback={null}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 75 }}
          frameloop="always"
          dpr={[1, 2]}
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
