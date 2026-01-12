'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/Card';

export function FeaturesSection() {
  const t = useTranslations('features');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          {t('title')}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('socialhub.title')}</h3>
            <motion.div variants={item} className="space-y-4">
              <Card
                title={t('socialhub.unifiedTimeline.title')}
                description={t('socialhub.unifiedTimeline.description')}
              />
              <Card
                title={t('socialhub.bulkPosting.title')}
                description={t('socialhub.bulkPosting.description')}
              />
              <Card
                title={t('socialhub.nativeApp.title')}
                description={t('socialhub.nativeApp.description')}
              />
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('planetlink.title')}</h3>
            <motion.div variants={item} className="space-y-4">
              <Card
                title={t('planetlink.multiplatform.title')}
                description={t('planetlink.multiplatform.description')}
              />
              <Card
                title={t('planetlink.opensource.title')}
                description={t('planetlink.opensource.description')}
              />
              <Card
                title={t('planetlink.modular.title')}
                description={t('planetlink.modular.description')}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
