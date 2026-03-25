import { Theme, Venue, TimelineItem } from './types';

export const BHOPAL_THEMES: Theme[] = [
  {
    id: 'ai-ds',
    name: 'AI, Data Science & Intelligent Automation',
    icon: 'Brain',
    problems: [
      {
        id: 'BPL-AI-01',
        title: 'Predictive Maintenance for Industrial Machinery',
        description: 'Develop an AI model that predicts equipment failure using sensor data to minimize downtime in manufacturing units.'
      },
      {
        id: 'BPL-AI-02',
        title: 'Automated Legal Document Summarizer',
        description: 'Create an intelligent system that can summarize complex legal documents into plain language for common citizens.'
      }
    ]
  },
  {
    id: 'mobility',
    name: 'Smart Mobility, EVs & Logistics',
    icon: 'Car',
    problems: [
      {
        id: 'BPL-SM-01',
        title: 'Dynamic EV Charging Station Locator',
        description: 'A real-time navigation system that suggests charging stations based on battery level, traffic, and queue length.'
      },
      {
        id: 'BPL-SM-02',
        title: 'Last-Mile Delivery Optimization',
        description: 'Algorithm-driven route optimization for delivery fleets in congested urban areas to reduce carbon footprint.'
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
        title: 'Precision Farming using IoT',
        description: 'Low-cost IoT solution for soil moisture and nutrient monitoring to automate irrigation for small-scale farmers.'
      },
      {
        id: 'BPL-AG-02',
        title: 'Direct-to-Consumer Supply Chain',
        description: 'A blockchain-based platform to connect farmers directly with urban consumers, eliminating middlemen.'
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
        title: 'Hyper-local Community Emergency Response',
        description: 'A mobile app that connects volunteers with nearby emergency situations (medical, fire, etc.) before official help arrives.'
      },
      {
        id: 'BPL-APP-02',
        title: 'AI-Powered Personal Learning Assistant',
        description: 'An adaptive learning app that creates personalized study paths for students based on their strengths and weaknesses.'
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
        title: 'Phishing Detection for Senior Citizens',
        description: 'A browser extension or mobile tool that uses NLP to identify and block sophisticated phishing attempts in regional languages.'
      },
      {
        id: 'IND-CS-02',
        title: 'Blockchain-based Academic Credentialing',
        description: 'A secure system for universities to issue tamper-proof digital degrees and certificates.'
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
        title: 'Autonomous Warehouse Sorting Robot',
        description: 'Design a prototype for a low-cost robot capable of navigating and sorting packages in a dynamic warehouse environment.'
      },
      {
        id: 'IND-ROB-02',
        title: 'Drone-based Infrastructure Inspection',
        description: 'Automated drone flight paths and image analysis for detecting cracks in bridges and high-rise buildings.'
      }
    ]
  },
  {
    id: 'smart-city',
    name: 'Smart Cities, Urban Innovation & Disaster Management',
    icon: 'Building2',
    problems: [
      {
        id: 'IND-SC-01',
        title: 'Smart Waste Segregation at Source',
        description: 'AI-powered bin systems that automatically segregate dry, wet, and hazardous waste using computer vision.'
      },
      {
        id: 'IND-SC-02',
        title: 'Flood Prediction & Early Warning System',
        description: 'Using historical weather data and river levels to provide hyper-local flood warnings via SMS and sirens.'
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
        title: 'Remote Patient Monitoring for Rural Areas',
        description: 'Wearable devices that transmit vital signs via low-bandwidth networks to centralized health centers.'
      },
      {
        id: 'IND-HT-02',
        title: 'AI-based Early Cancer Detection',
        description: 'Computer vision models to assist radiologists in identifying early signs of cancer from X-rays and MRIs.'
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

