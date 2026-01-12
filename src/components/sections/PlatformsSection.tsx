'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { PlatformIcon } from '@/components/ui/PlatformIcon';
import { PLATFORMS } from '@/lib/constants';

export function PlatformsSection() {
  const t = useTranslations('platforms');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
            >
              <PlatformIcon
                name={t(platform.name.toLowerCase() as any)}
                icon={platform.icon}
                color={platform.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
