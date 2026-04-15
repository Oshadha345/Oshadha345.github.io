// =============================================================================
// PROJECTS DATA - Oshadha Samarakoon
// =============================================================================

export const projects = [
  // ---------------------------------------------------------------------------
  // FEATURED AI/ML PROJECTS
  // ---------------------------------------------------------------------------
  {
    id: 1,
    title: "SolarMamba",
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
    featured: false,
    isResearch: true,
    researchMeta: {
      label: "Publication Track",
      venue: "ECCV 2026",
      status: "Under review",
      summary: "Adaptive hierarchical fusion of vision state-space models and temporal networks for solar energy forecasting.",
    },
    category: "ai-ml",
    date: "2025-11-23",
  },

  {
    id: 2,
    title: "🧠 BraTSMamba: 3D Brain Tumor Segmentation with State Space Models",
    shortDescription: "Applying Mamba state-space models to 3D brain tumor segmentation on the BraTS dataset.",
    fullDescription: `> **System Status**: \`ONLINE\`  
> **Architecture**: \`BraTSMamba\`  
> **Target**: \`Brain Tumor Segmentation (BraTS)\`

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/) [![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/) [![MONAI](https://img.shields.io/badge/MONAI-1.3%2B-purple?style=for-the-badge&logo=monai&logoColor=white)](https://monai.io/) [![Mamba](https://img.shields.io/badge/Mamba-SSM-yellow?style=for-the-badge&logo=snake&logoColor=black)](https://github.com/state-spaces/mamba) [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](https://github.com/Oshadha345/BraTSMamba/blob/main/LICENSE) [![Code Style](https://img.shields.io/badge/Code%20Style-Black-000000?style=for-the-badge&logo=code-review&logoColor=white)](https://github.com/psf/black)

---

## 🚀 Project Highlights

BraTSMamba combines Conv3D locality with Mamba state-space sequence modeling for robust 3D tumor segmentation.

### 🏗️ Model Architecture

Architecture is the heart of this project and the key contribution:

![BraTSMamba Architecture](/images/projects/BraTSMamba/BraTSMamba.png)

### 📊 Key Metrics (BraTS 2021)

| Region | Dice Score (DSC) | HD95 (mm) |
| :--- | :---: | :---: |
| **Whole Tumor (WT)** | **0.909** | **6.70** |
| **Tumor Core (TC)** | **0.884** | **5.44** |
| **Enhancing Tumor (ET)** | **0.857** | **3.80** |
| **Mean** | **0.883** | **-** |

### 📈 Training Behavior

![Training Curves](/images/projects/BraTSMamba/training_curves.png)

### 🖼️ Prediction Quality

Ground truth vs model prediction sample:

![Error Analysis Sample](/images/projects/BraTSMamba/error_analysis_sample_0.png)

### 🧬 Dataset Snapshot

![BraTS Modalities](/images/projects/BraTSMamba/BraTS_all_modalities.png)
![Class Distribution](/images/projects/BraTSMamba/class_distribution_pie.png)

---

## 📘 Reports & Resources

- [BioMamba Project Report](https://github.com/Oshadha345/BraTSMamba/blob/main/BioMamba_Report.pdf)
- [Interactive Notebook](https://github.com/Oshadha345/BraTSMamba/blob/main/BioMamba_Notebook.ipynb)
- [Competition Guide](https://github.com/Oshadha345/BraTSMamba/blob/main/Competition%20Guide/DELEGATE%20BOOKLET%20_%20Guidelines%20and%20competition%20framework.pdf)

## 👥 Team

- Oshadha Samarakoon ([Oshadha345](https://github.com/Oshadha345))
- Dineth Perera ([Dineth14](https://github.com/Dineth14))

Built with 💻 and ☕ by the BioMamba Team for BioFusion 2026 organised by the University of Sri Jayawardhanapura.
`,
    image: "/images/projects/BraTSMamba/Logo.png",
    techStack: ["Python", "PyTorch", "Mamba", "BraTS-2021","MONAI","Deep Learning"],
    features: [
      "State-Space Models (SSM)",
      "3D Brain Tumor Segmentation",
      "Efficient Linear-Time Inference",
      "Medical Image Analysis",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/BraTSMamba",
    status: "completed",
    featured: true,
    isResearch: true,
    researchMeta: {
      label: "Research Competition",
      venue: "BioFusion 2026",
      status: "Submitted",
      summary: "Competition submission on 3D medical image segmentation with state-space models.",
    },
    category: "ai-ml",
    date: "2026-01-05",
  },
  {
    id: 3,
    title: "CV Solar Irradiance",
    shortDescription: "Look into feasibility of using Segmentation method for ASI in DL Pipeline",
     fullDescription: `🌤️ This MARC research project explores computer vision based solar irradiance forecasting from fisheye sky images, with emphasis on robust cloud segmentation for downstream GHI, DNI, and DHI prediction.

  ## 🎯 Objectives

  - Extract reliable camera metadata with OCR.
  - Segment cloud regions for physically meaningful sky features.
  - Synchronize image timestamps with PSA irradiance time series.
  - Build short-horizon forecasting models (0-30 min).

  ## 🧠 Segmentation Approach

  The project compares two complementary directions:

  1. **Classical RBR pipeline**
    - Sky masking and sun exclusion
    - Adaptive red/blue ratio thresholding
    - Morphology for noise suppression

  2. **Deep segmentation pipeline (UCloudNet/U-Net family)**
    - Residual encoder blocks
    - Multi-scale decoder with skip connections
    - Deep supervision for stable convergence

  ### 🏗️ Model Architecture

  ![UCloudNet Architecture](/images/projects/solar_irradiance_seg/ucloudnet.png)

  ### 🔄 End-to-End Pipeline

  ![UCloudNet Pipeline](/images/projects/solar_irradiance_seg/ucloundnet%20pipeline.png)

  ### ☁️ Segmentation Output (DL)

  ![Cloud Segmentation Inference](/images/projects/solar_irradiance_seg/ucloundseg_inference1.png)

  ### 🌈 RBR-Based Output (Classical)

  ![RBR Visualization](/images/projects/solar_irradiance_seg/rbr1.png)

  ## 📈 Current Progress

  - ✅ OCR metadata extraction pipeline completed
  - ✅ PSA time-series parser completed
  - 🔄 Segmentation experiments in progress (classical vs deep)
  - ⏭️ Next: synchronized master dataset + forecasting benchmark

  ## 🤝 Collaboration

  MARC (University of Peradeniya) with DLR-linked data workflow.
  `,
    image: "/images/projects/solar_irradiance_seg/logo.png",
    techStack: ["Python", "PyTorch", "Computer Vision", "Deep Learning", "NumPy"],
    features: [
      "Sky Image Analysis",
      "Irradiance Estimation",
      "Deep Learning Models",
      "Renewable Energy Applications",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/CV_Solar_Irradiance",
    status: "completed",
    featured: false,
    isResearch: true,
    researchMeta: {
      label: "Research Study",
      venue: "MARC research pipeline",
      status: "Active benchmark support",
      summary: "Computer-vision workflow supporting solar forecasting experiments and downstream benchmarking.",
    },
    category: "ai-ml",
    date: "2025-10-10",
  },
  {
    id: 4,
    title: "Omni Wheel Bot",
    shortDescription: "Jetson Xavier-AGX-based omni-directional robot for ENGEX-2025 Engineering Exhibition, featuring advanced navigation and control systems.",
    fullDescription: `An omni-directional robot built on the NVIDIA Jetson Xavier platform, designed for advanced navigation and control in the ENGEX-2025 Engineering Exhibition.

## Omni Wheel Bot: Advanced Robotics for ENGEX-2025

### Images of the Robot
![Robot Image 1](/images/projects/Omni%20Wheel%20Bot/omni.jpg)
![Robot Image 2](/images/projects/Omni%20Wheel%20Bot/omni2.jpg)

### Robot Video
![Robot Video](/images/projects/Omni%20Wheel%20Bot/omni.mp4)
`,

    image: "/images/projects/Omni Wheel Bot/logo.jpg",
    techStack: ["ROS", "Jetson-Xavier", "Mamba", "Control Systems", "Robotics"],
    features: [
      "Omni-Directional Mobility",
      "Real-Time Navigation"],
    demoUrl: null,
    repoUrl: null,
    status: "completed",
    featured: true,
    category: "robotics",
    date: "2025-11-23",
  },

  {
    id: 5,
    title: "Server Sentinel C",
    shortDescription: "Mission-critical environmental controller for data centers with ASHRAE-compliant safety protocols.",
    fullDescription: `A sophisticated C-based simulation of an environmental controller designed for data center infrastructure, implementing industry-standard safety protocols.

Technical Highlights:
  - State-driven finite state machine design
  - Escalating alert system with multiple severity levels
  - Emergency shutdown protocol based on ASHRAE thermal guidelines
  - Real-time temperature and humidity monitoring simulation
  - Comprehensive Makefile build system

This project demonstrates embedded systems design principles and safety-critical software development, essential for infrastructure management.`,
    image: "/images/projects/server_sentinel/server.png",
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
    id: 6,
    title: "JAX Deep Learning",
    shortDescription: "Learning materials and experiments with Google's JAX framework for high-performance ML.",
    fullDescription: `A comprehensive exploration of JAX - Google's high-performance numerical computing library that combines NumPy's interface with XLA compilation and automatic differentiation.

Contents Include:
  - JAX fundamentals and NumPy compatibility
  - Automatic differentiation (grad, jacobian, hessian)
  - JIT compilation for performance optimization
  - Vectorization with vmap
  - Device parallelism (pmap)
  - Neural network building blocks

JAX is increasingly important for ML research due to its speed and functional programming paradigm.`,
    image: "/images/projects/JAX/JAX.jpg",
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
    featured: false,
    category: "ai-ml",
    date: "2025-12-11",
  },
  
  // ---------------------------------------------------------------------------
  // COMPUTER VISION & DSP PROJECTS
  // ---------------------------------------------------------------------------
  {
    id: 7,
    title: "OpenCV Self Study",
    shortDescription: "Comprehensive notebooks covering computer vision fundamentals using OpenCV library.",
    fullDescription: `A self-directed learning project covering the fundamentals and advanced topics of computer vision using OpenCV.

Topics Covered:
  - Image processing fundamentals (filtering, transformations)
  - Edge detection and contour analysis
  - Feature detection (SIFT, ORB, SURF)
  - Object detection and tracking
  - Image segmentation techniques
  - Camera calibration and 3D vision

This repository serves as both a learning resource and reference for CV implementations.`,
    image: "/images/projects/opencv/logo.png",
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
    id: 8,
    title: "Digital Signal Processing (DSP)",
    shortDescription: "EE325 coursework covering digital signal processing theory and implementations.",
    fullDescription: `Comprehensive course materials and implementations for Digital Signal Processing (EE325) at University of Peradeniya.

Topics Include:
  - Discrete-time signals and systems
  - Z-transform analysis
  - DFT and FFT algorithms
  - FIR and IIR filter design
  - Spectral analysis techniques
  - Digital filter implementations

All concepts are implemented in Jupyter notebooks with visualizations and practical examples.`,
    image: "/images/projects/DSP/dsp.jpg",
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
    id: 9,
    title: "Signals and Systems",
    shortDescription: "EE257 coursework on continuous and discrete-time signals and systems analysis.",
    fullDescription: `Course materials for Signals and Systems (EE257) covering foundational concepts in signal processing.

Topics:
  - Continuous-time signals and systems
  - Fourier series and Fourier transform
  - Laplace transform
  - Discrete-time signal analysis
  - System characterization and stability

Foundation for advanced DSP and control systems courses.`,
    image: "/images/projects/sigsys/signals-systems.jpg",
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
    id: 10,
    title: "Load Flow Analysis",
    shortDescription: "EE354 Load Flow Analysis Project - Custom algorithms and PSSE verification",
    fullDescription: `Comprehensive Load Flow Analysis project for power systems, completed as part of EE354 Electric Power at University of Peradeniya.

### Task 1: Program Development
Implemented custom load flow algorithms from first principles:
 - **Gauss-Seidel Method** - iterative voltage calculation with convergence analysis
 - **Newton-Raphson Method** - quadratic convergence for faster solutions
 - Y-bus matrix formation and impedance network modeling
 -  Mathematical formulation with detailed flowcharts and line-by-line code documentation

### Task 2: Verification and Comparison
Validated custom implementations against industry-standard PSSE software:
 - Bus voltage magnitude and angle comparison across methodologies
 - Convergence characteristics and iteration analysis
 - Custom program vs PSSE recorded outputs with deviation analysis
 - Comparative plots demonstrating algorithm performance

### Task 3: Voltage Sensitivity Analysis
Systematic evaluation of grid response to load variations:
 - Voltage results under multiple load variation scenarios
 - Variance and standard deviation analysis across buses
 - Sensitivity metrics for grid stability assessment
 - Impact evaluation on renewable energy integration

**Project Report:** https://github.com/Oshadha345/Electrical-Power/blob/main/EE354-Electric%20Power/Project/Report/main.pdf

Includes detailed Jupyter notebooks with mathematical derivations, algorithm implementations, visualizations, and comparative analysis plots.`,
    image: "/images/projects/load_flow/load.png",
    techStack: ["Python", "PSSE" , "Power Systems", "Numerical Methods"],
    features: [
      "Gauss-Seidel Algorithm",
      "Newton-Raphson Method",
      "Y-Bus Matrix Formation",
      "Convergence Analysis",
      "Voltage Sensitivity Study",
      "PSSE Verification",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Project",
    status: "completed",
    featured: false,
    category: "power-systems",
    date: "2026-03-10",
  },

  {
    id: 11,
    title: "Synchronous Generator Modeling",
    shortDescription: "EE354 Synchronous Generator Modeling - Dynamic simulation and transient analysis",
    fullDescription: `Comprehensive Synchronous Generator Modeling project for power systems, completed as part of EE354 Power Engineering at University of Peradeniya.

### Project Overview
Built progressive MATLAB Simulink models exploring synchronous generator behavior under realistic operating conditions, from single-machine response to grid synchronization dynamics.

### Exercise 1: Single Machine Analysis
- Base model: 555 MVA, 24 kV, 60 Hz synchronous generator with AVR and governor
- Load variation response showing active power-frequency coupling and reactive power-voltage relationships
- Demonstrated how inertia, governor droop, and exciter control work together

### Exercise 2: Two Generators in Parallel
- Extended model with dual synchronous machines synchronized through a breaker
- Analyzed electromechanical transients during parallel synchronization
- Key findings: incoming machine frequency affects power transfer direction and synchronizing torque magnitude
- Showed convergence to common frequency and shared steady-state power

### Exercise 3: Generator Connected to Infinite Bus
- Replaced finite generator with stiff three-phase voltage source
- Demonstrated fundamental difference between finite-source and grid synchronization
- Revealed how infinite bus locks voltage and frequency, concentrating transients on incoming machine
- Contrasted cooperative multi-machine dynamics with constrained grid-connected operation

### Technical Highlights
- Dynamic simulation of synchronous machine with transient/subtransient parameters
- AVR and governor controller modeling and tuning
- Rotor angle swing analysis and power-angle relationship validation
- Frequency stability and voltage regulation assessment
- Comparison of parallel vs. grid-connected synchronization behavior

**Key Learning:** The project bridged theory (fundamental equations) with practical simulation, showing how power system components interact dynamically under normal and transient conditions.`,
    image: "/images/projects/sync_gen/syncgen.png",
    techStack: ["MATLAB", "Simulink", "Power Systems", "Control Systems", "Dynamic Simulation"],
    features: [
      "Single/Multi-Machine Dynamics",
      "AVR & Governor Control",
      "Synchronization Analysis",
      "Power-Angle Relationships",
      "Transient Stability",
      "Infinite Bus Modeling",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Electrical-Power/tree/main/EE354-Electric%20Power/Sync%20Gen",
    status: "completed",
    featured: false,
    category: "power-systems",
    date: "2026-03-15",
  },
  
  // ---------------------------------------------------------------------------
  // COMPETITIVE PROGRAMMING
  // ---------------------------------------------------------------------------
  {
    id: 12,
    title: "Competitive Programming Journey",
    shortDescription: "Solutions and practice problems from various competitive programming platforms.",
    fullDescription: `A comprehensive collection of competitive programming solutions showcasing algorithmic problem-solving skills developed over 3 years of competition.

Platforms & Competitions:
  - Codeforces contests
  - IEEEXtreme
  - Coders V10, V11
  - MoraXtreme
  - ReidXtreme
  - Pre-Coders (ACES)

This repository tracks my growth as a competitive programmer and serves as a reference for common algorithmic patterns.`,
    image: "/images/projects/CP/logo.png",
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
    featured: true,
    category: "competitive-programming",
    date: "2025-08-17",
  },
  {
    id: 13,
    title: "Codeforces Solutions",
    shortDescription: "My solutions to Codeforces competitive programming problems.",
    fullDescription: `Collection of solutions to various Codeforces problems, organized by difficulty and topic.

Includes:
 - Division 2 contest problems
 - Educational round solutions
 - Topic-wise categorization
 - Multiple language implementations`,
    image: "/images/projects/codeforces/logo.jpg",
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
    id: 14,
    title: "6-Bar Linkage Mechanism",
    shortDescription: "MATLAB Simulink model for simulating and analyzing a 6-bar mechanical linkage system.",
    fullDescription: `A mechanical engineering project using MATLAB Simulink to model and simulate a 6-bar linkage mechanism.

Project Features:
- Kinematic analysis of multi-bar linkage
- Position, velocity, and acceleration computation
- Simulink block diagram modeling
- Animation and visualization
- Path tracing and workspace analysis

Demonstrates the intersection of mechanical design and computational simulation.`,
    image: "/images/projects/linkage/6bar.png",
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
    id: 15,
    title: "Sensor Calibration Analysis",
    shortDescription: "Capacitive sensor characterization and comprehensive error analysis toolkit.",
    fullDescription: `A detailed analysis toolkit for capacitive sensor calibration, including statistical error analysis and characterization methods.

Features:
 - Sensor response characterization
 - Calibration curve fitting
 - Error propagation analysis
 - Uncertainty quantification
 - Statistical validation methods

**Project Report** - https://github.com/Oshadha345/Sensor-Calibration-Analysis/blob/main/Project%20Report/Group%2018%20EE%20251%20-%20Project%20Report.pdf

Essential for precision instrumentation and measurement systems. Based on EE254 Electronic Instrumentation coursework.`,
    image: "/images/projects/finger/project.png",
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
    id: 16,
    title: "Line Following Robot",
    shortDescription: "Arduino-based line following robot with PID control - GP118 First Year Project.",
    fullDescription: `Line Following Robot built for the GP118 course at University of Peradeniya.

A journey of teamwork, learning, and resilience. Despite a circuit malfunctioning at the competition, the lessons were priceless!

![Line Following Robot in action](/images/projects/line_follower/robo.jpg)

Technical Details:
 - Arduino microcontroller
 - IR sensors for line detection
 - DC motors with L298N motor driver
 - PID control algorithm implementation
 - Power supply management

Team Members: Oshadha Samarakoon, Themiya Wijekoon, Kaweesha Ratnayake, Nanduni Rathnayake, Umesha Samaranayaka, Tharindu Weraharage, Sunath Ruwantha
![Team Photo](/images/projects/line_follower/team.jpg)

Demonstrated at "Let My Country Awaken 2024" exhibition, University of Peradeniya.`,
    image: "/images/projects/line_follower/main.jpg",
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

  // EE254 
{
  id: 17,
  title: "Simon Says 🤖🔊",
  slug: "simon-says-audio-classification-esp32-matlab",
  shortDescription:
    "Interactive Simon Says game using real-time audio classification on ESP32 hardware with MATLAB signal processing.",
  fullDescription: `
Interactive Simon Says game using **real-time audio classification** on **ESP32 hardware** with **MATLAB signal processing**.

### Overview
This **completed EE254 – Digital Instrumentation** group project recreates Simon Says using **sound-based input** (snap, clap, knock) to reproduce LED sequences shown on ESP32 hardware. The system combines feature extraction with a hybrid classification pipeline to deliver accurate, low-latency sound recognition in real time.

### How the Game Works
- Watch the LED sequence on the ESP32 hardware.
- Listen to audio feedback confirming each LED.
- Repeat the sequence using **snap, clap, and knock** sounds.
- Progress through **6 levels** to win.

### Technical Highlights
- **Feature extraction:** zero-crossing rate, energy analysis, spectrogram features, spectral centroid/spread.
- **Hybrid classifier:** impulse duration filtering + energy-based snap detection + centroid-based clap/knock separation.
- **Real-time performance:** **<100ms** classification latency, **>90%** overall accuracy.

### Hardware Architecture
- ESP32 DevKit V1 (main controller)
- MAX4466 microphone module
- PAM8403 amplifier (audio feedback)
- LEDs for sequence display
- 3.7V LiPo battery + UPS

### Software Components
- **MATLAB GUI** game app with real-time visualization, scoring, progressive levels, serial communication.
- Console version for testing.
- ESP32 firmware for LED control and win animations.

### Tools / Stack
- MATLAB (Signal Processing Toolbox)
- Arduino IDE / ESP32 firmware
- Audio analysis tools (Praat, Sonic Visualizer)

### Achievements
- Real-time audio classification
- Robust ESP32 ↔ MATLAB integration
- Comprehensive testing pipeline
- Professional documentation

### Figures 


*MATLAB GUI game interface*
![MATLAB GUI game interface](/images/projects/Simon_Says/GUI.jpg)  

*Hardware enclosure / game box*
![Hardware enclosure / game box](/images/projects/Simon_Says/Game_box.jpg)  


*Internal hardware layout*
![Internal hardware layout](/images/projects/Simon_Says/Game_Box_Inside_hardware.jpg)  


*Spectral centroid separation visualization*
![Spectral centroid separation visualization](/images/projects/Simon_Says/centroid.jpg)  

*Time/Frequency domain analysis*
![Time/Frequency domain analysis](/images/projects/Simon_Says/F_and_T_domain.jpg)  

*Model accuracy results*
![Model accuracy results](/images/projects/Simon_Says/accuracy_of_model.jpg)  

*Impulse duration analysis*
![Impulse duration analysis](/images/projects/Simon_Says/impulse_duration_snap_sample.jpg) 
![Impulse duration analysis](/images/projects/Simon_Says/impulse_duration_clap_sample.jpg)
![Impulse duration analysis](/images/projects/Simon_Says/impulse_duration_knock_sample.jpg) 




### Links
- **GitHub repo:** https://github.com/kaweesha2002/SVAIS
- **Project page:** https://sites.google.com/view/symon-says/home
`
,
  image: "/images/projects/Simon_Says/Logo.png",
  techStack: [
    "MATLAB",
    "Signal Processing Toolbox",
    "ESP32",
    "Arduino IDE",
    "MAX4466",
    "PAM8403",
    "Praat",
    "Sonic Visualizer"
  ],
  features: [
    "Real-time audio classification",
    "Hybrid snap/clap/knock classifier",
    "ESP32 + MATLAB serial integration",
    "6-level interactive gameplay",
    "Low-latency inference (<100ms)"
  ],
  demoUrl: "https://sites.google.com/view/symon-says/home",
  repoUrl: "https://github.com/kaweesha2002/SVAIS",
  status: "completed",
  featured: true,
  date: "2026-02-18"
},

  
  // ---------------------------------------------------------------------------
  // AI AGENTS & OTHER
  // ---------------------------------------------------------------------------
  {
    id: 18,
    title: "AI Agents",
    shortDescription: "Implementations and experiments with autonomous AI agents and tool-using systems.",
    fullDescription: `Exploration of modern AI agent architectures including LLM-based autonomous systems.

Focus Areas:
 - Agent design patterns
 - Tool use and function calling
 - Multi-step reasoning
 - Memory and state management
 - Task decomposition strategies

Reflects the growing importance of agentic AI in real-world applications.`,
    image: "/images/projects/aiagents/dragent.png",
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
    id: 19,
    title: "Image Encoders",
    shortDescription: "Understanding different Vision Encoders.",
    fullDescription: `Exploring  Vision models using CNN, Transformer, and Mamba architecture for efficient image processing.Specially focus on trending SSM architecture and the application of Mamba state-space models to computer vision tasks.

Features:
- Vision backbone using SSM architecture
- Efficient processing of image sequences
- Comparison with Vision Transformers
- Custom implementations and experiments

*Research Plan*
![Research Plan](/images/projects/image_encoder/Vcoder.png)`
,
    image: "/images/projects/image_encoder/logo.png",
    techStack: ["Python", "PyTorch","ResNet","ViT","Swin T","Mamba", "Computer Vision"],
    features: [
      "ResNet","ConvNeXt",
      "ViT","DiET","Swin Transformer",
      "Vision SSM",
      "Efficient Inference",
      "Image Classification",
      "Feature Extraction",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/Oshadha345/Image-Encoders/",
    status: "in-progress",
    featured: false,
    category: "ai-ml",
    date: "2026-04-14",
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
