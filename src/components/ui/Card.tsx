import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className }: CardProps) {
  return (
    <div className={cn(
      'p-6 rounded-xl bg-white/5 border border-border hover:border-border-hover transition-colors',
      className
    )}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground-secondary">{description}</p>
    </div>
  );
}
