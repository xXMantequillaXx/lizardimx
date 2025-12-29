import type { NavLink } from '../types';

export const navigation = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Contact', href: '/contact' },
  ] as NavLink[],

  footer: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Newsletter', href: '/newsletter' },
  ] as NavLink[],

  services: [
    { label: 'AI Consulting', href: '/services/ai-consulting' },
    { label: 'Security Services', href: '/services/security' },
    { label: 'Brand Protection', href: '/services/brand-protection' },
    { label: 'Integrated Security', href: '/services/integrated-security' },
  ] as NavLink[],
};
