'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 多様なカラーパレット（輝度を抑えた暗めの色）
const COLORS = [
  { color: '#3a3b88', emissive: '#2a2b68' }, // 深い紫
  { color: '#0d5a8d', emissive: '#0a4a6d' }, // 深い青
  { color: '#4a6800', emissive: '#3a5100' }, // オリーブグリーン
  { color: '#883a56', emissive: '#682a3e' }, // ディープローズ
  { color: '#2a6a5c', emissive: '#1a5a4c' }, // ティールグリーン
  { color: '#855a2a', emissive: '#654a1a' }, // ブロンズ
  { color: '#6a3a88', emissive: '#4a2a68' }, // アメジスト
  { color: '#2a4a6a', emissive: '#1a3a5a' }, // ネイビー
  { color: '#6a5a2a', emissive: '#4a3a1a' }, // ゴールドブラウン
  { color: '#3a885a', emissive: '#2a684a' }, // エメラルド
];

export function FloatingNodes({ count }: { count: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const colorData = COLORS[Math.floor(Math.random() * COLORS.length)];
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        // サイズを3段階に分けて多様化
        scale: Math.random() < 0.3 ? 0.08 : Math.random() < 0.6 ? 0.12 : 0.16,
        speed: Math.random() * 0.5 + 0.2,
        color: colorData.color,
        emissive: colorData.emissive,
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const time = clock.getElapsedTime();

    groupRef.current.children.forEach((mesh, i) => {
      const particle = particles[i];
      const [x, y, z] = particle.position;
      const yOffset = Math.sin(time * particle.speed + i) * 0.5;

      mesh.position.set(x, y + yOffset, z);
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.emissive}
            emissiveIntensity={0.22}
            opacity={0.75}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}
