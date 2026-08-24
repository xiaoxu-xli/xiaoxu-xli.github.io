import type { AppliedProject, HomepageWorkItem, ResearchTheme } from '../../types/content';
import { projects } from './projects';
import { researchThemes } from './researchThemes';

interface WorkSelection {
  title: string;
  summary: string;
  outcomes?: readonly string[];
  outcomeIndexes?: readonly number[];
  technologies?: readonly string[];
  technologyIndexes?: readonly number[];
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
  outcomes:
    selection.outcomes ??
    selection.outcomeIndexes?.flatMap((index) => record.outcomes?.[index] ?? []) ??
    [],
  technologies:
    selection.technologies ??
    selection.technologyIndexes?.flatMap((index) => record.technologies?.[index] ?? []) ??
    [],
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
      'Production-grade 3D medical AI systems with end-to-end MLOps workflows covering model development, automated validation, CI/CD, cloud deployment, and production inference.',
    outcomes: [
      'Developed a unified lower-limb segmentation framework covering hip, knee, and foot anatomy across all 34 lower-limb bones.',
      'Built production inference workflows on AWS using Docker, Kubernetes/EKS, Lambda, SQS, S3, and API Gateway, reducing end-to-end CT processing time from approximately 2 hours to 15 minutes.',
      'Integrated end-to-end model validation and deployment workflows into CI/CD using CodeBuild, CodePipeline, and CloudFormation, enabling repeatable testing and model updates across development and production environments.',
    ],
    technologies: ['3D Segmentation', 'nnU-Net', 'PyTorch', 'AWS / MLOps'],
  }),
  selectWork(requireResearch('data-efficient-medical-imaging'), {
    title: 'Data-Efficient Machine Learning',
    summary:
      'Data-efficient CT segmentation using semi-supervised learning, partial supervision, teacher–student learning, domain adaptation, and pseudo-labelling.',
    outcomes: [
      'Developed a sustained research line in data-efficient bone segmentation, evolving from semi-supervised learning (BSPC 2023) to partial supervision (ICASSP 2025) and the broader Probing, Priors, and Teaching framework (ESWA 2026).',
      'Built a pseudo-labelling workflow for wrist CT, producing 5,000+ annotated slices while reducing estimated annotation effort from ~336 hours to ~10 hours.',
    ],
    technologies: [
      'Semi-Supervised Learning',
      'Pseudo-Labelling',
      'Teacher–Student Learning',
      'Domain Adaptation',
    ],
  }),
  selectWork(requireResearch('3d-reconstruction-and-diffusion'), {
    title: '3D Reconstruction & Diffusion',
    summary:
      'Diffusion-based methods for 3D CBCT reconstruction and CT metal artifact reduction across image and projection domains.',
    outcomes: [
      'Developed conditional diffusion for volumetric CBCT reconstruction across clinical-dose and low-dose imaging settings, accepted at ICONIP 2026.',
      'Developed a dual-domain conditional diffusion approach for CT metal artifact reduction, published at MICCAI 2024.',
    ],
    technologies: [
      'Diffusion Models',
      '3D Reconstruction',
      'CBCT',
      'Metal Artifact Reduction',
    ],
  }),
  selectWork(requireResearch('point-cloud-medical-image-analysis'), {
    title: 'Point-Cloud Medical Image Analysis',
    summary:
      'Sparse 3D point-cloud learning for anatomical segmentation as an alternative to dense voxel-based CT processing.',
    outcomes: [
      'Investigated one-stage and two-stage rib-segmentation pipelines, examining how architecture and training design affect the performance of sparse point-cloud models.',
      'Analysed the effects of sampling density, graph size, augmentation, and model capacity, with the work accepted at ICONIP 2026.',
    ],
    technologies: [
      'Point-Cloud Learning',
      '3D Segmentation',
      'Sparse Representation',
      'CT',
    ],
  }),
  selectWork(requireProject('llm-rag-application-platform'), {
    title: 'LLM / RAG Systems',
    summary:
      'A modular large language model (LLM) and retrieval-augmented generation (RAG) system for scientific literature retrieval, summarisation, and corpus-grounded question answering.',
    outcomes: [
      'Developed a source-grounded retrieval architecture combining document ingestion, semantic embeddings, vector search, and context-aware generation across heterogeneous scientific corpora.',
      'Designed a modular LLM layer supporting both cloud-hosted and local inference backends, including OpenAI and local Llama models, with persistent literature caching and exploration of Neo4j-based knowledge graphs and hybrid vector–graph retrieval.',
    ],
    technologies: ['LLM / RAG', 'Sentence Transformers', 'ChromaDB', 'Neo4j'],
  }),
  selectWork(requireResearch('dinov3-and-sam-large-scale-segmentation'), {
    title: 'Foundation Models for Data-Centric Learning',
    summary:
      'Using foundation-model representations and assisted annotation to guide data selection and iterative segmentation.',
    outcomes: [
      'Investigated how foundation-model representations can support data curation by identifying distribution gaps and selecting diverse, representative samples for targeted dataset expansion.',
      'Developed a foundation-model-assisted learning loop combining DINOv3-based sample selection, SAM-assisted annotation, and iterative nnU-Net training and validation within a broader MLOps-enabled continuous-learning lifecycle.',
    ],
    technologies: ['Foundation Models', 'DINOv3', 'SAM', 'nnU-Net', 'MLOps'],
  }),
];

export const homepageExperience = {
  organization: 'CurveBeam AI (formerly Straxcorp)',
  highlights: [
    'Lead applied machine-learning R&D across 3D medical AI, data-efficient learning, diffusion and point-cloud models, foundation models, quantitative imaging, and LLM/RAG systems.',
    'Drive the full research-to-production and MLOps lifecycle, from clinical data curation and model experimentation through validation, CI/CD, cloud deployment, production inference, and continuous model improvement.',
    'Lead cross-functional R&D with engineers, clinicians, and university researchers, while supervising and mentoring 3 research engineers and 2 Ph.D. researchers, with collaborative work resulting in peer-reviewed publications across medical imaging and machine learning.',
  ],
} as const;
