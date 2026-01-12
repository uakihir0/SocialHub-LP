'use client';
import dynamic from 'next/dynamic';

const NetworkBackground = dynamic(() => import('./NetworkBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 gradient-hero" />
  ),
});

export function CanvasWrapper() {
  return <NetworkBackground />;
}
