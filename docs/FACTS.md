# Xiaoxu Li

Melbourne, Australia

Email: [xiaoxu.xli@gmail.com](mailto:xiaoxu.xli@gmail.com) | Google Scholar: [scholar.google.com/xiaoxu.li](https://scholar.google.com/citations?user=vzGWmWQAAAAJ&hl=en)

Senior Research Engineer | Machine Learning | Medical Imaging | 3D Computer Vision

# Professional Summary

Senior Research Engineer with approximately **seven years of industry R&D
experience** building machine-learning systems across **medical imaging,
3D computer vision, and production AI**. Experienced across the full ML lifecycle,
from data curation, annotation, preprocessing, and model development through
evaluation, automated testing, CI/CD, cloud deployment, and production inference.

Core technical work spans **3D CT/CBCT segmentation, nnU-Net,
semi-supervised learning, domain adaptation, point-cloud learning, diffusion-based
reconstruction, landmark detection, and quantitative medical image analysis**.
Developed production AWS-based CT pipelines that reduced end-to-end processing
time from approximately **2 hours to 15 minutes**, and recently built
automated nnU-Net training, testing, deployment, and AWS validation workflows.

Increasingly working on broader AI systems, including
**foundation-model-assisted computer vision, retrieval-augmented generation
(RAG), local and hosted LLM systems, knowledge graphs, and graph-enhanced
retrieval**. Published more than 10 peer-reviewed papers across MICCAI, ICASSP,
ICONIP, Scientific Reports, Expert Systems With Applications, Biomedical Signal
Processing and Control, and eLife, while leading industry--university research
collaborations and mentoring research engineers and Ph.D. students.

# Technical Skills

**Programming & ML Frameworks**

Python,
PyTorch,
nnU-Net,
NumPy,
Pandas,
scikit-learn,
Hugging Face Transformers,
Sentence Transformers,
CUDA,
Jupyter,
Bash/Shell,
Git,
Linux.

**Computer Vision & Medical Imaging**

3D Medical Image Segmentation,
Instance Segmentation,
Object Detection,
Landmark Detection,
Semi-Supervised Learning,
Self-Supervised Learning,
Domain Adaptation,
Pseudo-Labelling,
Partial Supervision,
Teacher--Student Learning,
Point-Cloud Learning,
Diffusion Models,
Image Reconstruction,
U-Net,
3D U-Net,
SwinUNETR,
Attention U-Net,
DenseNet,
YOLO,
DETR,
DINOv3,
Segment Anything Model (SAM),
MITK,
CT,
CBCT,
WBCT,
DICOM,
NIfTI,
NRRD,
Sinogram Data.

**Cloud, MLOps & DevOps**

AWS,
Kubernetes (EKS),
Docker,
ECR,
Lambda,
S3,
SQS,
API Gateway,
CodeBuild,
CodePipeline,
CloudFormation,
IAM,
CloudWatch,
SageMaker,
CI/CD,
DVC,
pytest,
Automated Testing,
Model Versioning,
Dataset Versioning.

**LLM & AI Systems**

Retrieval-Augmented Generation (RAG),
OpenAI API,
Local LLM Inference,
Llama,
Hugging Face Transformers,
Ollama,
FastAPI,
Pydantic,
REST APIs,
ChromaDB,
Vector Search,
Embeddings,
Neo4j,
Knowledge Graphs,
Graph RAG.

# Professional Experience

**Straxcorp / CurveBeam AI, Melbourne, Australia**
 —  **Aug. 2019 -- Present**

**Senior Research Engineer**
 —  Nov. 2022 -- Present

**Research Engineer**
 —  Mar. 2022 -- Nov. 2022

**Software Engineer -- Image Analysis**
 —  Aug. 2019 -- Mar. 2022
- Lead research and engineering of machine-learning systems for
    **musculoskeletal CT and CBCT**, covering anatomical segmentation,
    landmark detection, image reconstruction, artifact reduction, quantitative
    bone analysis, and clinical image validation.
- Developed end-to-end **3D medical image analysis pipelines**
    spanning clinical data acquisition, annotation, preprocessing, model
    training, evaluation, post-processing, cloud deployment, and inference.
- Built segmentation systems for foot, knee, hip, spine, ribs, and
    lower-limb CT, including a unified framework capable of segmenting up to
    **34 anatomical bone structures**.
- Improved model generalisation across CT and CBCT systems by addressing
    **voxel spacing, image calibration, field-of-view variation,
    resolution changes, metal artifacts, deformity, motion blur, and abnormal
    anatomy**.
- Developed data-efficient ML methods using
    **semi-supervised learning, pseudo-labelling, partial supervision,
    teacher--student learning, few-shot learning, and domain adaptation**.
- Built production medical-imaging workflows on AWS using
    **Docker, EKS, Lambda, SQS, S3, API Gateway, and CloudFormation**,
    reducing end-to-end CT processing time from approximately
    **2 hours to 15 minutes**.
- Designed and implemented an **nnU-Net-based ML development
    flywheel** covering data preprocessing, training, testing, deployment, and
    iterative model improvement.
- Integrated **AWS-based end-to-end model validation into CI/CD**,
    automating tests across preprocessing, inference, output generation, and
    deployment updates.
- Developed reusable research and data infrastructure supporting
    medical-image preprocessing, model development, experiment tracking,
    large-scale evaluation, and dataset versioning.
- Lead collaborative R&D projects with clinicians, universities, and
    external research groups, translating research prototypes into applied
    medical-AI systems.
- Supervise and mentor **3 research engineers and 2 Ph.D.
    researchers**, with collaborative outcomes published at MICCAI, ICASSP,
    ICONIP, and peer-reviewed journals.

# Core Machine Learning & Medical AI Projects

**1. Production 3D Bone CT Segmentation**
- Developed successive generations of segmentation systems for
    foot, knee, hip, spine, ribs, and lower-limb CT/CBCT.
- Built complete pipelines spanning annotation, preprocessing,
    training, validation, post-processing, cloud inference, and production
    deployment.
- Developed a unified lower-limb segmentation framework covering
    hip, knee, and foot anatomy and segmenting all
    **34 lower-limb bones**.
- Adapted models across multiple scanners and imaging protocols by
    handling voxel-spacing variation, calibration differences,
    high-resolution scans, field-of-view changes, and CT/CBCT domain shift.
- Improved robustness on difficult clinical cases including
    **metal implants, deformities, motion artifacts, abnormal anatomy,
    and variable field of view**.

**2. nnU-Net Data Flywheel & Automated ML Lifecycle**
- Designed and implemented an **nnU-Net-based model development
    workflow** covering data preprocessing, dataset preparation, model training,
    evaluation, testing, and deployment.
- Structured the workflow as a **data flywheel** to support
    repeated model improvement as new annotations, difficult cases, and model
    outputs become available.
- Automated cloud-based model testing on AWS to validate model and
    pipeline changes against the deployed inference environment.
- Integrated AWS testing into **CI/CD**, enabling repeatable
    end-to-end validation across preprocessing, inference, post-processing,
    and deployment stages.
- Reduced manual operational overhead and improved reproducibility
    across model versions, datasets, and deployment environments.

**3. Data-Efficient Medical Image Segmentation**
- Proposed a patch-shuffle and feature-consistency-based
    semi-supervised segmentation method, achieving approximately
    **97.16% mIoU** compared with **98.13%** under full
    supervision.
- Built a multi-round pseudo-labelling workflow for wrist CT,
    constructing a database of more than **5,000 annotated slices** and
    reducing estimated annotation effort from approximately
    **336 hours to 10 hours**.
- Developed a teacher--student framework for partial-label spine CT
    segmentation and domain adaptation to hip CT.
- Developed few-shot foot CT segmentation from extremely limited
    labelled scans using patch-based learning and extensive augmentation.
- Applied SAM-based interactive segmentation with point and box
    prompting to accelerate medical-image annotation.

**4. Point-Cloud-Based Rib Segmentation**
- Investigated sparse **point-cloud processing** as an alternative
    to dense voxel-based CT segmentation for rib anatomy.
- Closed much of the previously reported performance gap between
    **one-stage and two-stage point-cloud segmentation pipelines**
    through systematic architecture and training optimisation.
- Identified important design factors including
    intensity augmentation, field-of-view variation, graph size,
    sampling density, and model capacity.
- Analysed residual failure modes and efficiency--accuracy trade-offs
    for extending point-cloud segmentation to broader clinical applications.
- Research accepted at **ICONIP 2026**.

**5. 3D Clinical and Low-Dose CBCT Reconstruction**
- Developed a **conditional diffusion framework for 3D CBCT
    reconstruction** across clinical-dose and low-dose imaging conditions.
- Investigated end-to-end reconstruction of volumetric CBCT data
    rather than simplified 2D reconstruction settings.
- Integrated the **SpeeD acceleration strategy** to improve the
    efficiency of diffusion-based reconstruction.
- Achieved state-of-the-art reconstruction performance on the study
    test set across evaluated clinical and low-dose settings.
- Research accepted at **ICONIP 2026**.

**6. CT Metal Artifact Reduction**
- Developed a **dual-domain conditional diffusion model**
    for CT metal artifact reduction.
- Combined information from image and projection domains to improve
    artifact suppression while preserving anatomical structures.
- Evaluated image quality and robustness for downstream clinical
    image-analysis tasks.
- Research published at **MICCAI 2024**.

**7. Anatomical Region & Landmark Detection**
- Developed YOLO- and DETR-based ROI detection for anatomical
    localisation of foot, hip, and knee regions.
- Developed a coarse-to-fine end-to-end landmark detection pipeline
    based on **3D SwinUNETR**.
- Integrated anatomical localisation with downstream segmentation and
    quantitative-analysis workflows.

**8. Quantitative Bone CT Analysis**
- Developed a DenseNet-based wrist CT model for predicting
    **5-year fragility fracture risk**, outperforming conventional
    clinical indicators including BMD T-score and FRAX in the study cohort.
- Developed automated foot bone-angle measurement using PCA,
    anatomical-axis estimation, bounding boxes, and geometric analysis.
- Achieved near-perfect agreement
    (R^2 ≈ 1.0 for evaluated measurements)
    with manual reference measurements.
- Developed a quantitative framework for assessing equivalence between
    CBCT and MDCT using rigid registration and surface-distance analysis.

# LLM & AI Systems Projects

**9. WBCT LLM / RAG Application Platform**
- Architected and rebuilt a legacy WBCT research RAG prototype into a
    modular, testable **FastAPI-based LLM application platform**.
- Designed a reusable **LLMClient abstraction** with interchangeable
    OpenAI and local-Llama backends, replacing duplicated model-specific
    implementations.
- Built three integrated application workflows:
- clinical measurement interpretation with literature retrieval;
- batch scientific-paper summarisation;
- corpus-grounded RAG question answering with source references.
- Implemented document ingestion and retrieval for PDF, DOCX, CSV, and
    Markdown sources using **ChromaDB, sentence-transformer embeddings,
    custom loaders, and text chunking**.
- Built persistent paper-summary caching shared across application
    workflows, preventing redundant LLM processing of previously summarised
    literature.
- Used **Pydantic** schemas and field aliases to normalise
    inconsistent legacy clinical input formats.
- Replaced hard-coded API keys, paths, and server settings with
    environment-driven configuration using **pydantic-settings** and
    `.env`, allowing the same application codebase to move between Mac
    development and Linux/GPU environments.
- Designed dependency isolation and lazy loading so OpenAI-only
    deployments do not require the PyTorch/Transformers local-inference stack.
- Built **17 automated tests** covering schema compatibility,
    LLM backend selection, batch-generation behaviour, cache reuse,
    service logic, and FastAPI endpoints.
- Performed API and application smoke testing using a real uvicorn
    service and prepared the application architecture for deployment with
    local Llama models on GPU infrastructure.

**10. Knowledge Graph & Graph-Enhanced RAG**
- Built a **Neo4j-based knowledge graph** representing
    relationships between anatomical structures, imaging findings,
    pathologies, and medical knowledge.
- Integrated structured knowledge with retrieval-based AI workflows.
- Explored hybrid retrieval combining vector similarity and
    graph-based relational retrieval to improve contextual relevance and
    explainability.

# Additional Computer Vision & Engineering Projects

**11. Cross-Domain Remote Sensing Segmentation**
- Built an end-to-end semantic-segmentation pipeline using
    large-scale VICMAP aerial imagery.
- Applied **DINOv3 self-supervised features and clustering** to
    identify representative samples from large unlabeled datasets.
- Used **SAM-assisted annotation** followed by expert refinement
    to accelerate high-quality label generation.
- Trained and compared U-Net and DINOv3-based segmentation models.
- Performed large-scale inference on high-resolution aerial imagery.

**12. Research Codebase & Medical Imaging Data Infrastructure**
- Built reusable preprocessing and post-processing utilities for
    DICOM, NIfTI, NRRD, TIF, and sinogram data.
- Developed reusable model implementations, visualisation tools,
    evaluation methods, and experiment utilities for segmentation,
    classification, reconstruction, and clinical image analysis.
- Consolidated internal foot, knee, hip, wrist, and related annotation
    datasets into reusable research infrastructure.
- Integrated multiple public CT datasets to support model development,
    benchmarking, and domain adaptation experiments.

**13. AWS Full-Stack Demonstration System**
- Developed and deployed a full-stack conference web application on
    AWS with isolated development and production environments.
- Integrated CI/CD for automated build and deployment.
- Demonstrated end-to-end software delivery across frontend, backend,
    cloud infrastructure, and deployment environments.

# Research Leadership & Supervision
- Supervise and mentor **3 research engineers** working across
    medical imaging, machine learning, and applied AI projects.
- Co-supervise **2 Ph.D. research projects** with
    Monash University and the University of Technology Sydney.
- Lead collaborative research in CT reconstruction, diffusion models,
    data-efficient segmentation, domain adaptation, and point-cloud-based
    medical image analysis.
- Translate collaborative research outputs into peer-reviewed
    publications, technical prototypes, and applied industry systems.

# Publications

- Tianyou Liang, **Xiaoxu Li**, Yu Peng, Min Xu,
**``An Empirical Study of End-to-End Pointcloud-based Rib Segmentation Model,''**
*33rd International Conference on Neural Information Processing
(ICONIP 2026)*, **accepted**, 2026.

- Ruochong Shen, **Xiaoxu Li**, Jia Rong, Zongyuan Ge,
Chao Sui, Yu Peng, Qiuhong Ke,
**``Conditional Diffusion with SpeeD for 3D Clinical and Low-dose CBCT Reconstruction,''**
*33rd International Conference on Neural Information Processing
(ICONIP 2026)*, **accepted**, 2026.

- Tianyou Liang, **Xiaoxu Li**, Yu Peng, Min Xu,
**``Probing, Priors, and Teaching: A Framework to Segment Any Bone with Partial Supervision,''**
*Expert Systems With Applications*,
2026.

- Sudheer C. Reddy, Khue Tran, **Xiaoxu Li**, Qiuhong Ke, Cunjian Chen,
**``Three-Dimensional Distance and Coverage Mapping of the First Ray in Hallux Valgus,''**
*Foot & Ankle Specialist*,
2026.

- **Xiaoxu Li**, Conrad Ivie, Philippe Van Overschelde,
Sultana Monira Hussain, Khue Tran, Stuti Singh, Yu Peng,
**``Equivalence Assessment of Weight Bearing Cone Beam CT and Multidetector CT through 3D Knee Bone Modelling,''**
*Scientific Reports*,
vol. 15, 2025.

- Tianyou Liang, **Xiaoxu Li**, Yu Peng, Min Xu,
**``Segment Any Bone in CT with Partial Supervision,''**
*IEEE International Conference on Acoustics, Speech and Signal Processing
(ICASSP)*,
2025.

- Ruochong Shen, **Xiaoxu Li**, Yuanchao Li, Chao Sui,
Yu Peng, Qiuhong Ke,
**``DCDiff: Dual-Domain Conditional Diffusion for CT Metal Artifact Reduction,''**
*Medical Image Computing and Computer-Assisted Intervention (MICCAI)*,
2024.

- **Xiaoxu Li**, Yu Peng, Min Xu,
**``Patch-Shuffle-Based Semi-Supervised Segmentation of Bone Computed Tomography via Consistent Learning,''**
*Biomedical Signal Processing and Control*,
vol. 80, 2023.

- Roland Chapurlat, Serge Ferrari, **Xiaoxu Li**, Yu Peng, Min Xu,
Min Bui, Elisabeth Sornay-Rendu, Eric Lespessailles, Emmanuel Biver,
Ego Seeman,
**``Deep Learning Using High-Resolution Images of Forearm Predicts Fracture,''**
*eLife*,
2023.

- **Xiaoxu Li**, Yu Peng, Min Xu,
**``FootSeg: Automatic Anatomical Segmentation of Foot Bones from Weight-Bearing Cone Beam CT Scans,''**
*Digital Image Computing: Techniques and Applications (DICTA)*,
2022.

- **Xiaoxu Li**, Yu Peng, Min Xu,
**``Edge-Enhanced Instance Segmentation of Wrist CT via a Semi-Automatic Annotation Database Construction Method,''**
*Digital Image Computing: Techniques and Applications (DICTA)*,
2021.

- Tianrong Rao, **Xiaoxu Li**, Min Xu,
**``Learning Multi-Level Deep Representations for Image Emotion Classification,''**
*Neural Processing Letters*,
vol. 51, 2020.

- Tianrong Rao, **Xiaoxu Li**, Haimin Zhang, Min Xu,
**``Multi-Level Region-Based Convolutional Neural Network for Image Emotion Classification,''**
*Neurocomputing*,
vol. 333, 2019.

- Jiaxu Chen, Long Zhang, **Xiaoxu Li**, Zhongfu Ye,
**``Locally Controlled As-Rigid-As-Possible Deformation for 2D Characters,''**
*Computer Animation and Virtual Worlds*,
vol. 28, 2017.

- **Xiaoxu Li**, Chensi Mao, Shiliang Huang, Zhongfu Ye,
**``Chinese Sign Language Recognition Based on SHS Descriptor and Encoder-Decoder LSTM Model,''**
*Chinese Conference on Biometric Recognition*,
2017.

- Chensi Mao, Shiliang Huang, **Xiaoxu Li**, Zhongfu Ye,
**``Chinese Sign Language Recognition with Sequence to Sequence Learning,''**
*Chinese Conference on Computer Vision*,
2017.

# Education

**Ph.D. in Information Technology**
 —  **2018 -- 2022**

University of Technology Sydney, Sydney, Australia

*Thesis: Advanced Approaches for Bone CT Analysis Based on Deep Learning*

**Master of Electronic Engineering & Information Science**
 —  **2014 -- 2017**

University of Science and Technology of China, Hefei, China

**Bachelor of Electronic Engineering & Information Science**
 —  **2010 -- 2014**

University of Science and Technology of China, Hefei, China
