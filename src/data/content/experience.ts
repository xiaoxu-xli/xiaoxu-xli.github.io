import type { ProfessionalExperience } from '../../types/content';
import { factsSource } from './source';

export const professionalExperience: readonly ProfessionalExperience[] = [
  {
    organization: 'Straxcorp / CurveBeam AI',
    location: 'Melbourne, Australia',
    startDate: '2019-08',
    roles: [
      {
        title: 'Senior Research Engineer',
        startDate: '2022-11',
      },
      {
        title: 'Research Engineer',
        startDate: '2022-03',
        endDate: '2022-11',
      },
      {
        title: 'Software Engineer — Image Analysis',
        startDate: '2019-08',
        endDate: '2022-03',
      },
    ],
    highlights: [
      'Lead research and engineering of machine-learning systems for musculoskeletal CT and CBCT across anatomical segmentation, landmark detection, image reconstruction, artifact reduction, quantitative bone analysis, and clinical image validation.',
      'Developed end-to-end 3D medical image analysis pipelines spanning clinical data acquisition, annotation, preprocessing, model training, evaluation, post-processing, cloud deployment, and inference.',
      'Developed data-efficient methods using semi-supervised learning, pseudo-labelling, partial supervision, teacher–student learning, few-shot learning, and domain adaptation.',
      'Built production medical-imaging workflows on AWS that reduced end-to-end CT processing time from approximately 2 hours to 15 minutes.',
      'Designed and implemented an nnU-Net-based development flywheel covering preprocessing, training, testing, deployment, and iterative model improvement.',
      'Integrated AWS-based end-to-end model validation into CI/CD across preprocessing, inference, output generation, and deployment updates.',
      'Supervise and mentor 3 research engineers and 2 Ph.D. researchers.',
    ],
    technologies: [
      'CT',
      'CBCT',
      'nnU-Net',
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
    source: factsSource('Professional Experience', 'Research Leadership & Supervision'),
  },
];
