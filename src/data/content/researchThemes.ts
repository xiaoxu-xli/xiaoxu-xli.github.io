import type { ResearchTheme } from '../../types/content';
import { factsSource } from './source';

export const researchThemes: readonly ResearchTheme[] = [
  {
    slug: 'data-efficient-medical-imaging',
    order: 1,
    title: 'Data-Efficient Medical Imaging',
    shortSummary:
      'Data-efficient CT segmentation using semi-supervised learning, pseudo-labelling, partial supervision, teacher–student learning, few-shot learning, domain adaptation, and SAM-assisted annotation.',
    problem:
      'Reducing expert annotation requirements and working with partially labelled and cross-domain CT data.',
    methods: [
      'Patch-shuffle and feature-consistency-based semi-supervised segmentation',
      'Multi-round pseudo-labelling for wrist CT',
      'Teacher–student learning for partial-label spine CT segmentation and hip CT domain adaptation',
      'Patch-based few-shot foot CT segmentation with extensive augmentation',
      'SAM-assisted interactive segmentation using point and box prompts',
    ],
    outcomes: [
      'Approximately 97.16% mIoU compared with 98.13% under full supervision for the patch-shuffle semi-supervised method.',
      'A wrist CT database of more than 5,000 annotated slices, with estimated annotation effort reduced from approximately 336 hours to 10 hours.',
    ],
    technologies: [
      'CT',
      'Semi-Supervised Learning',
      'Pseudo-Labelling',
      'Partial Supervision',
      'Teacher–Student Learning',
      'Few-Shot Learning',
      'Domain Adaptation',
      'Segment Anything Model (SAM)',
    ],
    relatedPublications: [
      'eswa-2026-partial-supervision',
      'icassp-2025-partial-supervision',
      'bspc-2023-patch-shuffle',
      'dicta-2021-wrist-instance-segmentation',
    ],
    featured: true,
    source: factsSource('Core Machine Learning & Medical AI Projects — 3. Data-Efficient Medical Image Segmentation'),
  },
  {
    slug: '3d-reconstruction-and-diffusion',
    order: 2,
    title: '3D Reconstruction & Diffusion',
    shortSummary:
      'Conditional diffusion for volumetric CBCT reconstruction across clinical-dose and low-dose conditions, and dual-domain conditional diffusion for CT metal artifact reduction.',
    problem:
      '3D CBCT reconstruction across clinical-dose and low-dose conditions, and CT metal artifact reduction.',
    methods: [
      'Conditional diffusion for end-to-end volumetric CBCT reconstruction',
      'SpeeD acceleration for diffusion-based reconstruction',
      'Dual-domain conditional diffusion using image and projection domains for metal artifact reduction',
    ],
    outcomes: [
      'State-of-the-art reconstruction performance on the study test set across the evaluated clinical-dose and low-dose settings.',
      'The 3D CBCT reconstruction research was accepted at ICONIP 2026.',
      'The CT metal artifact reduction research was published at MICCAI 2024.',
    ],
    technologies: ['CBCT', 'CT', 'Diffusion Models', 'Image Reconstruction', 'Sinogram Data'],
    relatedPublications: ['iconip-2026-cbct-reconstruction', 'miccai-2024-dcdiff'],
    featured: true,
    source: factsSource(
      'Core Machine Learning & Medical AI Projects — 5. 3D Clinical and Low-Dose CBCT Reconstruction',
      'Core Machine Learning & Medical AI Projects — 6. CT Metal Artifact Reduction',
    ),
  },
  {
    slug: 'point-cloud-medical-image-analysis',
    order: 3,
    title: 'Point-Cloud Medical Image Analysis',
    shortSummary:
      'Sparse point-cloud processing as an alternative to dense voxel-based CT segmentation for rib anatomy.',
    problem:
      'Evaluating one-stage and two-stage point-cloud segmentation pipelines for rib anatomy and their efficiency–accuracy trade-offs.',
    methods: [
      'Systematic architecture and training optimisation',
      'Evaluation of intensity augmentation and field-of-view variation',
      'Analysis of graph size, sampling density, and model capacity',
      'Residual failure-mode analysis',
    ],
    outcomes: [
      'Closed much of the previously reported performance gap between one-stage and two-stage point-cloud segmentation pipelines.',
      'Research accepted at ICONIP 2026.',
    ],
    technologies: ['CT', 'Point-Cloud Learning'],
    relatedPublications: ['iconip-2026-rib-segmentation'],
    featured: true,
    source: factsSource('Core Machine Learning & Medical AI Projects — 4. Point-Cloud-Based Rib Segmentation'),
  },
  {
    slug: 'dinov3-and-sam-large-scale-segmentation',
    order: 4,
    title: 'DINOv3 & SAM for Large-Scale Image Segmentation',
    shortSummary:
      'A remote-sensing semantic-segmentation workflow using large-scale VICMAP aerial imagery, DINOv3 features and clustering, and SAM-assisted annotation with expert refinement.',
    problem:
      'Representative-sample selection and annotation for semantic segmentation of large-scale aerial imagery.',
    methods: [
      'DINOv3 self-supervised features and clustering to identify representative samples',
      'SAM-assisted annotation followed by expert refinement',
      'Training and comparison of U-Net and DINOv3-based segmentation models',
    ],
    outcomes: ['Performed large-scale inference on high-resolution aerial imagery.'],
    technologies: ['DINOv3', 'Segment Anything Model (SAM)', 'U-Net', 'Remote Sensing'],
    featured: true,
    source: factsSource('Additional Computer Vision & Engineering Projects — 11. Cross-Domain Remote Sensing Segmentation'),
  },
];
