export const profile = {
  name: "Oshadha Samarakoon",
  role: "Undergraduate researcher",
  bio: "I work on efficient visual state-space models for remote sensing and multimodal forecasting, with a current focus on the mechanistic interpretability of vision encoders.",
  affiliation: "Electrical & Electronic Engineering, University of Peradeniya",
  email: "e21345@eng.pdn.ac.lk",
  cv: "/cv/oshadha-samarakoon-cv.pdf",
  links: [
    ["GitHub", "https://github.com/Oshadha345"],
    ["Google Scholar", "https://scholar.google.com/citations?user=9lirV1kAAAAJ"],
    ["ORCID", "https://orcid.org/0009-0000-9337-0198"],
    ["Hugging Face", "https://huggingface.co/OoshadhaSam"],
    ["LinkedIn", "https://www.linkedin.com/in/oshadha-samarakoon-488638341/"],
  ],
};

export const publications = [
  {
    venue: "IEEE IGARSS 2026",
    title: "A Controlled Benchmark of Visual State-Space Backbones with Domain-Shift and Boundary Analysis for Remote-Sensing Segmentation",
    authors: "N. Wasalathilaka, D. Perera, O. Samarakoon, B. Wijenayake, R. Godaliyadda, V. Herath, P. Ekanayake",
    links: [["Paper", "https://arxiv.org/abs/2604.18721"], ["Code", "https://github.com/Dineth14/Mamba-Segmentation"], ["Models", "https://huggingface.co/dineth18/Mamba-Segmentation"]],
  },
  {
    venue: "MERCon 2026",
    title: "MambaRefine-CD: MambaVision with Region–Boundary Temporal Refinement",
    authors: "D. Perera, T. Firdous, O. Samarakoon, R. Godaliyadda, P. Ekanayake, V. Herath",
    links: [["Paper", "https://arxiv.org/abs/2607.04403"], ["Code", "https://github.com/Dineth14/MambaRefine-CD"], ["Models", "https://huggingface.co/dineth18/MambaRefine-CD"]],
  },
  {
    venue: "MERCon 2026",
    title: "A Controlled Visual-Backbone Benchmark for Multimodal Short-Term Solar Irradiance Forecasting",
    authors: "O. Samarakoon, Dilshara Herath, I. Ranmandala, Dushan Herath, R. Godaliyadda, P. Ekanayake, V. Herath",
    links: [["Paper", "https://arxiv.org/abs/2607.23633"], ["Code", "https://github.com/Oshadha345/irradiance_benchmark"], ["Project", "https://oshadha345.github.io/irradiance_benchmark/"], ["Models", "https://huggingface.co/OoshadhaSam/solar-irradiance-visual-backbone-benchmark"]],
  },
];

export const manuscripts = [
  {
    title: "SolarMamba: Adaptive Fusion of Sky-Camera Imagery and Temporal Weather Data for Short-Term Solar Irradiance Nowcasting",
    authors: "O. Samarakoon, D. Herath, et al.",
    venue: "Manuscript in preparation · Target: Applied Energy",
    description: "Multimodal solar-irradiance nowcasting from sky-camera imagery and temporal weather data.",
    links: [["Code", "https://github.com/Oshadha345/SolarMamba"]],
  },
  {
    title: "ORBIT-Mamba: A State-Space Architecture for Remote-Sensing Change Detection",
    authors: "O. Samarakoon, R. Godaliyadda, et al.",
    venue: "Manuscript in preparation · Target: IEEE TGRS",
    description: "A visual state-space project for remote-sensing change detection.",
    links: [],
  },
];

export const experience = [
  { period: "Aug 2025–present", title: "Undergraduate Researcher", place: "Multidisciplinary AI Research Centre (MARC), University of Peradeniya", supervisor: "Supervisor: Prof. Roshan Godaliyadda", description: "Visual state-space models, remote-sensing segmentation and change detection, and multimodal solar-irradiance forecasting. I lead architecture design, training, and experiments for ORBIT-Mamba and SolarMamba, and contributed to three accepted conference papers." },
  { period: "Oct 2022–Mar 2023", title: "Volunteer Assistant Researcher", place: "National Institute of Fundamental Studies (NIFS)", supervisor: "Supervisor: Prof. G. R. A. Kumara", description: "Studied supercapacitor performance using activated carbon through device fabrication, analysis in Origin, and literature review." },
];

export const education = [
  { period: "Mar 2023–Jun 2028 (expected)", title: "B.Sc. Engineering (Honours), Electrical & Electronic Engineering", place: "University of Peradeniya", description: "Second- and third-year CGPA: 3.38/4.00. First-year General Engineering: GPA 3.7545/4.00, rank 41/457; assessed separately from the specialization years." },
  { period: "Mar 2022", title: "G.C.E. Advanced Level · Physical Science", place: "Combined Mathematics, Physics, Chemistry", description: "3 A passes; 5th in Kandy District and 98th islandwide (Z-score 2.5756). Best result in school history." },
  { period: "Dec 2018", title: "G.C.E. Ordinary Level", place: "", description: "9 A passes." },
];

export const educationInstitutions = [
  {
    period: "Mar 2023–Jun 2028 (expected)",
    institution: "University of Peradeniya",
    logo: "/images/education/university-of-peradeniya.png",
    program: "B.Sc. Engineering (Honours)",
    specialization: "Electrical & Electronic Engineering",
    note: "The first-year General Engineering GPA and rank are assessed separately from the specialization-year CGPA.",
    metrics: [
      ["Second- and third-year CGPA", "3.38/4.00"],
      ["First-year General Engineering GPA", "3.7545/4.00"],
      ["First-year rank", "41/457"],
    ],
  },
  {
    period: "2008–2022",
    institution: "Sri Chandananda Buddhist College, Kandy",
    logo: "/images/education/sri-chandananda-buddhist-college.png",
    program: "Primary and Secondary Education",
    exams: [
      {
        date: "Mar 2022",
        title: "G.C.E. Advanced Level Examination",
        subtitle: "Physical Science · Combined Mathematics, Physics, and Chemistry",
        summary: "3 A passes; 5th in Kandy District and 98th islandwide (Z-score 2.5756).",
        note: "Best result in school history.",
        evidence: "/evidence/advanced-level-certificate.pdf",
      },
      {
        date: "Dec 2018",
        title: "G.C.E. Ordinary Level Examination",
        summary: "9 A passes.",
        evidence: "/evidence/ordinary-level-certificate.pdf",
      },
    ],
  },
];

export const researchProjects = [
  { id: 1, title: "SolarMamba", period: "Oct 2025–present", category: "Multimodal forecasting", description: "Multimodal solar-irradiance nowcasting. Manuscript in preparation for Applied Energy.", details: "An ongoing MARC research project on short-term solar-irradiance nowcasting from sky imagery and weather observations. Public information is limited while the manuscript is in preparation.", tags: ["Forecasting", "Vision", "State-space models"], links: [["Code", "https://github.com/Oshadha345/SolarMamba"]] },
  { id: 23, title: "ORBIT-Mamba", period: "Mar 2026–present", category: "Remote sensing", description: "A visual state-space project for remote-sensing change detection. Manuscript in preparation for IEEE TGRS.", details: "An ongoing MARC research project in remote-sensing change detection. Public information is limited while the manuscript is in preparation.", tags: ["Remote sensing", "Change detection", "State-space models"], links: [] },
  { id: 19, title: "Image Encoders", period: "Ongoing", category: "Vision systems", image: "/images/projects/image_encoder/Vcoder.png", description: "Controlled implementations and experiments across CNN, Vision Transformer, and Mamba/SSM encoders.", details: "A controlled study of modern vision backbones, focused on feature extraction, architectural behavior, and computational trade-offs.", tags: ["CNN", "ViT", "Mamba", "PyTorch"], links: [["Code", "https://github.com/Oshadha345/Image-Encoders/"]] },
  { id: 2, title: "BraTSMamba", period: "Dec 2025–Mar 2026", category: "Biomedical vision", image: "/images/projects/BraTSMamba/BraTSMamba.png", description: "3D brain-tumor segmentation on BraTS 2021 for the BioFusion Biomedical Deep Learning Hackathon.", details: "I led the research team with equal contribution from D. Perera. The project studies a linear-complexity Mamba backbone for full-resolution multimodal MRI and BraTS 2021 Task 1 sub-region segmentation.", tags: ["3D segmentation", "MRI", "Mamba", "MONAI"], links: [["Code", "https://github.com/Oshadha345/BraTSMamba"], ["Report", "/evidence/bratsmamba-biofusion-report.pdf"]] },
  { id: 20, title: "PatchFlow-PdM", period: "Jan–May 2026", category: "Generative modelling", description: "Synthetic fault-data generation for the IEEE IES Generative AI Challenge 2026.", details: "Team Astra advanced through Milestone 3, and the manuscript was recommended for IRAI 2026. I led research formulation, training, methodology writing, and scientific figures.", tags: ["Predictive maintenance", "Generative models", "Research challenge"], links: [] },
  { id: 3, title: "CV Solar Irradiance", period: "Research study", category: "Computer vision", image: "/images/projects/solar_irradiance_seg/ucloundseg_inference1.png", description: "An all-sky-image irradiance forecasting pipeline linked to MARC and DLR work.", details: "The pipeline covers camera-metadata extraction, irradiance synchronization, classical and deep cloud segmentation, and short-horizon GHI, DNI, and DHI forecasting.", tags: ["Cloud segmentation", "OCR", "Solar forecasting", "OpenCV"], links: [["Code", "https://github.com/Oshadha345/CV_Solar_Irradiance"]] },
];

export const engineeringProjects = [
  { id: 4, title: "Omni-Wheel Autonomous Robot", category: "Robotics", image: "/images/projects/Omni Wheel Bot/omni.jpg", description: "ROS, Jetson AGX Xavier, LiDAR/Kalman fusion, SLAM, and PID. Exhibited at EngEx 2025.", details: "An omni-directional autonomous robot developed for EngEx 2025, integrating perception, localization, path planning, and closed-loop motion control.", tags: ["ROS", "Jetson", "SLAM", "Control"], links: [] },
  { id: 17, title: "Symon Says", category: "Embedded DSP", image: "/images/projects/Simon_Says/Game_box.jpg", description: "A sound-controlled memory game using MATLAB and ESP32. Exhibited at EngEx 2025.", details: "A real-time sound-classification game that recognizes snap, clap, and knock inputs and maps them to LED sequences on an ESP32-based device.", tags: ["MATLAB", "ESP32", "Signal processing"], links: [["Code", "https://github.com/kaweesha2002/SVAIS"], ["Site", "https://sites.google.com/view/symon-says/home"]] },
  { id: 21, title: "ConTXT BOX", category: "Developer systems", description: "A local-first MCP context layer for coding agents.", details: "An active system for lazy workspace indexing, retrieval, and on-demand context extraction for coding agents.", tags: ["MCP", "Retrieval", "Local-first"], links: [["Code", "https://github.com/Oshadha345/contxt-box"]] },
  { id: 5, title: "Server Sentinel C", category: "Systems", image: "/images/projects/server_sentinel/server.png", description: "A C99/GTK4 data-center monitoring simulator with alerting and state-machine logic.", details: "A portable Windows application that simulates environmental monitoring and safety control for data-center infrastructure.", tags: ["C99", "GTK4", "State machines"], links: [["Code", "https://github.com/Oshadha345/server-sentinel-c"]] },
  { id: 22, title: "Li-Fi File Sharing", category: "Communication systems", description: "A visible-light file-transfer system.", details: "An engineering prototype for transferring files over a visible-light communication channel.", tags: ["Li-Fi", "Embedded systems", "Communications"], links: [["Code", "https://github.com/Oshadha345/Li-Fi-File-Sharing"]] },
];

export const projectArchive = [
  { id: 6, title: "JAX Deep Learning", category: "Independent study", image: "/images/projects/JAX/JAX.jpg", description: "Experiments and learning material for functional machine learning in JAX.", tags: ["JAX", "Machine learning"], links: [["Code", "https://github.com/Oshadha345/JAX"]] },
  { id: 7, title: "OpenCV Self Study", category: "Independent study", image: "/images/projects/opencv/logo.png", description: "Notebooks covering core computer-vision operations with OpenCV.", tags: ["OpenCV", "Computer vision"], links: [["Code", "https://github.com/Oshadha345/Open-CV"]] },
  { id: 8, title: "Digital Signal Processing", category: "Coursework", image: "/images/projects/DSP/dsp.jpg", description: "EE325 implementations and notes in digital signal processing.", tags: ["DSP", "MATLAB"], links: [["Code", "https://github.com/Oshadha345/DSP"]] },
  { id: 9, title: "Signals and Systems", category: "Coursework", image: "/images/projects/sigsys/signals-systems.jpg", description: "Continuous- and discrete-time signal analysis from EE257.", tags: ["Signals", "Systems"], links: [["Code", "https://github.com/Oshadha345/Signals_and_Systems"]] },
  { id: 10, title: "Load Flow Analysis", category: "Power systems", image: "/images/projects/load_flow/load.png", description: "Custom load-flow algorithms with PSSE verification for EE354.", tags: ["Power systems", "Simulation"], links: [["Code", "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Project"]] },
  { id: 11, title: "Synchronous Generator Modelling", category: "Power systems", image: "/images/projects/sync_gen/syncgen.png", description: "Dynamic simulation and transient analysis of a synchronous generator.", tags: ["Power systems", "Modelling"], links: [["Code", "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Sync%20Gen"]] },
  { id: 12, title: "Competitive Programming Journey", category: "Problem solving", image: "/images/projects/CP/logo.png", description: "Solutions and practice work from programming competitions.", tags: ["Algorithms", "C++"], links: [["Code", "https://github.com/Oshadha345/Competitive-Programming-Journey"]] },
  { id: 13, title: "Codeforces Solutions", category: "Problem solving", image: "/images/projects/codeforces/logo.jpg", description: "A repository of Codeforces problem solutions.", tags: ["Algorithms", "C++"], links: [["Code", "https://github.com/Oshadha345/Codeforces"]] },
  { id: 14, title: "6-Bar Linkage", category: "Modelling", image: "/images/projects/linkage/6bar.png", description: "A MATLAB/Simulink model of a six-bar mechanical linkage.", tags: ["Simulink", "Mechanisms"], links: [["Code", "https://github.com/Oshadha345/6-Bar-Linkage"]] },
  { id: 15, title: "Sensor Calibration Analysis", category: "Instrumentation", image: "/images/projects/finger/project.png", description: "Capacitive-sensor characterization and error analysis.", tags: ["Instrumentation", "Calibration"], links: [["Code", "https://github.com/Oshadha345/Sensor-Calibration-Analysis"]] },
  { id: 16, title: "Line-Following Robot", category: "Robotics", image: "/images/projects/line_follower/main.jpg", description: "An Arduino robot with PID control, built as a first-year group project.", tags: ["Arduino", "PID", "Robotics"], links: [] },
  { id: 18, title: "AI Agents", category: "Independent study", image: "/images/projects/aiagents/dragent.png", description: "Experiments with tool-using and autonomous software agents.", tags: ["Agents", "Tool use"], links: [["Code", "https://github.com/Oshadha345/AI-Agents"]] },
];

export const awards = [
  ["2025/26", "ICPC Sri Lanka Regional Finals", "Top 15 team finish"],
  ["2025", "MoraXtreme 10.0", "Finalist among 150 teams · Team Nocturnals · elimination rank 11"],
  ["2025", "IEEEXtreme 19.0", "Participant · Team AlgorithmAvengersF2O"],
  ["2025", "CodeArena", "3rd in selection · Top 20 of 150 finalist"],
  ["2025", "UOJ Coders 4.0", "Top 15 finalist"],
  ["2025", "HaXtreme 4.0", "5th in the Non-AI round · 8th overall after the Non-AI and AI rounds"],
  ["2025", "CodeRally", "2nd place, Beginner Tier selection · finalist"],
  ["2024", "IEEEXtreme 18.0", "Global top 900 · Sri Lanka top 100"],
  ["2024", "Coders V11", "42nd place · national competition, qualified through PreCoders V11"],
  ["2024", "PreCoders V11", "1st place team · UoP intra-university selection for Coders V11"],
  ["2023", "Coders V10", "Finalist · national competition, qualified through PreCoders V10"],
  ["2023", "PreCoders V10", "Top 25 · UoP intra-university selection for Coders V10"],
];

export const evidence = [
  { title: "ICPC Sri Lanka Regional Finals", detail: "2025/26 · finalist", file: "/evidence/icpc-finalist.pdf", preview: "/evidence/icpc-finalist-preview.jpg" },
  { title: "MoraXtreme 10.0", detail: "2025 · finalist certificate", file: "/evidence/moraxtreme-10-certificate.pdf", preview: "/evidence/moraxtreme-10-finalist-poster.jpg" },
  { title: "IEEEXtreme 19.0", detail: "2025 · participation certificate", file: "/evidence/ieeextreme-19-certificate.pdf", preview: "/evidence/ieeextreme-19-certificate-preview.jpg" },
  { title: "PreCoders and Coders V11", detail: "2024 · results certificate", file: "/evidence/precoders-coders-v11.pdf", preview: "/evidence/precoders-coders-v11-preview.jpg" },
  { title: "IEEEXtreme 18.0", detail: "2024 · participation certificate", file: "/evidence/ieeextreme-18-certificate.pdf", preview: "/evidence/ieeextreme-18-certificate-preview.jpg" },
  { title: "CodeArena", detail: "2025 · finalist certificate", file: "/evidence/codearena-finalist.pdf", preview: "/evidence/codearena-finalist-preview.jpg" },
  { title: "HaXtreme 4.0", detail: "2025 · 5th in Non-AI round, 8th overall", file: "/evidence/haxtreme-4-finalist.pdf", preview: "/evidence/haxtreme-4-finalist-preview.jpg" },
  { title: "MoraXtreme 9.0", detail: "2024 · participation certificate", file: "/evidence/moraxtreme-9-certificate.jpg", preview: "/evidence/moraxtreme-9-certificate.jpg" },
  { title: "UOJ Coders 4.0", detail: "2025 · finalist certificate", file: "/evidence/uoj-coders-4-finalist.pdf", preview: "/evidence/uoj-coders-4-finalist-preview.jpg" },
  { title: "G.C.E. Advanced Level", detail: "Official examination certificate", file: "/evidence/advanced-level-certificate.pdf", preview: "/evidence/advanced-level-certificate-preview.jpg" },
  { title: "G.C.E. Ordinary Level", detail: "Official examination certificate", file: "/evidence/ordinary-level-certificate.pdf", preview: "/evidence/ordinary-level-certificate-preview.jpg" },
];

export const writing = [
  { slug: "the-eternal-harmonic", title: "The Eternal Harmonic: A Tribute to Joseph Fourier", description: "From heat theory and Fourier analysis to modern signal processing and positional encodings.", links: [["Article PDF", "/writing/the-eternal-harmonic.pdf"], ["Full EEES Magazine", "https://drive.google.com/file/d/1JH4ulr2frmz55m02Iv3KpSgOvDOlpWyz/view?usp=sharing"]] },
  { slug: "from-apollo-to-ai", title: "From Apollo to AI: A Deep Look into State Space Models", description: "The lineage from Kalman filtering to the Mamba architecture.", links: [["Article PDF", "/writing/from-apollo-to-ai.pdf"]] },
];

export const studies = [
  ["Distance Geometry in ML", "https://github.com/Oshadha345/distance-geometry-ml"],
  ["Information Theory", "https://github.com/Oshadha345/information-theory"],
  ["Nonlinear & Multivariable Systems", "https://github.com/Oshadha345/EE539-Nonlinear-and-Multivariable-Systems"],
];

export const skills = "Python, C, C++, MATLAB, LaTeX, Altium · PyTorch, JAX, Hugging Face, Mamba/SSM, Vision Transformers, CNNs, conditional flow matching · ROS, Arduino, ESP32, NVIDIA Jetson, OpenCV · experimental design, literature review, manuscript writing, scientific figures, Origin · Git, GitHub, Linux";
export const allProjects = [...researchProjects, ...engineeringProjects, ...projectArchive];
export const getProject = (id) => allProjects.find((project) => String(project.id) === String(id));
