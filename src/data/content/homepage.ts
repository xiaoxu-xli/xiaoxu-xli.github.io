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
      'End-to-end deep-learning systems for 3D CT/CBCT segmentation, from model development and validation to automated deployment and production inference.',
    outcomes: [
      'Developed a unified lower-limb segmentation framework covering hip, knee, and foot anatomy across all 34 lower-limb bones.',
      'Built an nnU-Net-based model lifecycle and AWS inference pipeline, reducing end-to-end CT processing time from approximately 2 hours to 15 minutes.',
    ],
    technologies: ['3D Segmentation', 'nnU-Net', 'PyTorch', 'AWS'],
  }),
  selectWork(requireResearch('data-efficient-medical-imaging'), {
    title: 'Data-Efficient Medical Imaging',
    summary:
      'Learning from limited annotations through semi-supervised learning, pseudo-labelling, partial supervision, teacher–student learning, and domain adaptation.',
    outcomes: [
      'Achieved approximately 97.16% mIoU with a patch-shuffle semi-supervised method, compared with 98.13% under full supervision.',
      'Built a multi-round pseudo-labelling workflow for wrist CT, producing more than 5,000 annotated slices while reducing estimated annotation effort from approximately 336 hours to 10 hours.',
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
      'Investigated one-stage and two-stage rib-segmentation pipelines, narrowing much of the reported performance gap through architecture and training optimisation.',
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
    title: 'LLM / RAG Application Platform',
    summary:
      'A modular LLM and RAG system for scientific literature retrieval, paper summarisation, and corpus-grounded question answering.',
    outcomes: [
      'Built a retrieval pipeline using Sentence Transformers, document chunking, ChromaDB vector search, and source-grounded generation across PDF, DOCX, CSV, and Markdown corpora.',
      'Designed interchangeable OpenAI and local-Llama backends, with persistent literature caching and exploration of Neo4j-based graph-enhanced retrieval.',
    ],
    technologies: ['RAG', 'Llama', 'Sentence Transformers', 'ChromaDB'],
  }),
  selectWork(requireResearch('dinov3-and-sam-large-scale-segmentation'), {
    title: 'DINOv3 & SAM',
    summary:
      'A data-centric segmentation workflow combining foundation-model representations, similarity-based sample discovery, assisted annotation, and iterative training.',
    outcomes: [
      'Used DINOv3 feature similarity to identify dissimilar and under-represented imagery for targeted dataset expansion, with SAM-assisted annotation for newly selected samples.',
      'Repeated training and validation as the dataset expanded, followed by large-scale inference on high-resolution aerial imagery.',
    ],
    technologies: ['DINOv3', 'SAM', 'Active Data Selection', 'Semantic Segmentation'],
  }),
];

export const homepageExperience = {
  organization: 'CurveBeam AI (formerly Straxcorp)',
  highlights: [
    'Lead research and development of deep-learning and AI systems, spanning 3D CT/CBCT segmentation, YOLO/DETR-based anatomical detection, landmark localisation, diffusion-based reconstruction, quantitative imaging, and LLM/RAG applications.',
    'Drive end-to-end research-to-production development, from data curation, model design and experimentation through clinical validation, automated ML workflows, cloud deployment, production inference, and iterative model improvement.',
    'Lead collaborative R&D with engineers, clinicians, and university researchers, while supervising and mentoring 3 research engineers and 2 Ph.D. researchers.',
  ],
} as const;
