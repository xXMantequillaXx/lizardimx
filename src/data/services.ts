import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    icon: 'Brain',
    description: 'Pragmatic AI strategy and implementation for businesses ready to leverage artificial intelligence.',
    href: '/services/ai-consulting',
    features: [
      'AI strategy development',
      'Implementation roadmaps',
      'Integration with existing systems',
      'AI-assisted workflow design',
    ],
  },
  {
    id: 'security',
    title: 'Security Services',
    icon: 'Shield',
    description: 'Comprehensive protection across cyber and physical domains for businesses and residences.',
    href: '/services/security',
    features: [
      'Cybersecurity assessments',
      'Physical security systems',
      'Managed security services',
      '24/7 monitoring options',
    ],
  },
  {
    id: 'brand-protection',
    title: 'Brand Protection',
    icon: 'Megaphone',
    description: 'Reputation defense, crisis communications, and strategic messaging for information resilience.',
    href: '/services/brand-protection',
    features: [
      'Reputation monitoring',
      'Crisis communications',
      'Strategic messaging',
      'Digital threat response',
    ],
  },
  {
    id: 'integrated-security',
    title: 'Integrated Security',
    icon: 'Layers',
    description: 'Full-spectrum protection combining physical, cyber, and reputation defense.',
    href: '/services/integrated-security',
    featured: true,
    features: [
      'Physical premises security',
      'Cyber infrastructure protection',
      'Reputation monitoring & defense',
      'Unified threat assessment',
    ],
  },
];
