export type ResearchThemeSlug =
  | 'data-efficient-medical-imaging'
  | '3d-reconstruction-and-diffusion'
  | 'point-cloud-medical-image-analysis'
  | 'dinov3-and-sam-large-scale-segmentation';

export type PublicationId =
  | 'iconip-2026-rib-segmentation'
  | 'iconip-2026-cbct-reconstruction'
  | 'eswa-2026-partial-supervision'
  | 'foot-ankle-specialist-2026-first-ray'
  | 'scientific-reports-2025-wbct-mdct-equivalence'
  | 'icassp-2025-partial-supervision'
  | 'miccai-2024-dcdiff'
  | 'bspc-2023-patch-shuffle'
  | 'elife-2023-fracture-prediction'
  | 'dicta-2022-footseg'
  | 'dicta-2021-wrist-instance-segmentation'
  | 'npl-2020-emotion-classification'
  | 'neurocomputing-2019-emotion-classification'
  | 'cavw-2017-character-deformation'
  | 'ccbr-2017-sign-language-recognition'
  | 'cccv-2017-sequence-to-sequence-sign-language';

export type ProjectSlug =
  | 'production-3d-medical-ai-nnunet-lifecycle'
  | 'llm-rag-application-platform'
  | 'knowledge-graph-graph-enhanced-retrieval'
  | 'anatomical-region-landmark-detection'
  | 'quantitative-bone-ct-analysis'
  | 'medical-imaging-data-infrastructure'
  | 'aws-full-stack-demonstration';

export interface SourceReference {
  document: 'docs/FACTS.md';
  sections: readonly string[];
}

export interface ProfileLinkSet {
  email: string;
  googleScholar: string;
  github?: string;
  cv?: string;
}

export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export interface EducationRecord {
  qualification: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  thesis?: string;
}

export interface Profile {
  name: string;
  formalRole: string;
  homepagePositioning: string;
  domains: readonly string[];
  location: string;
  industryResearchSince: number;
  summary: string;
  homepageIntroduction: readonly string[];
  about: readonly string[];
  links: ProfileLinkSet;
  skillGroups: readonly SkillGroup[];
  education: readonly EducationRecord[];
  source: SourceReference;
}

export interface ExperienceRole {
  title: string;
  startDate: string;
  endDate?: string;
}

export interface ProfessionalExperience {
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  roles: readonly ExperienceRole[];
  highlights: readonly string[];
  technologies: readonly string[];
  source: SourceReference;
}

export type PublicationStatus = 'accepted' | 'published' | 'in press' | 'preprint';

export interface Publication {
  id: PublicationId;
  title: string;
  authors: readonly string[];
  venue: string;
  year: number;
  volume?: string;
  status?: PublicationStatus;
  selected: boolean;
  relatedResearchTheme?: ResearchThemeSlug;
  url?: string;
  codeUrl?: string;
  pdfUrl?: string;
  source: SourceReference;
}

export interface ContentLinks {
  url?: string;
  codeUrl?: string;
  pdfUrl?: string;
}

export interface PortfolioRecord {
  slug: string;
  title: string;
  shortSummary: string;
  problem?: string;
  methods?: readonly string[];
  outcomes?: readonly string[];
  technologies?: readonly string[];
  relatedPublications?: readonly PublicationId[];
  links?: ContentLinks;
  featured: boolean;
  source: SourceReference;
}

export interface ResearchTheme extends PortfolioRecord {
  slug: ResearchThemeSlug;
  order: number;
}

export interface AppliedProject extends PortfolioRecord {
  slug: ProjectSlug;
  detailLevel: 'primary' | 'compact';
}

export interface HomepageWorkItem {
  slug: string;
  title: string;
  summary: string;
  outcomes: readonly string[];
  technologies: readonly string[];
  source: SourceReference;
}

export interface HumanReviewItem {
  id: string;
  subject: string;
  note: string;
  affectedRecords: readonly string[];
  source: SourceReference;
}
