// Fields set to null / [] and marked TODO(content) are listed in CONTENT-TODO.md; the UI hides them until filled.

import cvVersion from "./cv-version.json" with { type: "json" };

export const SITE_URL = "https://oshadha345.github.io";

export const profile = {
  name: "Oshadha Samarakoon",
  role: "Undergraduate Researcher",
  roleLine: "Undergraduate Researcher, MARC, University of Peradeniya",
  headline: null, // TODO(content): one-line identity statement
  bio: "I work on efficient visual state-space models for remote sensing and multimodal forecasting, with a current focus on the mechanistic interpretability of vision encoders.",
  affiliation: "Electrical & Electronic Engineering, University of Peradeniya",
  lab: "Multidisciplinary AI Research Centre (MARC), University of Peradeniya",
  supervisor: "Prof. Roshan Godaliyadda",
  status: "Open to research internship opportunities", // TODO(content): confirm wording and add the internship period
  interests: [
    { area: "remote-sensing", title: "Remote Sensing", detail: null }, // TODO(content): parenthetical detail
    { area: "solar-forecasting", title: "Multimodal Solar Forecasting", detail: null }, // TODO(content)
    { area: "vision-encoders", title: "Vision Encoder Research", detail: null }, // TODO(content)
  ],
  researchStatement: [], // TODO(content): 2–3 short paragraphs
  longBio: [], // TODO(content): longer bio for About
  email: "e21345@eng.pdn.ac.lk",
  cv: `/cv/oshadha-samarakoon-cv.pdf?v=${cvVersion.hash}`,
  portrait: "/media/profile/portrait.webp",
  scholar: "https://scholar.google.com/citations?user=9lirV1kAAAAJ",
  links: [
    ["Google Scholar", "https://scholar.google.com/citations?user=9lirV1kAAAAJ"],
    ["GitHub", "https://github.com/Oshadha345"],
    ["ORCID", "https://orcid.org/0009-0000-9337-0198"],
    ["Hugging Face", "https://huggingface.co/OoshadhaSam"],
    ["LinkedIn", "https://www.linkedin.com/in/oshadha-samarakoon-488638341/"],
  ],
};

export const areas = [
  {
    id: "remote-sensing",
    name: "Remote Sensing",
    subtitle: "Efficient state-space vision for Earth observation", // from new_items/areas/remote-sensing.png; TODO(content): confirm
    description: null, // TODO(content): short description for the Research page
    image: "/media/areas/remote-sensing.webp",
  },
  {
    id: "solar-forecasting",
    name: "Multimodal Solar Forecasting",
    subtitle: "Sky imagery meets weather time series", // from new_items/areas/solar-forecasting.png; TODO(content): confirm
    description: null, // TODO(content)
    image: "/media/areas/solar-forecasting.webp",
  },
  {
    id: "vision-encoders",
    name: "Vision Encoder Research",
    subtitle: "Opening the backbone: CNNs, ViTs and Mamba", // from new_items/areas/vision-encoders.png; TODO(content): confirm
    description: null, // TODO(content)
    image: "/media/areas/vision-encoders.webp",
  },
];

export const getArea = (id) => areas.find((area) => area.id === id);

export const publications = [
  {
    slug: "igarss26-vssm-benchmark",
    year: 2026,
    area: "remote-sensing",
    status: "accepted",
    featured: true,
    venue: "IEEE IGARSS 2026",
    venueFull: "2026 IEEE International Geoscience and Remote Sensing Symposium, Washington, D.C.",
    title: "A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation",
    authors: "N. Wasalathilaka, D. Perera, O. Samarakoon, B. Wijenayake, R. Godaliyadda, V. Herath, P. Ekanayake",
    contribution: "Main ideation, literature survey, implementation, and writing.",
    tldr: null, // TODO(content): one-sentence TL;DR
    links: [["Paper", "https://arxiv.org/abs/2604.18721"], ["Code", "https://github.com/Dineth14/Mamba-Segmentation"], ["Models", "https://huggingface.co/dineth18/Mamba-Segmentation"]],
  },
  {
    slug: "mercon26-mambarefine-cd",
    year: 2026,
    area: "remote-sensing",
    status: "published",
    featured: true,
    venue: "MERCon 2026",
    venueFull: "Moratuwa Engineering Research Conference 2026 (MERCon 2026)",
    title: "MambaRefine-CD: MambaVision with Region–Boundary Temporal Refinement",
    authors: "D. Perera, T. Firdous, O. Samarakoon, R. Godaliyadda, P. Ekanayake, V. Herath",
    contribution: "Pipeline design, experiment planning, and implementation.",
    tldr: null, // TODO(content)
    links: [["Paper", "https://arxiv.org/abs/2607.04403"], ["DOI", "https://doi.org/10.1109/MERCon71835.2026.11691356"], ["Code", "https://github.com/Dineth14/MambaRefine-CD"], ["Models", "https://huggingface.co/dineth18/MambaRefine-CD"]],
  },
  {
    slug: "mercon26-solar-benchmark",
    year: 2026,
    area: "solar-forecasting",
    status: "published",
    featured: true,
    venue: "MERCon 2026",
    venueFull: "Moratuwa Engineering Research Conference 2026 (MERCon 2026)",
    title: "A Controlled Visual-Backbone Benchmark for Multimodal Short-Term Solar Irradiance Forecasting",
    authors: "O. Samarakoon, Dilshara Herath, I. Ranmandala, Dushan Herath, R. Godaliyadda, P. Ekanayake, V. Herath",
    contribution: "Led the research end-to-end; co-authors supervised and refined the implementation.",
    tldr: null, // TODO(content)
    links: [["Paper", "https://arxiv.org/abs/2607.23633"], ["DOI", "https://doi.org/10.1109/MERCon71835.2026.11691562"], ["Code", "https://github.com/Oshadha345/irradiance_benchmark"], ["Project", "https://oshadha345.github.io/irradiance_benchmark/"], ["Models", "https://huggingface.co/OoshadhaSam/solar-irradiance-visual-backbone-benchmark"]],
  },
];

export const venues = [
  { name: "IEEE IGARSS 2026", logo: "/media/venues/igarss-2026.png" },
  { name: "MERCon 2026", logo: "/media/venues/mercon-2026.png" },
];

export const manuscripts = [
  {
    slug: "solarmamba",
    area: "solar-forecasting",
    title: "SolarMamba: Adaptive Fusion of Sky-Camera Imagery and Temporal Weather Data for Short-Term Solar Irradiance Nowcasting",
    authors: "O. Samarakoon†, D. Herath†, et al.",
    equalContribution: true,
    venue: "Target: Applied Energy",
    links: [["Code", "https://github.com/Oshadha345/SolarMamba"]],
  },
  {
    slug: "orbit-mamba",
    area: "remote-sensing",
    title: "ORBIT-Mamba: A State-Space Architecture for Remote-Sensing Change Detection",
    authors: "D. Perera, O. Samarakoon, T. Firdous, R. Godaliyadda, et al.",
    venue: "Target: IEEE TGRS",
    links: [],
  },
];

export const news = [
  { date: "2026-09", text: "Two MERCon 2026 papers published on IEEE Xplore: MambaRefine-CD and the solar-irradiance visual-backbone benchmark.", href: "/publications" },
  { date: "2026-08", text: "Presented two papers at MERCon 2026, the Moratuwa Engineering Research Conference.", href: "/gallery#mercon-2026" }, // TODO(content): confirm wording
  { date: "2026-08", text: "IGARSS 2026 in Washington, D.C.: poster on visual state-space backbones for remote-sensing segmentation.", href: "/gallery#igarss-2026" }, // TODO(content): confirm month
  { date: "2026", text: "Paper accepted at IEEE IGARSS 2026.", href: "/publications#igarss26-vssm-benchmark" }, // TODO(content): exact month
  { date: "2026", text: "Two papers accepted at MERCon 2026.", href: "/publications" }, // TODO(content): exact month
  { date: "2025-08", text: "Joined the Multidisciplinary AI Research Centre (MARC), University of Peradeniya, as an undergraduate researcher." },
];

export const experience = [
  { period: "Aug 2025–present", title: "Undergraduate Researcher", place: "Multidisciplinary AI Research Centre (MARC), University of Peradeniya", supervisor: "Supervisor: Prof. Roshan Godaliyadda", description: "Visual state-space models, remote-sensing segmentation and change detection, and multimodal solar-irradiance forecasting. I lead architecture design, training, and experiments for SolarMamba, contribute to Dineth Perera-led ORBIT-Mamba as a co-author, and contributed to three accepted conference papers." },
  { period: "Oct 2022–Mar 2023", title: "Volunteer Assistant Researcher", place: "National Institute of Fundamental Studies (NIFS)", supervisor: "Supervisor: Prof. G. R. A. Kumara", description: "Studied supercapacitor performance using activated carbon through device fabrication, analysis in Origin, and literature review.", album: "nifs-research-volunteer" },
];

// Evidence sits next to the claim it proves. category drives the About archive grouping.
const pdf = (slug, category, detail, { type = "certificate", label = "Certificate" } = {}) => ({ type, label, category, detail, slug, file: `/evidence/${slug}.pdf`, preview: `/media/evidence/${slug}.webp` });
const image = (slug, type, label, category, detail) => ({ type, label, category, detail, slug, file: `/media/evidence/${slug}.webp`, preview: `/media/evidence/${slug}.webp` });
const photos = (album) => ({ type: "photos", label: "Photos", album });

export const education = {
  university: {
    period: "Mar 2023–Jun 2028 (expected)",
    institution: "University of Peradeniya",
    logo: "/media/education/university-of-peradeniya.webp",
    program: "B.Sc. Engineering (Honours)",
    specialization: "Electrical & Electronic Engineering",
    metrics: [
      ["Second- and third-year CGPA", "3.557/4.00"],
      ["First-year General Engineering GPA", "3.7545/4.00"],
    ],
  },
  school: {
    period: "2008–2022",
    institution: "Sri Chandananda Buddhist College, Kandy",
    logo: "/media/education/sri-chandananda-buddhist-college.webp",
    program: "Primary and Secondary Education",
    exams: [
      { date: "Mar 2022", title: "G.C.E. Advanced Level Examination", subtitle: "Physical Science · Combined Mathematics, Physics, and Chemistry", summary: "3 A passes; 5th in Kandy District and 98th islandwide (Z-score 2.5756).", note: "Best result in school history.", evidence: [pdf("advanced-level-certificate", "academic", "2022 · Official examination certificate")] },
      { date: "Dec 2018", title: "G.C.E. Ordinary Level Examination", summary: "9 A passes.", evidence: [pdf("ordinary-level-certificate", "academic", "2018 · Official examination certificate")] },
    ],
  },
};

const researchProjectList = [
  { id: 23, slug: "orbit-mamba", title: "ORBIT-Mamba", period: "Mar 2026–present", category: "Remote sensing", area: "remote-sensing", current: true, status: "ongoing", description: "A Dineth Perera-led visual state-space project for remote-sensing change detection. I contribute as a co-author; the manuscript is in preparation for IEEE TGRS.", details: "An ongoing MARC research project led by Dineth Perera. I contribute to the remote-sensing change-detection work as a co-author. Public information is limited while the manuscript is in preparation.", tags: ["Remote sensing", "Change detection", "State-space models"], links: [] },
  { id: 1, slug: "solarmamba", title: "SolarMamba", period: "Oct 2025–present", category: "Multimodal forecasting", area: "solar-forecasting", current: true, status: "ongoing", description: "Multimodal solar-irradiance nowcasting. Manuscript in preparation for Applied Energy.", details: "An ongoing MARC research project on short-term solar-irradiance nowcasting from sky imagery and weather observations. Public information is limited while the manuscript is in preparation.", tags: ["Forecasting", "Vision", "State-space models"], links: [["Code", "https://github.com/Oshadha345/SolarMamba"]] },
  // TODO(content): confirm title and one-line description for the vision-encoder project
  { id: 19, slug: "image-encoders", title: "Image Encoders", period: "Ongoing", category: "Vision systems", area: "vision-encoders", current: true, status: "ongoing", description: "Controlled implementations and experiments across CNN, Vision Transformer, and Mamba/SSM encoders.", details: "A controlled study of modern vision backbones, focused on feature extraction, architectural behavior, and computational trade-offs.", tags: ["CNN", "ViT", "Mamba", "PyTorch"], links: [["Code", "https://github.com/Oshadha345/Image-Encoders/"]] },
  { id: 2, slug: "bratsmamba", title: "BraTSMamba", period: "Dec 2025–Mar 2026", category: "Biomedical vision", area: null, description: "3D brain-tumor segmentation on BraTS 2021 for the BioFusion Biomedical Deep Learning Hackathon.", details: "I led the research team with equal contribution from D. Perera. The project studies a linear-complexity Mamba backbone for full-resolution multimodal MRI and BraTS 2021 Task 1 sub-region segmentation.", tags: ["3D segmentation", "MRI", "Mamba", "MONAI"], links: [["Code", "https://github.com/Oshadha345/BraTSMamba"], ["Report", "/media/projects/bratsmamba/report.pdf"]] },
  { id: 20, slug: "patchflow-pdm", title: "PatchFlow-PdM", period: "Jan–May 2026", category: "Generative modelling", area: null, description: "Synthetic fault-data generation for the IEEE IES Generative AI Challenge 2026.", details: "Team Astra advanced through Milestone 3, and the manuscript was recommended for IRAI 2026. I led research formulation, training, methodology writing, and scientific figures.", tags: ["Predictive maintenance", "Generative models", "Research challenge"], links: [] },
  { id: 3, slug: "cv-solar-irradiance", title: "CV Solar Irradiance", period: "Research study", category: "Computer vision", area: "solar-forecasting", description: "An all-sky-image irradiance forecasting pipeline linked to MARC and DLR work.", details: "The pipeline covers camera-metadata extraction, irradiance synchronization, classical and deep cloud segmentation, and short-horizon GHI, DNI, and DHI forecasting.", tags: ["Cloud segmentation", "OCR", "Solar forecasting", "OpenCV"], links: [["Code", "https://github.com/Oshadha345/CV_Solar_Irradiance"]] },
];
export const researchProjects = researchProjectList;

export const engineeringProjects = [
  { id: 4, slug: "omni-wheel-robot", title: "Omni-Wheel Autonomous Robot", period: "EngEx 2025", category: "Robotics", description: "ROS, Jetson AGX Xavier, LiDAR/Kalman fusion, SLAM, and PID. Exhibited at EngEx 2025.", details: "An omni-directional autonomous robot developed for EngEx 2025, integrating perception, localization, path planning, and closed-loop motion control.", tags: ["ROS", "Jetson", "SLAM", "Control"], links: [], video: { src: "/media/projects/omni-wheel-robot/demo.mp4", poster: "/media/projects/omni-wheel-robot/demo-poster.webp" }, album: "engex-2025" },
  { id: 17, slug: "symon-says", title: "Symon Says", period: "EngEx 2025", category: "Embedded DSP", description: "A sound-controlled memory game using MATLAB and ESP32. Exhibited at EngEx 2025.", details: "A real-time sound-classification game that recognizes snap, clap, and knock inputs and maps them to LED sequences on an ESP32-based device.", tags: ["MATLAB", "ESP32", "Signal processing"], links: [["Code", "https://github.com/kaweesha2002/SVAIS"], ["Site", "https://sites.google.com/view/symon-says/home"]] },
  { id: 21, slug: "contxt-box", title: "ConTXT BOX", category: "Developer systems", description: "A local-first MCP context layer for coding agents.", details: "An active system for lazy workspace indexing, retrieval, and on-demand context extraction for coding agents.", tags: ["MCP", "Retrieval", "Local-first"], links: [["Code", "https://github.com/Oshadha345/contxt-box"]] },
  { id: 5, slug: "server-sentinel-c", title: "Server Sentinel C", category: "Systems", description: "A C99/GTK4 data-center monitoring simulator with alerting and state-machine logic.", details: "A portable Windows application that simulates environmental monitoring and safety control for data-center infrastructure.", tags: ["C99", "GTK4", "State machines"], links: [["Code", "https://github.com/Oshadha345/server-sentinel-c"]] },
  { id: 22, slug: "li-fi-file-sharing", title: "Li-Fi File Sharing", category: "Communication systems", description: "A visible-light file-transfer system.", details: "An engineering prototype for transferring files over a visible-light communication channel.", tags: ["Li-Fi", "Embedded systems", "Communications"], links: [["Code", "https://github.com/Oshadha345/Li-Fi-File-Sharing"]] },
];

export const otherProjects = [
  { id: 8, slug: "digital-signal-processing", group: "coursework", title: "Digital Signal Processing", category: "Coursework", description: "EE325 implementations and notes in digital signal processing.", tags: ["DSP", "MATLAB"], links: [["Code", "https://github.com/Oshadha345/DSP"]] },
  { id: 9, slug: "signals-and-systems", group: "coursework", title: "Signals and Systems", category: "Coursework", description: "Continuous- and discrete-time signal analysis from EE257.", tags: ["Signals", "Systems"], links: [["Code", "https://github.com/Oshadha345/Signals_and_Systems"]] },
  { id: 10, slug: "load-flow-analysis", group: "coursework", title: "Load Flow Analysis", category: "Power systems", description: "Custom load-flow algorithms with PSSE verification for EE354.", tags: ["Power systems", "Simulation"], links: [["Code", "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Project"]] },
  { id: 11, slug: "synchronous-generator-modelling", group: "coursework", title: "Synchronous Generator Modelling", category: "Power systems", description: "Dynamic simulation and transient analysis of a synchronous generator.", tags: ["Power systems", "Modelling"], links: [["Code", "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Sync%20Gen"]] },
  { id: 14, slug: "6-bar-linkage", group: "coursework", title: "6-Bar Linkage", category: "Modelling", description: "A MATLAB/Simulink model of a six-bar mechanical linkage.", tags: ["Simulink", "Mechanisms"], links: [["Code", "https://github.com/Oshadha345/6-Bar-Linkage"]] },
  { id: 15, slug: "sensor-calibration-analysis", group: "coursework", title: "Sensor Calibration Analysis", category: "Instrumentation", description: "Capacitive-sensor characterization and error analysis.", tags: ["Instrumentation", "Calibration"], links: [["Code", "https://github.com/Oshadha345/Sensor-Calibration-Analysis"]] },
  { id: 16, slug: "line-following-robot", group: "coursework", title: "Line-Following Robot", category: "Robotics", description: "An Arduino robot with PID control, built as a first-year group project.", tags: ["Arduino", "PID", "Robotics"], links: [] },
  { id: 6, slug: "jax-deep-learning", group: "self-directed", title: "JAX Deep Learning", category: "Independent study", description: "Experiments and learning material for functional machine learning in JAX.", tags: ["JAX", "Machine learning"], links: [["Code", "https://github.com/Oshadha345/JAX"]] },
  { id: 7, slug: "opencv-self-study", group: "self-directed", title: "OpenCV Self Study", category: "Independent study", description: "Notebooks covering core computer-vision operations with OpenCV.", tags: ["OpenCV", "Computer vision"], links: [["Code", "https://github.com/Oshadha345/Open-CV"]] },
  { id: 18, slug: "ai-agents", group: "self-directed", title: "AI Agents", category: "Independent study", description: "Experiments with tool-using and autonomous software agents.", tags: ["Agents", "Tool use"], links: [["Code", "https://github.com/Oshadha345/AI-Agents"]] },
  { id: 12, slug: "competitive-programming-journey", group: "self-directed", title: "Competitive Programming Journey", category: "Problem solving", description: "Solutions and practice work from programming competitions.", tags: ["Algorithms", "C++"], links: [["Code", "https://github.com/Oshadha345/Competitive-Programming-Journey"]] },
  { id: 13, slug: "codeforces-solutions", group: "self-directed", title: "Codeforces Solutions", category: "Problem solving", description: "A repository of Codeforces problem solutions.", tags: ["Algorithms", "C++"], links: [["Code", "https://github.com/Oshadha345/Codeforces"]] },
];

export const awards = [
  { year: "2025/26", title: "ICPC Sri Lanka Regional Finals", result: "Top 15 team finish", top: true, evidence: [pdf("icpc-finalist", "placement", "2025/26 · Finalist")] },
  { year: "2024", title: "IEEEXtreme 18.0", result: "Global top 900 · Sri Lanka top 100", top: true, evidence: [pdf("ieeextreme-18-certificate", "participation", "2024 · Participation certificate"), photos("ieeextreme-18-bittopia")] },
  { year: "2025", title: "MoraXtreme 10.0", result: "Finalist among 150 teams · Team Nocturnals · elimination rank 11", top: true, evidence: [
    pdf("moraxtreme-10-certificate", "placement", "2025 · Finalist certificate"),
    image("moraxtreme-10-finalist-poster", "flyer", "Finalist flyer", "placement", "2025 · Finalist announcement"),
    image("moraxtreme-10-ranking", "ranking", "Ranking", "placement", "2025 · Elimination round, rank 11"),
  ] },
  { year: "2025", title: "CodeArena", result: "3rd in selection · Top 20 of 150 finalist", top: true, evidence: [pdf("codearena-finalist", "placement", "2025 · Finalist certificate")] },
  { year: "2025", title: "HaXtreme 4.0", result: "5th in the Non-AI round · 8th overall after the Non-AI and AI rounds", top: true, evidence: [pdf("haxtreme-4-finalist", "placement", "2025 · 5th in Non-AI round, 8th overall", { type: "ranking", label: "Results" }), photos("haxtreme-4")] },
  { year: "2025", title: "UOJ Coders 4.0", result: "Top 15 finalist", evidence: [pdf("uoj-coders-4-finalist", "placement", "2025 · Finalist certificate"), photos("uoj-coders-4")] },
  { year: "2025", title: "CodeRally", result: "2nd place, Beginner Tier selection · finalist" },
  { year: "2024", title: "Coders V11", result: "42nd place · national competition, qualified through PreCoders V11", evidence: [photos("coders-v11")] },
  { year: "2024", title: "PreCoders V11", result: "1st place team · UoP intra-university selection for Coders V11", evidence: [pdf("precoders-coders-v11", "placement", "2024 · PreCoders V11 and Coders V11 results", { type: "ranking", label: "Results" }), photos("coders-v11")] },
  { year: "2023", title: "Coders V10", result: "Finalist · national competition, qualified through PreCoders V10", evidence: [photos("coders-v10")] },
  { year: "2023", title: "PreCoders V10", result: "Top 25 · UoP intra-university selection for Coders V10", evidence: [photos("coders-v10")] },
  { year: "2025", title: "IEEEXtreme 19.0", result: "Participant · Team AlgorithmAvengersF2O", participant: true, evidence: [pdf("ieeextreme-19-certificate", "participation", "2025 · Participation certificate")] },
  { year: "2024", title: "MoraXtreme 9.0", result: "Participant · Team Algorithm Avengers", participant: true, evidence: [image("moraxtreme-9-certificate", "certificate", "Certificate", "participation", "2024 · Participation certificate")] },
];

export const writing = [
  { slug: "the-eternal-harmonic", title: "The Eternal Harmonic: A Tribute to Joseph Fourier", venue: "EEES Magazine 2026", description: "From heat theory and Fourier analysis to modern signal processing and positional encodings.", links: [["Article PDF", "/writing/the-eternal-harmonic.pdf"], ["Full EEES Magazine", "https://drive.google.com/file/d/1JH4ulr2frmz55m02Iv3KpSgOvDOlpWyz/view?usp=sharing"]] },
  { slug: "from-apollo-to-ai", title: "From Apollo to AI: A Deep Look into State Space Models", description: "The lineage from Kalman filtering to the Mamba architecture.", links: [["Article PDF", "/writing/from-apollo-to-ai.pdf"]] },
];

export const studies = [
  { title: "Distance Geometry in ML", description: "Distance-geometry techniques applied to learned representations.", href: "https://github.com/Oshadha345/distance-geometry-ml" },
  { title: "Information Theory", description: "Shannon theory, Huffman coding, information bottleneck.", href: "https://github.com/Oshadha345/information-theory" },
  { title: "Nonlinear & Multivariable Systems", description: "Lyapunov stability, bifurcations, feedback linearization.", href: "https://github.com/Oshadha345/EE539-Nonlinear-and-Multivariable-Systems" },
];

export const skills = [
  ["Research", "experimental design, literature review, manuscript writing, scientific figures, Origin"],
  ["Machine learning", "PyTorch, JAX, Hugging Face, Mamba/SSM, Vision Transformers, CNNs, conditional flow matching"],
  ["Hardware & embedded", "ROS, Arduino, ESP32, NVIDIA Jetson, OpenCV, Altium"],
  ["Tools", "Python, C, C++, MATLAB, LaTeX, Git, GitHub, Linux"],
];

export const books = [
  { slug: "godel-escher-bach", title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", year: 1979, cover: "/media/reading/godel-escher-bach.webp", summary: "Douglas Hofstadter · notes on formal systems, self-reference, and intelligence.", intro: "Notes on strange loops, formal systems, and the links among mathematics, art, music, and intelligence.", sections: [
    ["Why I picked it up", "The book sits directly across my interests in mathematics, intelligence, and consciousness. Its dialogues and formal arguments approach the same question from several directions: how meaning can emerge from systems that manipulate symbols."],
    ["Ideas I am keeping", "Self-reference is not just a logical curiosity. Hofstadter uses it to connect Gödel’s incompleteness theorems, Escher’s recursive images, Bach’s musical structures, and the idea of a self. The useful part for my own work is the insistence on separating a formal mechanism from the interpretation we place on it."],
  ] },
];

const evidenceSource = [
  ...awards.map((award) => ({ title: award.title, evidence: award.evidence })),
  ...education.school.exams.map((exam) => ({ title: exam.title, evidence: exam.evidence })),
];

export const albumForAward = (award) => award.evidence?.find((item) => item.type === "photos")?.album;

// Document evidence for the About archive: one entry per file, newest first within each category.
export const evidenceArchive = evidenceSource
  .flatMap(({ title, evidence = [] }) => evidence.filter((item) => item.file && !item.needsRedaction).map((item) => ({ ...item, title })))
  .sort((a, b) => Number(b.detail.slice(0, 4)) - Number(a.detail.slice(0, 4)));

// The first document proving the award an album belongs to (for "Certificate →" in the gallery).
export const albumEvidence = (albumSlug) =>
  awards.filter((award) => albumForAward(award) === albumSlug).flatMap((award) => award.evidence.filter((item) => item.file && !item.needsRedaction))[0];

export const allProjects = [...researchProjects, ...engineeringProjects, ...otherProjects];
export const getProject = (key) => allProjects.find((project) => project.slug === String(key) || String(project.id) === String(key));
