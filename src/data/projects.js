// =============================================================================
// PROJECTS DATA - Oshadha Samarakoon
// =============================================================================

export const projects = [
  // ---------------------------------------------------------------------------
  // FEATURED AI/ML PROJECTS
  // ---------------------------------------------------------------------------
  {
    id: 1,
    title: "Mamba-Irradiance",
    shortDescription: "Solar irradiance prediction using state-space Mamba architecture for efficient sequence modeling.",
    fullDescription: `A cutting-edge deep learning project applying the Mamba state-space model architecture to predict solar irradiance levels.

This project is part of my research at MARC (Multidisciplinary AI Research Center), University of Peradeniya.

Key Highlights:
• Implements Mamba architecture for time-series forecasting
• Efficient linear-time sequence modeling (vs quadratic Transformers)
• Applications in renewable energy forecasting
• Python-based implementation with modern ML stack

This project demonstrates the application of state-of-the-art sequence models to real-world energy prediction problems, crucial for solar power grid integration and management.`,
    image: "/images/projects/mamba-irradiance.jpg",
    techStack: ["Python", "PyTorch", "Mamba", "Time-Series", "Deep Learning"],
    features: [
      "State-Space Models (SSM)",
      "Solar Energy Forecasting",
      "Efficient Linear-Time Inference",
      "Renewable Energy AI",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Mamba-Irradiance",
    status: "in-progress",
    featured: true,
    category: "ai-ml",
    date: "2025-11-23",
  },
  {
    id: 2,
    title: "CV Solar Irradiance",
    shortDescription: "Computer vision system for estimating solar irradiance from sky images using deep learning.",
    fullDescription: `An innovative computer vision project that uses sky imagery to estimate solar irradiance levels, bridging the gap between visual data and renewable energy metrics.

Part of ongoing research at MARC, University of Peradeniya.

Project Features:
• Image-based irradiance estimation
• Deep learning models for sky analysis
• Cloud cover and sun position detection
• Integration with weather prediction systems
• Comprehensive Jupyter notebook documentation

This approach enables low-cost solar monitoring using standard cameras, making solar energy forecasting more accessible.`,
    image: "/images/projects/cv-solar.jpg",
    techStack: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "NumPy"],
    features: [
      "Sky Image Analysis",
      "Irradiance Estimation",
      "Deep Learning Models",
      "Renewable Energy Applications",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/CV_Solar_Irradiance",
    status: "in-progress",
    featured: true,
    category: "ai-ml",
    date: "2025-10-10",
  },
  {
    id: 3,
    title: "Server Sentinel C",
    shortDescription: "Mission-critical environmental controller for data centers with ASHRAE-compliant safety protocols.",
    fullDescription: `A sophisticated C-based simulation of an environmental controller designed for data center infrastructure, implementing industry-standard safety protocols.

Technical Highlights:
• State-driven finite state machine design
• Escalating alert system with multiple severity levels
• Emergency shutdown protocol based on ASHRAE thermal guidelines
• Real-time temperature and humidity monitoring simulation
• Comprehensive Makefile build system

This project demonstrates embedded systems design principles and safety-critical software development, essential for infrastructure management.`,
    image: "/images/projects/server-sentinel.jpg",
    techStack: ["C", "Makefile", "State Machines", "Embedded Systems", "ASHRAE Standards"],
    features: [
      "State-Driven FSM Design",
      "ASHRAE Compliance",
      "Emergency Protocols",
      "Alert Escalation System",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/server-sentinel-c",
    status: "completed",
    featured: true,
    category: "embedded",
    date: "2025-07-26",
  },
  {
    id: 4,
    title: "JAX Deep Learning",
    shortDescription: "Learning materials and experiments with Google's JAX framework for high-performance ML.",
    fullDescription: `A comprehensive exploration of JAX - Google's high-performance numerical computing library that combines NumPy's interface with XLA compilation and automatic differentiation.

Contents Include:
• JAX fundamentals and NumPy compatibility
• Automatic differentiation (grad, jacobian, hessian)
• JIT compilation for performance optimization
• Vectorization with vmap
• Device parallelism (pmap)
• Neural network building blocks

JAX is increasingly important for ML research due to its speed and functional programming paradigm.`,
    image: "/images/projects/jax.jpg",
    techStack: ["Python", "JAX", "NumPy", "XLA", "Deep Learning"],
    features: [
      "Auto-Differentiation",
      "JIT Compilation",
      "GPU Acceleration",
      "Functional ML Programming",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/JAX",
    status: "in-progress",
    featured: true,
    category: "ai-ml",
    date: "2025-12-11",
  },
  
  // ---------------------------------------------------------------------------
  // COMPUTER VISION & DSP PROJECTS
  // ---------------------------------------------------------------------------
  {
    id: 5,
    title: "OpenCV Self Study",
    shortDescription: "Comprehensive notebooks covering computer vision fundamentals using OpenCV library.",
    fullDescription: `A self-directed learning project covering the fundamentals and advanced topics of computer vision using OpenCV.

Topics Covered:
• Image processing fundamentals (filtering, transformations)
• Edge detection and contour analysis
• Feature detection (SIFT, ORB, SURF)
• Object detection and tracking
• Image segmentation techniques
• Camera calibration and 3D vision

This repository serves as both a learning resource and reference for CV implementations.`,
    image: "/images/projects/opencv.jpg",
    techStack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    features: [
      "Image Processing",
      "Feature Detection",
      "Object Tracking",
      "3D Vision",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Open-CV",
    status: "completed",
    featured: false,
    category: "computer-vision",
    date: "2025-05-04",
  },
  {
    id: 6,
    title: "Digital Signal Processing (DSP)",
    shortDescription: "EE325 coursework covering digital signal processing theory and implementations.",
    fullDescription: `Comprehensive course materials and implementations for Digital Signal Processing (EE325) at University of Peradeniya.

Topics Include:
• Discrete-time signals and systems
• Z-transform analysis
• DFT and FFT algorithms
• FIR and IIR filter design
• Spectral analysis techniques
• Digital filter implementations

All concepts are implemented in Jupyter notebooks with visualizations and practical examples.`,
    image: "/images/projects/dsp.jpg",
    techStack: ["Python", "NumPy", "SciPy", "MATLAB", "Matplotlib"],
    features: [
      "Filter Design",
      "FFT Analysis",
      "Z-Transform",
      "Spectral Methods",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/DSP",
    status: "in-progress",
    featured: false,
    category: "dsp",
    date: "2025-12-11",
  },
  {
    id: 7,
    title: "Signals and Systems",
    shortDescription: "EE257 coursework on continuous and discrete-time signals and systems analysis.",
    fullDescription: `Course materials for Signals and Systems (EE257) covering foundational concepts in signal processing.

Topics:
• Continuous-time signals and systems
• Fourier series and Fourier transform
• Laplace transform
• Discrete-time signal analysis
• System characterization and stability

Foundation for advanced DSP and control systems courses.`,
    image: "/images/projects/signals.jpg",
    techStack: ["Python", "MATLAB", "NumPy", "Signal Processing"],
    features: [
      "Fourier Analysis",
      "Laplace Transform",
      "System Stability",
      "Signal Analysis",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Signals_and_Systems",
    status: "completed",
    featured: false,
    category: "dsp",
    date: "2025-03-15",
  },
  
  // ---------------------------------------------------------------------------
  // POWER & ENERGY SYSTEMS
  // ---------------------------------------------------------------------------
  {
    id: 8,
    title: "Power and Energy Systems",
    shortDescription: "Comprehensive notes, simulations, and mini-projects for mastering power systems engineering.",
    fullDescription: `A professional-depth exploration of Power and Energy Systems, going beyond university coursework.

Topics Covered:
• Power system fundamentals
• Load flow analysis
• Fault analysis and protection
• Power electronics simulations
• Renewable energy integration
• Grid stability and control

Includes detailed Jupyter notebooks with simulations and visualizations.`,
    image: "/images/projects/power.jpg",
    techStack: ["Python", "MATLAB", "Simulink", "Power Systems"],
    features: [
      "Load Flow Analysis",
      "Fault Studies",
      "Grid Simulations",
      "Renewable Integration",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Power-and-Energy-Systems",
    status: "in-progress",
    featured: false,
    category: "power-systems",
    date: "2025-05-10",
  },
  
  // ---------------------------------------------------------------------------
  // COMPETITIVE PROGRAMMING
  // ---------------------------------------------------------------------------
  {
    id: 9,
    title: "Competitive Programming Journey",
    shortDescription: "Solutions and practice problems from various competitive programming platforms.",
    fullDescription: `A comprehensive collection of competitive programming solutions showcasing algorithmic problem-solving skills developed over 3 years of competition.

Platforms & Competitions:
• Codeforces contests
• IEEEXtreme
• Coders V10, V11
• MoraXtreme
• ReidXtreme
• Pre-Coders (ACES)

This repository tracks my growth as a competitive programmer and serves as a reference for common algorithmic patterns.`,
    image: "/images/projects/competitive.jpg",
    techStack: ["C++", "Python", "Algorithms", "Data Structures"],
    features: [
      "Algorithm Solutions",
      "Data Structures",
      "Contest Practice",
      "Multi-Language",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Competitive-Programming-Journey",
    status: "in-progress",
    featured: false,
    category: "competitive-programming",
    date: "2025-08-17",
  },
  {
    id: 10,
    title: "Codeforces Solutions",
    shortDescription: "My solutions to Codeforces competitive programming problems.",
    fullDescription: `Collection of solutions to various Codeforces problems, organized by difficulty and topic.

Includes:
• Division 2 contest problems
• Educational round solutions
• Topic-wise categorization
• Multiple language implementations`,
    image: "/images/projects/codeforces.jpg",
    techStack: ["C++", "Python", "Algorithms"],
    features: [
      "Contest Solutions",
      "Problem Categories",
      "Optimized Code",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Codeforces",
    status: "in-progress",
    featured: false,
    category: "competitive-programming",
    date: "2025-06-20",
  },
  
  // ---------------------------------------------------------------------------
  // MECHANICAL & INSTRUMENTATION
  // ---------------------------------------------------------------------------
  {
    id: 11,
    title: "6-Bar Linkage Mechanism",
    shortDescription: "MATLAB Simulink model for simulating and analyzing a 6-bar mechanical linkage system.",
    fullDescription: `A mechanical engineering project using MATLAB Simulink to model and simulate a 6-bar linkage mechanism.

Project Features:
• Kinematic analysis of multi-bar linkage
• Position, velocity, and acceleration computation
• Simulink block diagram modeling
• Animation and visualization
• Path tracing and workspace analysis

Demonstrates the intersection of mechanical design and computational simulation.`,
    image: "/images/projects/linkage.jpg",
    techStack: ["MATLAB", "Simulink", "Mechanical Design", "Kinematics"],
    features: [
      "Kinematic Analysis",
      "Simulink Modeling",
      "Motion Simulation",
      "Workspace Analysis",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/6-Bar-Linkage",
    status: "completed",
    featured: false,
    category: "mechanical",
    date: "2025-10-30",
  },
  {
    id: 12,
    title: "Sensor Calibration Analysis",
    shortDescription: "Capacitive sensor characterization and comprehensive error analysis toolkit.",
    fullDescription: `A detailed analysis toolkit for capacitive sensor calibration, including statistical error analysis and characterization methods.

Features:
• Sensor response characterization
• Calibration curve fitting
• Error propagation analysis
• Uncertainty quantification
• Statistical validation methods

Essential for precision instrumentation and measurement systems. Based on EE254 Electronic Instrumentation coursework.`,
    image: "/images/projects/sensor.jpg",
    techStack: ["Python", "NumPy", "Statistics", "MATLAB"],
    features: [
      "Calibration Curves",
      "Error Analysis",
      "Statistical Methods",
      "Sensor Characterization",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Sensor-Calibration-Analysis",
    status: "completed",
    featured: false,
    category: "instrumentation",
    date: "2025-04-15",
  },
  
  // ---------------------------------------------------------------------------
  // ACADEMIC PROJECTS
  // ---------------------------------------------------------------------------
  {
    id: 13,
    title: "Line Following Robot",
    shortDescription: "Arduino-based line following robot with PID control - GP118 First Year Project.",
    fullDescription: `Line Following Robot built for the GP118 course at University of Peradeniya.

A journey of teamwork, learning, and resilience. Despite a circuit malfunctioning at the competition, the lessons were priceless!

Technical Details:
• Arduino microcontroller
• IR sensors for line detection
• DC motors with L298N motor driver
• PID control algorithm implementation
• Power supply management

Team Members: Oshadha Samarakoon, Themiya Wijekoon, Kaweesha Ratnayake, Nanduni Rathnayake, Umesha Samaranayaka, Tharindu Weraharage, Sunath Ruwantha

Demonstrated at "Let My Country Awaken 2024" exhibition, University of Peradeniya.`,
    image: "/images/projects/line-robot.jpg",
    techStack: ["Arduino", "C++", "PID Control", "Electronics"],
    features: [
      "PID Control Algorithm",
      "IR Sensor Array",
      "Motor Control",
      "Embedded Systems",
    ],
    demoUrl: null,
    repoUrl: null,
    status: "completed",
    featured: false,
    category: "robotics",
    date: "2024-06-01",
  },
  
  // ---------------------------------------------------------------------------
  // AI AGENTS & OTHER
  // ---------------------------------------------------------------------------
  {
    id: 14,
    title: "AI Agents",
    shortDescription: "Implementations and experiments with autonomous AI agents and tool-using systems.",
    fullDescription: `Exploration of modern AI agent architectures including LLM-based autonomous systems.

Focus Areas:
• Agent design patterns
• Tool use and function calling
• Multi-step reasoning
• Memory and state management
• Task decomposition strategies

Reflects the growing importance of agentic AI in real-world applications.`,
    image: "/images/projects/agents.jpg",
    techStack: ["Python", "LangChain", "OpenAI", "LLMs"],
    features: [
      "Autonomous Agents",
      "Tool Integration",
      "Multi-Step Reasoning",
      "Task Planning",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/AI-Agents",
    status: "in-progress",
    featured: false,
    category: "ai-ml",
    date: "2025-10-18",
  },
  {
    id: 15,
    title: "MambaVision V2",
    shortDescription: "Vision models using Mamba architecture for efficient image processing.",
    fullDescription: `Exploring the application of Mamba state-space models to computer vision tasks.

Features:
• Vision backbone using SSM architecture
• Efficient processing of image sequences
• Comparison with Vision Transformers
• Custom implementations and experiments`,
    image: "/images/projects/mambavision.jpg",
    techStack: ["Python", "PyTorch", "Mamba", "Computer Vision"],
    features: [
      "Vision SSM",
      "Efficient Inference",
      "Image Classification",
      "Feature Extraction",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/mambaVision_V2",
    status: "in-progress",
    featured: false,
    category: "ai-ml",
    date: "2025-09-15",
  },
]

// =============================================================================
// PROJECT CATEGORIES
// =============================================================================

export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: 'LayoutGrid' },
  { id: 'ai-ml', label: 'AI/ML', icon: 'Brain' },
  { id: 'computer-vision', label: 'Computer Vision', icon: 'Eye' },
  { id: 'dsp', label: 'Signal Processing', icon: 'Activity' },
  { id: 'power-systems', label: 'Power Systems', icon: 'Zap' },
  { id: 'embedded', label: 'Embedded Systems', icon: 'Cpu' },
  { id: 'robotics', label: 'Robotics', icon: 'Bot' },
  { id: 'competitive-programming', label: 'Competitive Programming', icon: 'Code' },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export const getFeaturedProjects = () => projects.filter(p => p.featured)

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

export const getProjectById = (id) => projects.find(p => p.id === parseInt(id))

export const getAllTechStack = () => {
  const techSet = new Set()
  projects.forEach(p => p.techStack.forEach(t => techSet.add(t)))
  return Array.from(techSet).sort()
}
