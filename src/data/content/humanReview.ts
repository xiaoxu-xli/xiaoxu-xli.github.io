import type { HumanReviewItem } from '../../types/content';
import { factsSource } from './source';

export const humanReviewItems: readonly HumanReviewItem[] = [
  {
    id: 'publication-statuses',
    subject: 'Publication status metadata',
    note: 'Only the two ICONIP 2026 papers are explicitly marked accepted. DCDiff is explicitly described as published in its project record. Status is omitted for the remaining individual publications rather than inferred.',
    affectedRecords: ['publications'],
    source: factsSource('Publications', 'Core Machine Learning & Medical AI Projects — 6. CT Metal Artifact Reduction'),
  },
  {
    id: 'bone-count-terminology',
    subject: '34-bone terminology',
    note: 'The professional-experience section says up to 34 anatomical bone structures, while the project section says all 34 lower-limb bones. The structured project uses the more specific project wording without reconciling the two descriptions.',
    affectedRecords: ['production-3d-medical-ai-nnunet-lifecycle'],
    source: factsSource('Professional Experience', 'Core Machine Learning & Medical AI Projects — 1. Production 3D Bone CT Segmentation'),
  },
  {
    id: 'quantitative-evaluation-context',
    subject: 'Quantitative bone-analysis evaluation context',
    note: 'FACTS.md gives a 5-year prediction target and approximate R², but not the complete evaluation protocol or metric definitions. Those performance details are omitted from the compact project summary.',
    affectedRecords: ['quantitative-bone-ct-analysis'],
    source: factsSource('Core Machine Learning & Medical AI Projects — 8. Quantitative Bone CT Analysis'),
  },
  {
    id: 'rag-deployment-state',
    subject: 'LLM platform deployment state',
    note: 'FACTS.md says the platform was prepared for deployment with local Llama models on GPU infrastructure. The record does not claim that this deployment was completed.',
    affectedRecords: ['llm-rag-application-platform'],
    source: factsSource('LLM & AI Systems Projects — 9. WBCT LLM / RAG Application Platform'),
  },
  {
    id: 'graph-retrieval-evaluation',
    subject: 'Graph-enhanced retrieval outcomes',
    note: 'Hybrid vector and graph retrieval is described as explored. No measured improvement is recorded because FACTS.md provides no evaluation result.',
    affectedRecords: ['knowledge-graph-graph-enhanced-retrieval'],
    source: factsSource('LLM & AI Systems Projects — 10. Knowledge Graph & Graph-Enhanced RAG'),
  },
  {
    id: 'foundation-model-ml-lifecycle-linkage',
    subject: 'Foundation-model and MLOps lifecycle linkage',
    note: 'The homepage copy links DINOv3 sample selection and SAM-assisted annotation with iterative nnU-Net updates in a broader MLOps lifecycle. FACTS.md documents those capabilities separately but does not explicitly describe them as one integrated workflow.',
    affectedRecords: ['dinov3-and-sam-large-scale-segmentation'],
    source: factsSource(
      'Additional Computer Vision & Engineering Projects — 11. Cross-Domain Remote Sensing Segmentation',
      'Core Machine Learning & Medical AI Projects — 2. nnU-Net Data Flywheel & Automated ML Lifecycle',
    ),
  },
  {
    id: 'missing-public-links',
    subject: 'Publication and project URLs',
    note: 'No DOI, PDF, code, or project URLs are supplied in FACTS.md. Optional link fields remain unset.',
    affectedRecords: ['publications', 'researchThemes', 'projects'],
    source: factsSource('Publications'),
  },
  {
    id: 'featured-publication-selection',
    subject: 'Featured-publication selection',
    note: 'Eight publications are marked selected based on relevance to the requested Applied Scientist and Research Scientist positioning. This is an editorial proposal rather than a factual claim and requires human approval.',
    affectedRecords: ['publications'],
    source: factsSource('Publications'),
  },
];
