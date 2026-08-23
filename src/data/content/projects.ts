import type { AppliedProject } from '../../types/content';
import { factsSource } from './source';

export const projects: readonly AppliedProject[] = [
  {
    slug: 'production-3d-medical-ai-nnunet-lifecycle',
    title: 'Production 3D Medical AI / nnU-Net Lifecycle',
    shortSummary:
      'Production 3D CT/CBCT segmentation and an nnU-Net development lifecycle spanning annotation, preprocessing, training, evaluation, testing, cloud deployment, inference, and iterative improvement.',
    problem:
      'Segmentation across anatomical regions, scanners, imaging protocols, and difficult clinical cases, together with repeatable validation of model and deployment changes.',
    methods: [
      'Segmentation systems for foot, knee, hip, spine, ribs, and lower-limb CT/CBCT',
      'Adaptation across voxel spacing, calibration, resolution, field of view, and CT/CBCT domain shift',
      'An nnU-Net data flywheel for preprocessing, dataset preparation, training, evaluation, testing, and deployment',
      'AWS-based end-to-end model validation integrated into CI/CD',
    ],
    outcomes: [
      'A unified lower-limb segmentation framework covering hip, knee, and foot anatomy and segmenting all 34 lower-limb bones.',
      'Production AWS-based CT pipelines reduced end-to-end processing time from approximately 2 hours to 15 minutes.',
      'Reduced manual operational overhead and improved reproducibility across model versions, datasets, and deployment environments.',
    ],
    technologies: [
      'nnU-Net',
      'CT',
      'CBCT',
      'AWS',
      'Docker',
      'EKS',
      'Lambda',
      'SQS',
      'S3',
      'API Gateway',
      'CloudFormation',
      'CI/CD',
    ],
    featured: true,
    detailLevel: 'primary',
    source: factsSource(
      'Professional Experience',
      'Core Machine Learning & Medical AI Projects — 1. Production 3D Bone CT Segmentation',
      'Core Machine Learning & Medical AI Projects — 2. nnU-Net Data Flywheel & Automated ML Lifecycle',
    ),
  },
  {
    slug: 'llm-rag-application-platform',
    title: 'LLM / RAG Application Platform',
    shortSummary:
      'A modular, testable FastAPI-based platform rebuilt from a legacy WBCT research RAG prototype, with interchangeable OpenAI and local-Llama backends.',
    problem:
      'Duplicated model-specific implementations, inconsistent legacy clinical inputs, and hard-coded API keys, paths, and server settings in a research prototype.',
    methods: [
      'A reusable LLMClient abstraction with OpenAI and local-Llama backends',
      'Literature retrieval, paper summarisation, and corpus-grounded RAG workflows',
      'PDF, DOCX, CSV, and Markdown ingestion using ChromaDB, sentence-transformer embeddings, custom loaders, and text chunking',
      'Pydantic schema normalisation and environment-driven configuration',
      'Dependency isolation and lazy loading for OpenAI-only and local-inference deployments',
    ],
    outcomes: [
      'Built 17 automated tests covering schema compatibility, backend selection, batch generation, cache reuse, service logic, and FastAPI endpoints.',
      'Performed API and application smoke testing using a real uvicorn service.',
      'Prepared the application architecture for deployment with local Llama models on GPU infrastructure.',
    ],
    technologies: [
      'FastAPI',
      'Pydantic',
      'OpenAI API',
      'Llama',
      'Hugging Face Transformers',
      'ChromaDB',
      'Sentence Transformers',
      'Vector Search',
      'pytest',
    ],
    featured: true,
    detailLevel: 'primary',
    source: factsSource('LLM & AI Systems Projects — 9. WBCT LLM / RAG Application Platform'),
  },
  {
    slug: 'knowledge-graph-graph-enhanced-retrieval',
    title: 'Knowledge Graph & Graph-Enhanced Retrieval',
    shortSummary:
      'A Neo4j-based knowledge graph for relationships between anatomical structures, imaging findings, pathologies, and medical knowledge, integrated with retrieval-based AI workflows.',
    methods: [
      'Neo4j knowledge-graph construction',
      'Integration of structured knowledge with retrieval-based AI workflows',
      'Exploration of hybrid retrieval combining vector similarity and graph-based relational retrieval',
    ],
    technologies: ['Neo4j', 'Knowledge Graphs', 'Vector Search', 'Graph RAG'],
    featured: true,
    detailLevel: 'primary',
    source: factsSource('LLM & AI Systems Projects — 10. Knowledge Graph & Graph-Enhanced RAG'),
  },
  {
    slug: 'anatomical-region-landmark-detection',
    title: 'Anatomical Region & Landmark Detection',
    shortSummary:
      'YOLO- and DETR-based anatomical localisation and a coarse-to-fine landmark-detection pipeline based on 3D SwinUNETR.',
    methods: [
      'ROI detection for foot, hip, and knee regions',
      'Coarse-to-fine 3D landmark detection',
      'Integration with segmentation and quantitative-analysis workflows',
    ],
    technologies: ['YOLO', 'DETR', '3D SwinUNETR', 'CT'],
    featured: false,
    detailLevel: 'compact',
    source: factsSource('Core Machine Learning & Medical AI Projects — 7. Anatomical Region & Landmark Detection'),
  },
  {
    slug: 'quantitative-bone-ct-analysis',
    title: 'Quantitative Bone CT Analysis',
    shortSummary:
      'Models and geometric methods for 5-year fragility-fracture risk, automated foot bone-angle measurement, and CBCT/MDCT equivalence assessment.',
    methods: [
      'DenseNet-based wrist CT risk prediction',
      'PCA, anatomical-axis estimation, bounding boxes, and geometric analysis',
      'Rigid registration and surface-distance analysis',
    ],
    technologies: ['DenseNet', 'PCA', 'Rigid Registration', 'CT', 'CBCT', 'MDCT'],
    featured: false,
    detailLevel: 'compact',
    source: factsSource('Core Machine Learning & Medical AI Projects — 8. Quantitative Bone CT Analysis'),
  },
  {
    slug: 'medical-imaging-data-infrastructure',
    title: 'Research Codebase & Medical Imaging Data Infrastructure',
    shortSummary:
      'Reusable medical-image preprocessing, post-processing, model, visualisation, evaluation, and experiment infrastructure.',
    methods: [
      'Utilities for DICOM, NIfTI, NRRD, TIF, and sinogram data',
      'Reusable implementations for segmentation, classification, reconstruction, and clinical image analysis',
      'Integration of multiple public CT datasets for development, benchmarking, and domain adaptation',
    ],
    technologies: ['DICOM', 'NIfTI', 'NRRD', 'TIF', 'Sinogram Data'],
    featured: false,
    detailLevel: 'compact',
    source: factsSource('Additional Computer Vision & Engineering Projects — 12. Research Codebase & Medical Imaging Data Infrastructure'),
  },
  {
    slug: 'aws-full-stack-demonstration',
    title: 'AWS Full-Stack Demonstration System',
    shortSummary:
      'A full-stack conference web application deployed on AWS with isolated development and production environments and CI/CD.',
    technologies: ['AWS', 'CI/CD'],
    featured: false,
    detailLevel: 'compact',
    source: factsSource('Additional Computer Vision & Engineering Projects — 13. AWS Full-Stack Demonstration System'),
  },
];

export const primaryProjects = projects.filter((project) => project.detailLevel === 'primary');
export const compactProjects = projects.filter((project) => project.detailLevel === 'compact');
