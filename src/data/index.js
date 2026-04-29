// ============================================================
// src/data/index.js
// Single source of truth for all portfolio content.
// To update your info, edit ONLY this file.
// ============================================================

// ── Projects (used by ProjectCarousel.vue) ──────────────────
export const projects = [
  {
    title: 'Autonomous Shooting Turret',
    stack: 'C++  ·  Arduino  ·  PID Control  ·  Autodesk Inventor',
    modelLabel: '3D MODEL PREVIEW',
    color: '#6366f1',
    color2: '#818cf8',
    cta: 'View 3D Model',
    // To use a real photo: img: '/images/turret.png'
    // Place the image in the /public/images/ folder
    // this is for the buttons images not the actual image switch 
    img: '/turret.png',
    thumbs: [
      { label: 'MECH CAD', img: 'turret.png' },
      { label: 'CIRCUIT',  img: 'turret_circuit.png' },
      { label: 'DEMO',     img: 'turret_demo.mp4', video: true },
    ],
    desc: `Designed a fully autonomous targeting system using Autodesk Inventor
           for mechanical CAD and Arduino C++ for real-time servo control.
           Integrated computer-vision target acquisition with a closed-loop
          PID controller maintaining aim accuracy within ±0.5°.
           All gears, brackets, and pan-tilt mounts were custom-machined to specification. <strong>Contributors: Darren Lam</strong>`,
  },
  {
    title: 'V8 Internal Reciprocating Assembly',
    stack: 'C++  ·  Arduino  ·  Sensor Fusion  ·  CAD',
    modelLabel: 'SCHEMATIC VIEW',
    color: '#6ee7b7',
    color2: '#34d399',
    cta: 'View Schematics',
    img: null,
    thumbs: [
      { label: 'MECH CAD', img: 'v8.png' },
      { label: 'DEMO',     img: 'v8_demo.mp4', video: true },
    ],
    desc: `Engineered a high-fidelity V8 Internal Reciprocating Assembly using Autodesk Inventor to study core mechanical synchronization.
Developed a parametric 45° cylinder block housing a dynamic rotating assembly, including a precision-constrained crankshaft and connecting rod system.
Optimized internal geometry to ensure zero-interference motion and accurate piston travel through the full 360° cycle.
Focused on the technical conversion of linear reciprocating force into rotational torque as a foundational study in high-performance engine architecture.`,
  },

]

// ── Experience (used by ExperienceCard.vue) ─────────────────
export const experiences = [
  {
    role: 'Intern',
    org: 'Summer Design Institute / SYEP',
    period: 'July 2025 – August 2025',
    bullets: [
      'Spearheaded a drone aviation curriculum for the cohort.',
      'Utilized CAD for technical modeling and design iteration.',
      'Collaborated in a high-velocity team to meet complex deadlines.',
    ],
  },
  {
    role: 'Private Tutor',
    org: 'Independent / Staten Island',
    period: 'Feb 2026 – Present',
    bullets: [
      'One-on-one mathematics instruction with customized lesson plans.',
      'Targeted test preparation and problem-solving skill development.',
    ],
  },
  {
    role: 'President',
    org: 'Electrical Workshop Club',
    period: '2024 – Present',
    bullets: [
      'Leading 30+ members in electronics & robotics projects.',
      'Organized three inter-school competitions.',
      'Secured $4k in equipment funding.',
    ],
  },
  {
    role: 'Intern',
    org: 'Summer Design Institute / SYEP',
    period: 'July 2024 – August 2024',
    bullets: [
      'Hardware prototyping via precision soldering & assembly.',
      'Developed fundamental CAD skills on group projects.',
    ],
  },
]

// ── Skills (used by SkillsGrid.vue) ─────────────────────────
// Marquee is doubled in the component for seamless looping
export const marqueeSkills = [
  '⚙️ Autodesk Inventor,',
  '🧩 SolidWorks,',
  '🔌 Arduino,',
  '💻 C++,',
  '🐍 Python,',
  '🛠️ Embedded C,',
  '📡 PID Control,',
  '🔧 Servo Control,',
  '📊 Sensor Fusion,',
  '📻 HAM Radio,',
  '📐 CAD/CAM,',
  '🧪 Soldering',
]


// ── Certifications (used by CertsCard.vue) ──────────────────
export const certs = [
  {
    name: 'Amateur Radio License',
    issuer: 'FCC — Technician Class',
    type: 'radio',
    bg: 'rgba(99,102,241,0.18)',
  },
  {
    name: 'Autodesk Inventor Certified',
    issuer: 'Autodesk — Professional',
    type: 'star',
    bg: 'rgba(251,146,60,0.15)',
  },
]

// ── Personal info (used by HeroCard.vue) ────────────────────
export const personal = {
  name: 'Kitson Lau',
  title: 'Student at Staten Island Technical High School',
  status: 'Currently: Pursuing Mechanical Engineering',
  bio: 'Junior at Staten Island Technical High School aspiring to push the boundaries of Mechanical Engineering as a future R&D Engineer. I specialize in the architecture of active systems—moving beyond static models to build autonomous turret systems and high-precision prototypes. By integrating Autodesk Inventor workflows with PID control loops, I bridge the gap between complex theoretical design and functional, high-performance hardware.',
  location: 'New York, NY',
  callsign: 'KE2DWI',
  email: 'KitsonJFLau@gmail.com',
  github: 'https://github.com/taskdire',
  linkedin: 'https://www.linkedin.com/in/kitson-lau-aa2a47384/?skipRedirect=true',
  stats: [
    { val: '4+', key: 'Projects' },
    { val: '2', key: 'Internship' },
    { val: '4', key: 'Certifications' },
  ],
  focus: [],
  education: {
    school: 'Staten Island Technical High School',
    degree: 'Expected Graduation 2027',
    years: '2023 – 2027',
  },
}
