export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  icon: string;
  description: string;
  href: string;
  features: string[];
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
