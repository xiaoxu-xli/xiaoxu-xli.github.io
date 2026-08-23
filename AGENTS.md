# AGENTS.md

## Project

This repository contains the personal research and engineering portfolio
website for Xiaoxu Li.

The target audience is recruiters, hiring managers, research scientists,
applied scientists, and technical leaders hiring for:

- Senior Applied Scientist
- Research Scientist
- Medical AI
- Computer Vision
- Applied Machine Learning
- Multimodal / LLM systems

## Primary objective

Build a professional, technically credible, fast static portfolio site.

The site should communicate this career narrative:

Medical Imaging
→ 3D Computer Vision
→ Data-Efficient Machine Learning
→ Diffusion / Point Clouds / Foundation Models
→ Production ML
→ LLM / RAG Systems

## Source of truth

Never invent research claims, metrics, publications, employment history,
technical achievements, model performance, or deployment scale.

Before writing factual content, read:

- docs/FACTS.md
- docs/CONTENT.md

If a fact is not supported there, either omit it or mark it for human review.

## Technical stack

Use:

- Astro
- TypeScript
- static site generation
- plain CSS or minimal component styling
- GitHub Pages
- GitHub Actions

Avoid unnecessary backend services.

Do not introduce React unless there is a concrete need.

## Engineering standards

Before completing a coding task:

1. Run the relevant formatter/linter if configured.
2. Run `npm run build`.
3. Fix build failures.
4. Check responsive layout where practical.
5. Report what changed and what was validated.

## Design principles

The visual style should be:

- minimal
- research-oriented
- modern
- restrained
- typography-first
- high information density
- professional rather than startup-marketing-heavy

Avoid:

- excessive gradients
- glassmorphism
- large animated hero sections
- generic AI-generated copy
- excessive icon usage
- unnecessary motion

## Content priorities

Homepage priorities:

1. Identity and research direction
2. Selected research
3. Selected engineering projects
4. Publications
5. Links to GitHub, Google Scholar, and CV

## Git

Prefer small, logically scoped commits.

Do not commit:

- API keys
- private company data
- patient data
- unpublished confidential research material
