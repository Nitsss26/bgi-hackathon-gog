import { Theme, Venue, TimelineItem } from './types';

export const BHOPAL_THEMES: Theme[] = [
  {
    id: 'ai-ds',
    name: 'AI, Data Science & Intelligent Automation',
    icon: 'Brain',
    problems: [
      {
        id: 'BPL-AI-01',
        title: 'AI-Based Smart Waste Management System',
        description: ''
      },
      {
        id: 'BPL-AI-02',
        title: 'AI System for Fake News Detection',
        description: ''
      }
    ]
  },
  {
    id: 'smart-city',
    name: 'Smart Cities, Urban Innovation & Disaster Management',
    icon: 'Building2',
    problems: [
      {
        id: 'BPL-SC-01',
        title: 'Smart Traffic Monitoring System, Route Management',
        description: ''
      },
      {
        id: 'BPL-SC-02',
        title: 'AI System for Real-Time Car Recognition at Fixed Points Using Camera Video Feeds Addresses Critical Gaps in Traffic Monitoring',
        description: ''
      }
    ]
  },
  {
    id: 'agri',
    name: 'Agriculture, FoodTech & Rural Innovation',
    icon: 'Sprout',
    problems: [
      {
        id: 'BPL-AG-01',
        title: 'AgriConnect App - Social Media App for Farmers',
        description: ''
      },
      {
        id: 'BPL-AG-02',
        title: 'Pest Detection Software',
        description: ''
      }
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile & Next-Gen App Innovation',
    icon: 'Smartphone',
    problems: [
      {
        id: 'BPL-APP-01',
        title: 'AI-Driven Marketing & GEO (Generative Engine Optimization) Focus Area (Tentative): Citation Tracking, LLM Visibility, Brand Sentiment',
        description: ''
      },
      {
        id: 'BPL-APP-02',
        title: 'Sustainable App Energy Drain Application',
        description: ''
      }
    ]
  }
];

export const INDORE_THEMES: Theme[] = [
  {
    id: 'cyber',
    name: 'Cybersecurity, Blockchain & Digital Trust',
    icon: 'Shield',
    problems: [
      {
        id: 'IND-CS-01',
        title: 'Digitalization of Academic Degrees Using Blockchain Technology',
        description: ''
      },
      {
        id: 'IND-CS-02',
        title: 'Blockchain-Based Registry to Make Land Records Tamper-Proof',
        description: ''
      }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics, Drones & Industry 5.0',
    icon: 'Cpu',
    problems: [
      {
        id: 'IND-ROB-01',
        title: 'Emergency Health Monitoring Wearable',
        description: ''
      },
      {
        id: 'IND-ROB-02',
        title: 'Developing Remote-Controlled Robotic Soccer Bots with a Simple Mini Soccer Court',
        description: ''
      }
    ]
  },
  {
    id: 'smart-city-indore',
    name: 'Smart Cities, Urban Innovation & Disaster Management',
    icon: 'Building2',
    problems: [
      {
        id: 'IND-SC-01',
        title: 'Intelligent Green-Corridor System for Emergency Vehicles',
        description: ''
      },
      {
        id: 'IND-SC-02',
        title: 'Intelligent "Safe-Route" Navigator for Women & Vulnerable Groups',
        description: ''
      }
    ]
  },
  {
    id: 'health',
    name: 'HealthTech, BioTech & Digital Healthcare',
    icon: 'Stethoscope',
    problems: [
      {
        id: 'IND-HT-01',
        title: 'Emergency Health Monitoring Wearable',
        description: ''
      },
      {
        id: 'IND-HT-02',
        title: 'AI-Based Early Health Risk Detection System',
        description: ''
      }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  { activity: 'Problem Statement Release', date: '27 March 2026', status: 'upcoming' },
  { activity: 'Registration & Idea Submission', date: '27 March – 25 April 2026', status: 'upcoming' },
  { activity: 'Q&A / Webinars', date: '6, 13, 20 April 2026', status: 'upcoming' },
  { activity: 'Screening Process', date: '26 – 30 April 2026', status: 'upcoming' },
  { activity: 'Result Declaration', date: '30 April 2026', status: 'upcoming' },
  { activity: 'Hackathon (Bhopal)', date: '13–14 May 2026', status: 'upcoming' },
  { activity: 'Hackathon (Indore)', date: '15–16 May 2026', status: 'upcoming' },
  { activity: 'Prize Distribution (Bhopal)', date: '14 May 2026', status: 'upcoming' },
  { activity: 'Prize Distribution (Indore)', date: '16 May 2026', status: 'upcoming' }
];

export const VENUES: Venue[] = [
  {
    city: 'Bhopal',
    dates: '13–14 May 2026',
    address: 'Bansal Group of Institutes (BGI), Bhopal. Kokta, Anand Nagar, Raisen Road, Bhopal – 462021 (M.P.)',
    themes: BHOPAL_THEMES,
    connectivity: [
      { type: 'Railway', detail: '12–15 km from Bhopal Railway Station' },
      { type: 'Railway', detail: '10–12 km from Habibganj (Rani Kamlapati) Railway Station' },
      { type: 'Airport', detail: '20 km from Raja Bhoj Airport' },
      { type: 'Bus', detail: '8–10 km from ISBT Bhopal' },
      { type: 'Transport', detail: 'Well connected via public and private transport (Cabs, Autos, Buses)' }
    ]
  },
  {
    city: 'Indore',
    dates: '15–16 May 2026',
    address: 'Sushila Devi Bansal College (SDBC), Umaria, A.B. Road, Near Rau, Indore – 453331 (M.P.)',
    themes: INDORE_THEMES,
    connectivity: [
      { type: 'Location', detail: 'Located on A.B. Road near Rau' },
      { type: 'Railway', detail: '15–18 km from Indore Railway Station' },
      { type: 'Airport', detail: '12–15 km from Devi Ahilya Bai Holkar Airport' },
      { type: 'Bus', detail: '10–12 km from Sarwate Bus Stand / Gangwal Bus Stand' },
      { type: 'Transport', detail: 'Well connected via public and private transport (Cabs, Autos, Buses)' }
    ]
  }
];

export const BGI_INSTITUTIONS = [
  "Bansal Institute of Science & Technology (BIST), Bhopal",
  "Bansal Institute of Research & Technology (BIRT), Bhopal",
  "Bansal Institute of Research, Technology & Science (BIRTS), Bhopal",
  "Bansal College of Pharmacy, Bhopal",
  "Bansal College of Nursing, Bhopal",
  "Bansal College of Engineering, Mandideep",
  "Sushila Devi Bansal College of Technology, Indore",
  "Sushila Devi Bansal College of Engineering, Indore"
];

export const JUDGING_CRITERIA = [
  { name: "Innovation & Creativity", weight: "20%" },
  { name: "Problem Understanding & Relevance", weight: "15%" },
  { name: "Technical Implementation", weight: "25%" },
  { name: "Impact & Scalability", weight: "15%" },
  { name: "Design & User Experience", weight: "10%" },
  { name: "Presentation & Communication", weight: "10%" },
  { name: "Completeness & Prototype", weight: "5%" }
];

export const ADDITIONAL_BENEFITS = [
  "Winner Certificates: Official Certificate of Excellence cum Participation",
  "Participation Certificates: For all contributors to Vision 2047 initiative",
  "Industry Exposure & Networking with experts",
  "Product Development Support for best ideas",
  "Internship & Placement Opportunities",
  "Letter of Recommendation (LoR) for outstanding participants",
  "Hands-on Experience in solving real-world problems",
  "Skill Enhancement in technical & analytical areas",
  "Startup & Incubation Support for promising ideas",
  "Portfolio Building with practical project experience"
];

