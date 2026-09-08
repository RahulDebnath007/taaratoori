export const company = {
  name: 'Taara Toori Technologies',
  location: 'KOLKATA · WB · IN',
  email: 'hello@taaratoori.example',
  tagline: 'Placeholder content — internal draft build',
}

export const rooms = [
  {
    panel: '01',
    name: 'Employees',
    path: '/employees',
    blurb: 'Time management rings, org info, and achievement logs for every member of the team.',
  },
  {
    panel: '02',
    name: 'Events',
    path: '/events',
    blurb: 'Quantum computing workshops, AI/ML labs, and internal knowledge cycles.',
  },
  {
    panel: '03',
    name: 'Products & Services',
    path: '/products',
    blurb: 'Consulting, platforms, and applied research offerings across the practice.',
  },
  {
    panel: '04',
    name: 'Samples',
    path: '/samples',
    blurb: 'Selected case studies and work samples from recent client cycles.',
  },
]

export const homeStats = [
  { value: '27', label: 'Team members' },
  { value: '112', label: 'Products shipped' },
  { value: '08', label: 'Active workshops' },
]

export const products = [
  {
    index: '01',
    name: 'Quantum Processor',
    description:
      'Next-generation quantum processing, engineered for complex computation. Our quantum processors are designed to explore problems beyond the practical limits of classical computing.',
    price: 'From ₹1,40,000 / month',
  },
  {
    index: '02',
    name: 'Quantum Computing Platform',
    description:
      'Access quantum computing through a unified, scalable platform. Develop, test, and run quantum algorithms with tools built for researchers, developers, and enterprises.',
    price: 'From ₹95,000 / month',
  },
  {
    index: '03',
    name: 'Quantum Optimization Engine',
    description:
      'Turn complex problems into optimized solutions. Our quantum optimization technology explores new approaches to logistics, scheduling, finance, and large-scale decision making.',
    price: 'From ₹40,000 / month',
  },
]

export const services = [
  {
    name: 'Quantum Readiness Audits',
    description:
      'A structured assessment of where quantum-adjacent computing can realistically move the needle in your stack today, versus in three to five years.',
    duration: '4–6 week engagement',
  },
  {
    name: 'Applied AI/ML Integration',
    description:
      'End-to-end delivery of ML features — from data pipeline to fine-tuned model to production API — for teams without in-house ML capacity.',
    duration: '8–14 week engagement',
  },
  {
    name: 'Quantum Research Suite',
    description:
      'From experimentation to discovery. A flexible environment for building, simulating, and evaluating quantum algorithms and applications.',
    duration: 'Retainer basis',
  },
  {
    name: 'Workshop & Training Delivery',
    description:
      'The same Quantum and AI/ML workshops run internally, delivered on-site or remotely for partner organizations and universities.',
    duration: 'Per-session or termly',
  },
]

export const events = [
  {
    day: '14',
    month: 'AUG 2026',
    title: 'Quantum Computing Workshop — Entanglement Foundations',
    description:
      'A hands-on session on qubit basics, superposition, and building your first circuit on a simulator. No prior quantum background required.',
    track: 'Quantum',
    level: 'Beginner',
    status: 'Registration Open',
    time: '10:00 – 13:00 IST',
    room: 'Auditorium A',
  },
  {
    day: '22',
    month: 'AUG 2026',
    title: "AI/ML Workshop — Building RAG Pipelines That Don't Hallucinate",
    description:
      'Retrieval-augmented generation, chunking strategy, and evaluation harnesses, taught through a live rebuild of an internal chatbot.',
    track: 'AI/ML',
    level: 'Intermediate',
    status: 'Registration Open',
    time: '14:00 – 17:30 IST',
    room: 'Lab 2',
  },
  {
    day: '03',
    month: 'SEP 2026',
    title: 'Quantum Workshop — Advanced Algorithms on Quantum Hardware',
    description:
      'Exploring how ancient algorithms map onto quantum gate reduction techniques. Flagship signature session.',
    track: 'Quantum',
    level: 'Signature / Advanced',
    status: 'Registration Open',
    time: '10:00 – 16:00 IST',
    room: 'Auditorium A',
  },
  {
    day: '19',
    month: 'SEP 2026',
    title: 'AI/ML Workshop — Fine-Tuning Small Models on a Single GPU',
    description:
      'A practical walkthrough of LoRA fine-tuning, dataset prep, and evaluation on modest hardware budgets.',
    track: 'AI/ML',
    level: 'Intermediate',
    status: 'Registration Open',
    time: '11:00 – 14:00 IST',
    room: 'Lab 1',
  },
  {
    day: '30',
    month: 'JUL 2026',
    title: 'Internal Cycle Review — Q3 Product Sync',
    description:
      'Cross-team walkthrough of shipped features, open blockers, and the roadmap for the next cycle.',
    track: 'Internal',
    level: null,
    status: 'Completed',
    time: '15:00 – 16:00 IST',
    room: 'Auditorium B',
  },
  {
    day: '05',
    month: 'JUL 2026',
    title: 'Quantum Workshop — Intro to Error Correction',
    description:
      "Surface codes, redundancy, and why quantum error correction is the field's hardest open problem, explained plainly.",
    track: 'Quantum',
    level: 'Beginner',
    status: 'Completed',
    time: '10:00 – 12:30 IST',
    room: 'Auditorium A',
  },
]

export const samples = [
  {
    name: 'Retail Demand Forecasting',
    tag: 'Quantum-assisted Retail',
    description:
      "Applied cyclical calendar modeling on top of a retail chain's historical sales data to improve seasonal stock forecasting accuracy.",
    metricLabel: 'Forecast Lift',
    metricValue: '+23%',
    duration: '9 wks',
  },
  {
    name: 'Insurance Document Intelligence',
    tag: 'Computer Vision Insurance',
    description:
      'Automated claims-document extraction and routing pipeline, cutting manual review time for a mid-size insurer.',
    metricLabel: 'Review Time Cut',
    metricValue: '-61%',
    duration: '12 wks',
  },
  {
    name: 'University Partnership — AI/ML Curriculum Build',
    tag: 'Education AI/ML',
    description:
      "Designed and delivered a 6-module applied machine learning curriculum with hands-on labs for a partner university's CS department.",
    metricLabel: 'Students Reached',
    metricValue: '310',
    duration: '1 term',
  },
  {
    name: 'Logistics Scheduling',
    tag: 'Quantum-inspired Logistics',
    description:
      'Piloted annealing-based route and shift scheduling for a regional logistics operator across 14 depots.',
    metricLabel: 'Route Efficiency',
    metricValue: '+17%',
    duration: '6 wks',
  },
]

// No real employee roster was supplied in the source design — these are
// placeholder entries consistent with the source file's own
// "Placeholder content — internal draft build" notice.
export const departments = ['All Departments', 'Quantum Research', 'AI/ML Engineering', 'Consulting', 'Operations']

export const employees = [
  {
    id: 'anika-basu',
    name: 'Anika Basu',
    role: 'Principal Quantum Researcher',
    department: 'Quantum Research',
    cycleProgress: 0.82,
    joined: '2021',
    achievements: [
      'Led the Entanglement Foundations workshop track',
      'Filed 2 patents on annealing-based scheduling',
    ],
  },
  {
    id: 'rohan-sengupta',
    name: 'Rohan Sengupta',
    role: 'Applied ML Engineer',
    department: 'AI/ML Engineering',
    cycleProgress: 0.64,
    joined: '2022',
    achievements: [
      'Shipped the RAG evaluation harness used internally',
      'Mentored 6 interns across two cycles',
    ],
  },
  {
    id: 'meher-chatterjee',
    name: 'Meher Chatterjee',
    role: 'Quantum Readiness Consultant',
    department: 'Consulting',
    cycleProgress: 0.47,
    joined: '2023',
    achievements: [
      'Delivered 9 readiness audits this year',
      'Built the client scoring rubric now used practice-wide',
    ],
  },
  {
    id: 'ishaan-dutta',
    name: 'Ishaan Dutta',
    role: 'Platform Engineer',
    department: 'AI/ML Engineering',
    cycleProgress: 0.9,
    joined: '2020',
    achievements: [
      'Core maintainer of the Quantum Computing Platform',
      'Reduced platform latency by 34%',
    ],
  },
  {
    id: 'priya-mukherjee',
    name: 'Priya Mukherjee',
    role: 'Operations Lead',
    department: 'Operations',
    cycleProgress: 0.71,
    joined: '2021',
    achievements: [
      'Runs the university partnership program',
      'Coordinated 14 workshops across 2026 so far',
    ],
  },
  {
    id: 'arjun-ghosh',
    name: 'Arjun Ghosh',
    role: 'Optimization Researcher',
    department: 'Quantum Research',
    cycleProgress: 0.58,
    joined: '2022',
    achievements: [
      'Designed the logistics annealing pilot',
      'Co-authored the internal optimization playbook',
    ],
  },
]
