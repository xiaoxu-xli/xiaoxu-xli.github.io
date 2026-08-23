import type { AppliedProject, HomepageWorkItem, ResearchTheme } from '../../types/content';
import { projects } from './projects';
import { researchThemes } from './researchThemes';

interface WorkSelection {
  title: string;
  summary: string;
  outcomeIndexes: readonly number[];
  technologyIndexes: readonly number[];
}

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));
const researchBySlug = new Map(researchThemes.map((theme) => [theme.slug, theme]));

const selectWork = (
  record: AppliedProject | ResearchTheme,
  selection: WorkSelection,
): HomepageWorkItem => ({
  slug: record.slug,
  title: selection.title,
  summary: selection.summary,
  outcomes: selection.outcomeIndexes.flatMap((index) => record.outcomes?.[index] ?? []),
  technologies: selection.technologyIndexes.flatMap(
    (index) => record.technologies?.[index] ?? [],
  ),
  source: record.source,
});

const requireProject = (slug: AppliedProject['slug']): AppliedProject => {
  const project = projectBySlug.get(slug);

  if (!project) {
    throw new Error(`Missing homepage project: ${slug}`);
  }

  return project;
};

const requireResearch = (slug: ResearchTheme['slug']): ResearchTheme => {
  const theme = researchBySlug.get(slug);

  if (!theme) {
    throw new Error(`Missing homepage research theme: ${slug}`);
  }

  return theme;
};

export const homepageWork: readonly HomepageWorkItem[] = [
  selectWork(requireProject('production-3d-medical-ai-nnunet-lifecycle'), {
    title: 'Production 3D Medical AI',
    summary:
      'Production 3D CT/CBCT segmentation across multiple anatomical regions, paired with an nnU-Net lifecycle for repeatable training, validation, cloud deployment, and model improvement.',
    outcomeIndexes: [0, 1],
    technologyIndexes: [0, 1, 2, 3],
  }),
  selectWork(requireResearch('data-efficient-medical-imaging'), {
    title: 'Data-Efficient Medical Imaging',
    summary:
      'Annotation-efficient CT segmentation using semi-supervised learning, pseudo-labelling, partial supervision, and domain adaptation.',
    outcomeIndexes: [0, 1],
    technologyIndexes: [0, 1, 2, 3],
  }),
  selectWork(requireResearch('3d-reconstruction-and-diffusion'), {
    title: '3D Reconstruction & Diffusion',
    summary:
      'Conditional diffusion for volumetric CBCT reconstruction across clinical-dose and low-dose settings, alongside dual-domain CT metal artifact reduction.',
    outcomeIndexes: [1, 2],
    technologyIndexes: [0, 1, 2, 3],
  }),
  selectWork(requireResearch('point-cloud-medical-image-analysis'), {
    title: 'Point-Cloud Medical Image Analysis',
    summary:
      'Sparse point-cloud processing for rib segmentation, including one-stage and two-stage pipeline analysis and efficiency–accuracy trade-offs.',
    outcomeIndexes: [0, 1],
    technologyIndexes: [0, 1],
  }),
  selectWork(requireProject('llm-rag-application-platform'), {
    title: 'LLM / RAG Application Platform',
    summary:
      'A modular FastAPI platform with interchangeable OpenAI and local-Llama backends for literature retrieval, paper summarisation, and corpus-grounded RAG.',
    outcomeIndexes: [0, 1],
    technologyIndexes: [0, 2, 3, 5],
  }),
  selectWork(requireResearch('dinov3-and-sam-large-scale-segmentation'), {
    title: 'DINOv3 & SAM',
    summary:
      'A large-scale segmentation workflow using DINOv3 features for representative-sample selection and SAM-assisted annotation with expert refinement.',
    outcomeIndexes: [0],
    technologyIndexes: [0, 1, 2, 3],
  }),
];
