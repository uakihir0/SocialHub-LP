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

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://x.com/uakihir0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-foreground transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <div className="text-center text-sm text-foreground-muted">
            {t('copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}
