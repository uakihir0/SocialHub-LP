'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = [
  '#6364ff', // Mastodon
  '#1185fe', // Bluesky
  '#86b300', // Misskey
  '#4a154b', // Slack
  '#35465c', // Tumblr
];

export function FloatingNodes({ count }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        scale: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 0.5 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.getElapsedTime();
    const matrix = new THREE.Matrix4();

    particles.forEach((particle, i) => {
      const [x, y, z] = particle.position;
      const yOffset = Math.sin(time * particle.speed + i) * 0.5;

      matrix.setPosition(x, y + yOffset, z);
      meshRef.current!.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
    </instancedMesh>
  );
}
