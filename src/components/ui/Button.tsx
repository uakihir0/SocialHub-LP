'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  className,
}: ButtonProps) {
  const classes = cn(
    'px-8 py-4 rounded-lg font-semibold transition-colors inline-block',
    variant === 'primary' && 'bg-accent-primary hover:bg-accent-primary-hover text-white',
    variant === 'secondary' && 'bg-white/10 hover:bg-white/20 text-white border border-border',
    className
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: 'inline-block' }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
