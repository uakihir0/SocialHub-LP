'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PlatformIconProps {
  name: string;
  icon: string;
  color: string;
}

export function PlatformIcon({ name, icon, color }: PlatformIconProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        filter: `drop-shadow(0 0 20px ${color}66)`
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 border border-border">
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      <span className="text-sm text-foreground-secondary">{name}</span>
    </motion.div>
  );
}
