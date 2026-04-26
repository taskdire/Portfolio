const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    /* ── Marquee skills (duplicated for seamless loop) ── */
    const RAW = [
      '⚙️ Autodesk Inventor', '💻 C++', '🐍 Python',
      '🔌 Arduino', '📡 PID Loops', '🔧 Servo Control', '👁️ Computer Vision',
    ];
    const marqueeSkills = ref([...RAW, ...RAW]);

    const tagCloud = ref([
      'Mechanical CAD', 'Real-Time Systems', 'Embedded C',
      'HAM Radio', 'Leadership', 'Git / GitHub', 'SolidWorks', 'LaTeX',
    ]);

    const experiences = ref([
      {
        role: 'President',
        org: 'Electrical Workshop Club',
        period: '2024 – Present',
        desc: 'Leading 30+ members in hands-on electronics & robotics projects. Organized three inter-school competitions and secured $4k in equipment funding.',
      },
      {
        role: 'Manager',
        org: "Girls' Volleyball Team",
        period: '2023 – Present',
        desc: 'Coordinating logistics, stats tracking, and team communications for a 14-player varsity roster across a 22-game season.',
      },
    ]);

    const certs = ref([
      { name: 'Amateur Radio License',      issuer: 'FCC — Technician Class',  type: 'radio', bg: 'rgba(99,102,241,0.18)' },
      { name: 'Autodesk Inventor Certified', issuer: 'Autodesk — Professional', type: 'star',  bg: 'rgba(251,146,60,0.15)' },
    ]);

    /* ── Project Carousel ── */
    const projects = ref([
      {
        title: 'Autonomous Shooting Turret',
        meta: 'Mechanical Design · C++ · Arduino · PID Control',
        desc: 'Designed a fully autonomous targeting system using <strong>Autodesk Inventor</strong> for mechanical CAD and <strong>Arduino C++</strong> for real-time servo control. Integrated computer-vision target acquisition with a closed-loop <strong>PID controller</strong> maintaining aim accuracy within ±0.5°. All gears, brackets, and pan-tilt mounts were custom-machined to specification.',
        btn: 'View 3D Model',
        btnIcon: 'download',
      },
      {
        title: 'HAM Radio Mesh Network',
        meta: 'RF Engineering · Python · Networking',
        desc: 'Built a <strong>multi-node mesh network</strong> using amateur radio transceivers and Raspberry Pi nodes. Wrote a <strong>Python</strong> routing daemon implementing a custom OLSR-inspired protocol for automatic topology discovery and packet forwarding across a 3-node test grid covering 1.2 km.',
        btn: 'View Report',
        btnIcon: 'download',
      },
      {
        title: 'CNC Gear Cutter Fixture',
        meta: 'Mechanical CAD · SolidWorks · Machining',
        desc: 'Designed and fabricated a precision fixture for cutting custom involute spur gears on a Bridgeport mill. Used <strong>SolidWorks</strong> for parametric modeling with full GD&T tolerancing. Achieved gear backlash under <strong>0.003"</strong> across five prototype iterations.',
        btn: 'View CAD',
        btnIcon: 'download',
      },
    ]);

    const currentProject = ref(0);

    const prevProject = () => {
      if (currentProject.value > 0) currentProject.value--;
    };
    const nextProject = () => {
      if (currentProject.value < projects.value.length - 1) currentProject.value++;
    };
    const goToProject = (i) => { currentProject.value = i; };

    /* ── Spotlight + card entrance ── */
    onMounted(() => {
      const spotlight = document.getElementById('spotlight');
      window.addEventListener('mousemove', (e) => {
        spotlight.style.background =
          `radial-gradient(680px circle at ${e.clientX}px ${e.clientY}px,` +
          `rgba(99,102,241,0.075) 0%, rgba(99,102,241,0.026) 32%, transparent 68%)`;
      }, { passive: true });

      document.querySelectorAll('.card').forEach((card, i) => {
        card.animate(
          [
            { opacity: 0, transform: 'translateY(30px)' },
            { opacity: 1, transform: 'translateY(0px)'  },
          ],
          {
            duration: 600,
            delay:    60 + i * 95,
            easing:   'cubic-bezier(0.22, 1, 0.36, 1)',
            fill:     'forwards',
          }
        );
      });
    });

    return {
      marqueeSkills, tagCloud, experiences, certs,
      projects, currentProject, prevProject, nextProject, goToProject,
    };
  },
}).mount('#app');