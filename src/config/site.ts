import { profile } from '../data/content';

export interface SiteLinks {
  email: string;
  scholar: string;
  github?: string;
  cv?: string;
}

export interface SiteConfig {
  name: string;
  formalRole: string;
  positioning: string;
  domains: readonly string[];
  location: string;
  profileImage?: string;
  customDomain?: string;
  links: SiteLinks;
}

export const siteConfig: SiteConfig = {
  name: profile.name,
  formalRole: profile.formalRole,
  positioning: profile.homepagePositioning,
  domains: profile.domains,
  location: profile.location,
  links: {
    email: profile.links.email,
    scholar: profile.links.googleScholar,
    github: profile.links.github,
    cv: profile.links.cv,
  },
};
