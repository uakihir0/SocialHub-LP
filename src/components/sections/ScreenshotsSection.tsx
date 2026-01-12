'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { SCREENSHOTS } from '@/lib/constants';

export function ScreenshotsSection() {
  const t = useTranslations('screenshots');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-6 -mx-6 md:justify-center md:px-0 md:mx-0">
          {SCREENSHOTS.map((screenshot, i) => (
            <motion.div
              key={screenshot}
              className="flex-shrink-0 snap-center first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="relative w-[280px] h-[600px] rounded-3xl overflow-hidden border border-border">
                <Image
                  src={screenshot}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
