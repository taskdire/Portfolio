const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const RAW = [
            '⚙️ Autodesk Inventor', 
            '💻 C++', 
            '🐍 Python', 
            '🔌 Arduino', 
            '📡 PID Loops', 
            '🔧 Servo Control', 
            '📐 Systems Engineering'
        ];
        const marqueeSkills = ref([...RAW, ...RAW]);

        const tagCloud = ref([
            'Mechanical CAD', 'Embedded C', 'RF Engineering', 
            'Algebra II Tutoring', '3D Modeling', 'Git/GitHub', 'LaTeX'
        ]);

const experiences = ref([
    { 
        role: 'Academic Tutor', 
        org: 'Freelance / SITHS Peer', 
        period: '2025 – Present', 
        desc: 'Providing instruction in Algebra II and language studies, creating structured materials for student success.' 
    },
    { 
        role: 'Intern', 
        org: '[Company/Organization Name]', 
        period: '[Date Range]', 
        desc: '[Brief description of your internship responsibilities and achievements.]' 
    },
        { 
        role: 'Intern', 
        org: '[Company/Organization Name]', 
        period: '[Date Range]', 
        desc: '[Brief description of your internship responsibilities and achievements.]' 
    },
        { 
        role: 'Intern', 
        org: '[Company/Organization Name]', 
        period: '[Date Range]', 
        desc: '[Brief description of your internship responsibilities and achievements.]' 
    },
    { 
        role: 'President', 
        org: 'Electrical Workshop Club', 
        period: '2024 – Present', 
        desc: 'Leading members in hands-on electronics & robotics projects. Focused on system integration and technical mentorship.' 
    }
]);

        const certs = ref([
            { name: 'Amateur Radio License', issuer: 'FCC — Technician Class', type: 'radio', bg: 'rgba(99,102,241,0.18)' },
            { name: 'Autodesk Inventor Certified', issuer: 'Autodesk Professional', type: 'star', bg: 'rgba(251,146,60,0.15)' }
        ]);

        const projects = ref([
            {
                title: 'Autonomous Shooting Turret',
                meta: 'Autodesk Inventor · C++ · PID Control',
                desc: 'Precision-scaled turret designed in <strong>Inventor</strong>. Features a closed-loop <strong>PID controller</strong> and hardware integration for real-time target tracking.',
                btn: 'View CAD'
            },
            {
                title: 'Moon Landing Diorama',
                meta: 'APUSH · Physical Fabrication',
                desc: 'Historical modeling project for AP US History, integrating accurate symbols and artifacts with high-fidelity craftsmanship.',
                btn: 'View Project'
            },
            {
                title: 'WSITHS Geochron',
                meta: 'Lead Presenter · Systems Design',
                desc: 'Project lead for a technical time-tracking system, bridging electrical design and public presentation.',
                btn: 'View Details'
            }
        ]);

        const currentProject = ref(0);
        const prevProject = () => { if (currentProject.value > 0) currentProject.value--; };
        const nextProject = () => { if (currentProject.value < projects.value.length - 1) currentProject.value++; };
        const goToProject = (i) => { currentProject.value = i; };

        onMounted(() => {
            // Spotlight logic
            const spotlight = document.getElementById('spotlight');
            window.addEventListener('mousemove', (e) => {
                spotlight.style.background = `radial-gradient(680px circle at ${e.clientX}px ${e.clientY}px,rgba(99,102,241,0.075) 0%,rgba(99,102,241,0.02) 32%,transparent 68%)`;
            }, { passive: true });

            // Entrance animations
            document.querySelectorAll('.card').forEach((card, i) => {
                card.animate(
                    [{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'translateY(0)' }],
                    { duration: 600, delay: 60 + i * 95, easing: 'cubic-bezier(0.22,1,0.36,1)', fill: 'forwards' }
                );
            });
        });

        return { marqueeSkills, tagCloud, experiences, certs, projects, currentProject, prevProject, nextProject, goToProject };
    }
}).mount('#app');