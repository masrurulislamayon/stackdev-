import {
  AppWindow,
  Briefcase,
  Globe,
  PenTool,
  ShoppingBag,
  Smartphone,
} from 'lucide-react';
import type { ServiceIconName } from '@/src/data/services';

export function ServiceIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: ServiceIconName;
  className?: string;
}) {
  switch (name) {
    case 'globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={className} aria-hidden="true" />;
    case 'pen-tool':
      return <PenTool className={className} aria-hidden="true" />;
    case 'shopping-bag':
      return <ShoppingBag className={className} aria-hidden="true" />;
    case 'app-window':
      return <AppWindow className={className} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={className} aria-hidden="true" />;
  }
}
