'use client';
import { useTranslations } from 'next-intl';
import { APP_STORE_URL, GITHUB_URL } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">iOS App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('oss')}</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">PlanetLink</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>MIT License</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-foreground-muted">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
