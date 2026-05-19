"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";

function Blob() {
  const mesh = useRef();
  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.12 + pointer.y * 0.3;
    mesh.current.rotation.y = t * 0.18 + pointer.x * 0.4;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 48]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#1e0f4d"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.7}
          distort={0.45}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 180 }) {
  const points = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        color="#a5b4fc"
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);

    const onVisibility = () => {
      if (document.hidden) setActive(false);
      else {
        // Only resume if hero is on screen
        const rect = el.getBoundingClientRect();
        const onScreen =
          rect.bottom > 0 && rect.top < window.innerHeight;
        setActive(onScreen);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={wrapRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "never"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 5, 2]} intensity={1.4} color="#d8b4fe" />
        <directionalLight position={[-4, -2, -2]} intensity={0.8} color="#67e8f9" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#ffffff" />
        <Suspense fallback={null}>
          <Blob />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
