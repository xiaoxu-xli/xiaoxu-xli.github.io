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
  location: string;
  profileImage?: string;
  customDomain?: string;
  links: SiteLinks;
}

export const siteConfig: SiteConfig = {
  name: 'Xiaoxu Li',
  formalRole: 'Senior Research Engineer',
  positioning: 'Senior Research Engineer | Applied Scientist',
  location: 'Melbourne, Australia',
  links: {
    email: 'mailto:xiaoxu.xli@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=vzGWmWQAAAAJ&hl=en',
  },
};
