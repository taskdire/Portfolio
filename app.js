const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {

    const projects = ref([
      {
        title: 'Autonomous Shooting Turret',
        stack: 'C++ · Arduino · PID Control · CAD',
        modelLabel: '3D MODEL PREVIEW',
        color: '#6366f1',
        color2: '#818cf8',
        cta: 'View 3D Model',
        desc: `Designed autonomous targeting system...`
      },
      {
        title: 'PID Line-Following Robot',
        stack: 'C++ · Arduino · Sensor Fusion',
        modelLabel: 'SCHEMATIC VIEW',
        color: '#6ee7b7',
        color2: '#34d399',
        cta: 'View Schematics',
        desc: `Built high-speed robot...`
      },
      {
        title: 'HAM Radio Repeater Network',
        stack: 'RF Engineering · Python · Raspberry Pi',
        modelLabel: 'RF TOPOLOGY',
        color: '#fbbf24',
        color2: '#f59e0b',
        cta: 'View Docs',
        desc: `Designed licensed repeater system...`
      }
    ]);

    const projIdx = ref(0);

    const next = () => {
      if (projIdx.value < projects.value.length - 1) projIdx.value++;
    };

    const prev = () => {
      if (projIdx.value > 0) projIdx.value--;
    };

    const goTo = (i) => projIdx.value = i;

    const marquee = ref([
      'C++','Python','Arduino','CAD','PID Control',
      'Embedded Systems','RF Engineering','Computer Vision'
    ]);

    const tags = ref([
      'Mechanical CAD','Embedded Systems','Leadership','Git','Raspberry Pi'
    ]);

    const experiences = ref([
      {
        role: 'Intern',
        org: 'SYEP',
        period: '2025',
        desc: 'Worked on drone curriculum and CAD systems.'
      }
    ]);

    const certs = ref([
      { name: 'FCC Technician License', issuer: 'FCC' },
      { name: 'Autodesk Certified', issuer: 'Autodesk' }
    ]);

    onMounted(() => {
      const spotlight = document.getElementById('spotlight');

      window.addEventListener('mousemove', (e) => {
        spotlight.style.background =
          `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px,
          rgba(99,102,241,0.08), transparent 70%)`;
      });

      document.querySelectorAll('.card').forEach((card, i) => {
        card.animate(
          [
            { opacity: 0, transform: 'translateY(28px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 500, delay: i * 80, fill: 'forwards' }
        );
      });
    });

    return {
      projects,
      projIdx,
      next,
      prev,
      goTo,
      marquee,
      tags,
      experiences,
      certs
    };
  }
}).mount('#app');