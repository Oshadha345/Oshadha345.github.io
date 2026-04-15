// =============================================================================
// RESEARCH PORTFOLIO DATA - Oshadha Samarakoon
// =============================================================================
//
// This file powers the dedicated Research page, home-page news, and research
// summaries throughout the site.
//
// Placeholder templates:
//
// Publication template
// {
//   id: "paper-id",
//   section: "under-review",
//   kind: "Journal Submission",
//   title: "Paper title",
//   authors: ["Author One", "Oshadha Samarakoon", "Author Three"],
//   venue: "Conference / Journal / Workshop",
//   scope: "International Conference",
//   status: "Under review",
//   focus: "One-line research focus.",
//   contribution: "Your contribution summary.",
//   summary: "Optional longer summary for the card.",
//   keywords: ["Keyword 1", "Keyword 2"],
//   links: {
//     arxiv: null,
//     bibtex: null,
//     code: null,
//     project: "/projects/1",
//   },
// }
//
// News template
// {
//   id: "news-id",
//   date: "2026-04-14",
//   category: "Publication",
//   title: "Short headline",
//   description: "One or two sentences of context.",
//   href: "/research",
//   cta: "Read more",
// }
//
// Media template
// {
//   id: "media-id",
//   type: "Certificate",
//   title: "Asset title",
//   image: "/images/research/media/your-image.jpg",
//   caption: "What this certificate or photo represents.",
//   note: "Optional extra note such as venue or date.",
//   href: null,
// }

import { research as researchExperience } from "./profile";
import { projects } from "./projects";

export const researchOverview = {
  title: "Research",
  eyebrow: "Publications, submissions, experiments, and research experience",
  summary:
    "A focused portfolio of research work spanning state-space models, renewable energy forecasting, remote sensing, biomedical imaging, and physics-aware generative modeling.",
  description:
    "My current work applies modern sequence models and vision systems to scientific and engineering problems where accuracy, efficiency, and domain understanding all matter. The portfolio below combines publication records, competition submissions, ongoing studies,self researchs and the institutional research roles that shaped them.",
  expertise: [
    "State Space Models (SSMs)",
    "Mamba architectures",
    "Time-series forecasting",
    "Remote sensing",
    "Medical image segmentation",
    "Physics-aware generative modeling",
  ],
  mathDepth: [
    "O(L) linear-scaling sequence modeling",
    "Selective scan mechanisms",
    "Hybrid CNN-SSM pipelines",
    "Temporal and hierarchical fusion",
  ],
};

export const researchStats = [
  {
    id: "tracks",
    label: "Active Research Tracks",
    value: "5",
    detail: "Publications, submissions, competitions, and benchmarking studies",
  },
  {
    id: "accepted",
    label: "Accepted Proceedings",
    value: "1",
    detail: "Accepted to IEEE IGARSS 2026 proceedings",
  },
  {
    id: "review",
    label: "Under Review",
    value: "1",
    detail: "SolarMamba currently under review for ECCV 2026",
  },
  {
    id: "roles",
    label: "Research Roles",
    value: "2",
    detail: "Volunteer researcher roles at MARC and NIFS",
  },
];

export const researchPublications = [
  {
    id: "solarmamba-eccv-2026",
    section: "under-review",
    kind: "Conference Submission",
    title:
      "SolarMamba: Adaptive Hierarchical Fusion of Vision State-Space Models and Temporal Networks",
    authors: [
      "Dilshara Herath",
      "Oshadha Samarakoon",
      "Dushan Herath",
      "Roshan Godaliyadda",
      "Mervyn Parakrama Bandara Ekanayake",
    ],
    venue: "ECCV 2026",
    scope: "International Conference",
    status: "Under review",
    focus: "Leveraging Mamba architectures for solar energy forecasting.",
    contribution:
      'Designed the SolarMamba architecture from scratch using MambaVision encoders, pyramid TCN blocks, and hierarchical fusion to model cloud dynamics efficiently.',
    summary:
      "The system targets solar irradiance prediction with a hybrid vision-temporal pipeline that improves both forecasting accuracy and latency against more conventional RNN and Transformer baselines.",
    keywords: ["PyTorch", "MambaVision", "Time-series analysis", "Solar forecasting"],
    links: {
      arxiv: null,
      bibtex: null,
      code: "https://github.com/Oshadha345/Mamba-Irradiance",
      project: "/projects/1",
    },
  },
  {
    id: "controlled-benchmark-igarss-2026",
    section: "accepted",
    kind: "Conference Proceedings",
    title:
      "A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation",
    authors: [
      "Nichula Wasalathilaka",
      "Dineth Perea",
      "Oshadha Samarakoon",
      "Buddhi Wijenayake",
      "Roshan Godaliyadda",
      "Vijitha Herath",
      "Parakrama Ekanayake",
    ],
    venue: "IEEE IGARSS 2026 Proceedings",
    scope: "International Conference",
    status: "Accepted",
    focus: "Applications of advanced deep learning in Earth Observation.",
    contribution:
      "Contributed to training, ideation, paper writing, figure design, pipeline architecture, and comparative analysis for controlled remote-sensing benchmarking.",
    summary:
      "The work studies visual state-space backbones under domain shift and boundary-sensitive evaluation in remote-sensing segmentation settings.",
    keywords: [
      "Remote sensing",
      "Geoscience",
      "Vision Mamba",
      "Multi-spectral imaging",
    ],
    links: {
      arxiv: null,
      bibtex: "@article{wasalathilaka2026controlledbenchmark, title={A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation}, author={Wasalathilaka, Nichula and Perea, Dineth and Samarakoon, Oshadha and Wijenayake, Buddhi and Godaliyadda, Roshan and Herath, Vijitha and Ekanayake, Parakrama}, journal={IGRAAS 2026}, year={2026}}",
      code: "https://github.com/Dineth14/Mamba-Segmentation",
      project: null,
    },
  },
];

export const researchCompetitions = [
  {
    id: "bratsmamba-biofusion-2026",
    title: "BraTSMamba",
    subtitle: "3D Brain Tumor Segmentation with State Space Models",
    type: "Research Competition Submission",
    scope: "Local Research Competition",
    status: "Submitted",
    focus: "Brain tumor segmentation on 3D medical volumes using state-space models.",
    contribution:
      "Modified the Mamba architecture for 3D medical volumetric data with an emphasis on high-resolution segmentation and linear-scaling behavior.",
    context:
      "Developed for the BioFusion Biomedical DL/ML Challenge 2026 organized by the EMBS Society of the University of Sri Jayewardenepura.",
    outcome:
      "Produced a competition-ready segmentation pipeline together with a report, implementation, and supporting visual analyses.",
    image: "/images/projects/BraTSMamba/Logo.png",
    links: {
      report: "https://github.com/Oshadha345/BraTSMamba/blob/main/BioMamba_Report.pdf",
      code: "https://github.com/Oshadha345/BraTSMamba",
      project: "/projects/2",
    },
  },
  {
    id: "flowmatch-pdm-ieee-ies-2026",
    title: "Flowmatch-PDM",
    subtitle:
      "State-Space Flow Matching with Dynamic Harmonic Priors for Physics-Aware Synthetic Fault Generation in Predictive Maintenance",
    type: "Research Competition Submission",
    scope: "International Research Challenge",
    status: "Selected for final round",
    focus:
      "Physics-aware generative modeling for predictive maintenance and synthetic fault generation.",
    contribution:
      "Framed a state-space flow-matching direction using dynamic harmonic priors to improve controllability and realism in generated maintenance data.",
    context:
      "Developed for the Generative AI Challenge 2026 from the IEEE IES Society.",
    outcome:
      "Ongoing research effort with a conference submission target at IRAI 2026 in Melbourne, Australia.",
    image: null,
    links: {
      report: null,
      code: null,
      project: null,
    },
  },
];

export const researchProjects = [
  {
    id: "solarmamba-project",
    title: "SolarMamba",
    status: "Paper under review",
    track: "Publication-driven research",
    focus:
      "Adaptive fusion of vision state-space models and temporal networks for solar irradiance forecasting.",
    contribution:
      "Built the end-to-end architecture, bringing together image encoders, temporal fusion, and efficient sequence modeling for weather-driven forecasting.",
    venue: "ECCV 2026 submission",
    linkedProjectIds: [1],
    image: null,
  },
  {
    id: "igarss-remote-sensing",
    title: "IGARSS Remote Sensing Benchmark",
    status: "Accepted proceedings",
    track: "Remote sensing publication",
    focus:
      "Controlled benchmarking of visual state-space backbones for segmentation under domain shift.",
    contribution:
      "Supported training, experimentation, figure generation, architecture design, and comparative analysis for the accepted IGARSS 2026 paper.",
    venue: "IEEE IGARSS 2026",
    linkedProjectIds: [],
    image: null,
  },
  {
    id: "bratsmamba-project",
    title: "BraTSMamba",
    status: "Competition submission",
    track: "Biomedical AI competition",
    focus:
      "3D brain tumor segmentation with state-space models and medical volumetric data.",
    contribution:
      "Adapted Mamba-style modeling to volumetric segmentation constraints and delivered a documented challenge submission.",
    venue: "BioFusion 2026",
    linkedProjectIds: [2],
    image: "/images/projects/BraTSMamba/BraTSMamba.png",
  },
  {
    id: "flowmatch-pdm-project",
    title: "Flowmatch-PDM",
    status: "Ongoing",
    track: "Generative modeling research",
    focus:
      "Physics-aware synthetic fault generation for predictive maintenance using flow matching and dynamic priors.",
    contribution:
      "Exploring a new generative formulation aimed at efficient, realistic, and controllable industrial fault synthesis.",
    venue: "IRAI 2026 target",
    linkedProjectIds: [],
    image: null,
  },
  {
    id: "ssm-benchmarking-irradiance",
    title: "SSM Benchmarking on Irradiance Prediction",
    status: "Ongoing",
    track: "Controlled benchmark study",
    focus:
      "Rigorous comparison of SSMs, CNNs, and Transformers for short-term irradiance forecasting.",
    contribution:
      "Designing a comprehensive benchmark to measure both predictive performance and inference efficiency on long-sequence weather data.",
    venue: "MERCon 2026 target",
    linkedProjectIds: [1, 3],
    image: "/images/projects/solar_irradiance_seg/logo.png",
  },
];

export const researchNews = [
  {
    id: "igarss-accepted",
    date: "2026-03-18",
    category: "Publication",
    title: "Remote-sensing benchmark accepted to IEEE IGARSS 2026 proceedings",
    description:
      "The remote-sensing benchmarking study on visual state-space backbones was accepted for the IEEE IGARSS 2026 proceedings, strengthening the Earth Observation side of the portfolio.",
    href: "/research",
    cta: "Open research portfolio",
  },
  {
    id: "flowmatch-final-round",
    date: "2026-02-20",
    category: "Competition",
    title: "Flowmatch-PDM selected for the final round of the IEEE IES Generative AI Challenge",
    description:
      "The predictive-maintenance generative modeling proposal advanced to the final round, opening a path toward an IRAI 2026 submission.",
    href: "/research",
    cta: "See ongoing work",
  },
  {
    id: "bratsmamba-submission",
    date: "2026-01-05",
    category: "Submission",
    title: "BraTSMamba completed as a BioFusion 2026 research competition submission",
    description:
      "The project delivered a full report, codebase, and experimental analysis for 3D brain tumor segmentation with state-space models.",
    href: "/projects/2",
    cta: "View project",
  },
  {
    id: "marc-position",
    date: "2025-08-01",
    category: "Position",
    title: "Started as a volunteer researcher at MARC",
    description:
      "Joined the Multidisciplinary AI Research Centre at the University of Peradeniya to work on solar forecasting and remote sensing research.",
    href: "/research",
    cta: "Read experience",
  },
];

export const researchMedia = [
  {
    id: "bratsmamba-architecture",
    type: "Competition Artifact",
    title: "BraTSMamba architecture overview",
    image: "/images/projects/BraTSMamba/BraTSMamba.png",
    caption:
      "System design figure used in the BioFusion submission package and project documentation.",
    note: "Existing asset already available in the repository.",
    href: "/projects/2",
  },
  {
    id: "bratsmamba-training",
    type: "Competition Artifact",
    title: "BraTSMamba training curves",
    image: "/images/projects/BraTSMamba/training_curves.png",
    caption:
      "Representative training behavior from the medical segmentation pipeline.",
    note: "Useful as supporting media until award and certificate images are added.",
    href: "/projects/2",
  },
  {
    id: "igarss-certificate-placeholder",
    type: "Certificate",
    title: "IGARSS acceptance letter or certificate",
    image: null,
    caption:
      "Placeholder for the acceptance letter, proceedings certificate, or presentation photo.",
    note: "Replace with a final asset path once the document or photo is available.",
    href: null,
  },
  {
    id: "competition-photo-placeholder",
    type: "Award Photo",
    title: "Competition or award ceremony photo",
    image: null,
    caption:
      "Placeholder for BioFusion, IEEE IES challenge, MERCon, or other research competition photographs.",
    note: "Designed so new media can be added without changing the page structure.",
    href: null,
  },
];

export const publicationSections = [
  {
    id: "under-review",
    title: "Under Review / In Submission",
    description:
      "Manuscripts currently in review or being prepared for conference or journal venues.",
  },
  {
    id: "accepted",
    title: "Accepted Proceedings",
    description:
      "Research outputs already accepted for official conference proceedings.",
  },
];

export const researchProjectIds = projects
  .filter((project) => project.isResearch)
  .map((project) => project.id);

export const getResearchProjectsFromPortfolio = () =>
  projects.filter((project) => project.isResearch);

export const getFeaturedResearchNews = (count = 3) =>
  [...researchNews]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);

export const getPublicationsBySection = (sectionId) =>
  researchPublications.filter((publication) => publication.section === sectionId);

export const getLinkedProjects = (linkedProjectIds = []) =>
  linkedProjectIds
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean);

export { researchExperience };
