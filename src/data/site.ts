export type ServiceIconKey = 'plc' | 'hmi' | 'panel' | 'iot' | 'embedded';

export type IndustryIconKey =
  | 'water'
  | 'gas'
  | 'dataCenter'
  | 'acmv'
  | 'chiller'
  | 'climate'
  | 'manufacturing';

export interface Office {
  id: string;
  country: string;
  company: string;
  addressLines: string[];
  phones: string[];
  email: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: ServiceIconKey;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: IndustryIconKey;
}

export type ToolIconKey = 'cad' | 'lines' | 'panel' | 'chart' | 'plc';

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: ToolIconKey;
}

export type ProductIconKey = 'scada' | 'alert' | 'sentinel' | 'collector' | 'appstudio' | 'app';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  icon: ProductIconKey;
}

export interface NavItem {
  label: string;
  href: string;
}

export type ProjectCapability = 'design' | 'management' | 'plc';

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  capability: ProjectCapability;
  image?: string;
  imageAlt?: string;
}

export interface FooterColumn {
  title: string;
  items: string[];
}

export interface LinkItem {
  label: string;
  href: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com';

export const site = {
  name: 'Hirush Automation',
  legalName: 'Hirush Automation Pte Ltd',
  email: 'admin@hirushautomation.com',
  url: siteUrl,
  domain: 'www.hirushautomation.com',
};

export const nav: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tools', href: '#tools' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trainings', href: '#trainings' },
  { label: 'Contact', href: '#contact' },
];

export const offices: Office[] = [
  {
    id: 'singapore',
    country: 'Singapore',
    company: 'Hirush Automation Pte Ltd',
    addressLines: ['531A Upper Cross Street', '#04-95 Hong Lim Complex', 'Singapore 051531'],
    phones: ['+65 8183 0763'],
    email: 'admin@hirushautomation.com',
  },
  {
    id: 'sri-lanka',
    country: 'Sri Lanka',
    company: 'Hirush Automation (Pvt) Ltd',
    addressLines: ['247, Maruthankulam Road', 'Kovilputhukkulam, Vavuniya', 'Sri Lanka'],
    phones: ['+94 21 435 8220', '+94 76 609 9261'],
    email: 'admin@hirushautomation.com',
  },
];

export const hero = {
  heading: 'Industrial Automation & Control Solutions',
  subheading: 'PLC • HMI • SCADA • Control Panels',
  description:
    'A distinguished Electrical, Control, and Automation company with offices in Singapore and Sri Lanka. We specialize in PLC/HMI/SCADA systems, control panel design and fabrication, IoT solutions, and embedded controller development.',
  primaryCta: { label: 'Explore Services', href: '#services' } as LinkItem,
  secondaryCta: { label: 'Request Consultation', href: '#contact' } as LinkItem,
};

export const about = {
  intro: [
    'Hirush Automation Pte Ltd was established in Singapore as a distinguished Electrical, Control, and Automation Company. In addition to our presence in Singapore, Hirush Automation Pvt Ltd in Sri Lanka also contributes significantly to our success. Our expansion into Sri Lanka has been driven by the same commitment to excellence in Electrical, Control, and Automation services.',
    'The core of our business model is our proficiency in the design, implementation, testing, commissioning, and maintenance of PLC/HMI/SCADA systems and Electrical/Control panels. We specialize in delivering tailored services and have successfully executed numerous projects, solidifying our reputation as leaders in the industry.',
  ],
  capabilities: [
    'Design & engineering',
    'Implementation',
    'Testing & commissioning',
    'Maintenance & support',
  ],
};

export const mission = {
  title: 'Our Mission',
  description:
    "Our company's mission is to deliver superior quality control and automation systems, paired with exceptional customer service, by relentlessly pursuing innovation and leveraging advanced technology.",
};

export const vision = {
  title: 'Our Vision',
  description:
    'To establish ourselves as one of the leading system integrators and process control automation companies in Singapore and Sri Lanka, committed to delivering exceptional quality services that consistently exceed the expectations of our esteemed customers.',
};

export const services: Service[] = [
  {
    id: 'plc-programming',
    title: 'PLC Programming',
    shortDescription:
      'Suitable PLC hardware configuration and programming aligned precisely with your control system requirements and designated control philosophy, across Siemens, Allen-Bradley, and Mitsubishi platforms.',
    description:
      'Our expertise lies in proposing a suitable PLC hardware configuration and delivering programming services that align precisely with the control system requirements specified in the contract and the designated control philosophy. We specialize in PLC programming across various brands.',
    features: [
      'Siemens PLC Programming',
      'Allen-Bradley PLC Programming',
      'Mitsubishi PLC Programming',
      'Hardware Configuration & Philosophy',
      'Testing, Commissioning & Support',
    ],
    icon: 'plc',
  },
  {
    id: 'hmi-scada-design',
    title: 'HMI/SCADA Design',
    shortDescription:
      'SCADA software and communication configuration, plus robust, effective, and user-friendly HMI graphics across Siemens, Schneider, Allen-Bradley, and Mitsubishi systems.',
    description:
      'We offer SCADA software and communication configuration solutions in consultation with our clients, tailored to meet contractual requirements and specifications. Our engineering services extend to the development of HMI graphics characterized by their robustness, effectiveness, visual appeal, and user-friendliness — across Siemens, Schneider, Allen-Bradley, and Mitsubishi systems.',
    features: [
      'SCADA Software Configuration',
      'Communication Configuration',
      'HMI Graphics Development',
      'Alarm Management & Trending',
      'Multi-Brand Platform Support',
    ],
    icon: 'hmi',
  },
  {
    id: 'electrical-control-panel',
    title: 'Electrical & Control Panel',
    shortDescription:
      'High-quality electrical panel design and fabrication, integrated with drives, starters, PLC systems, and control components, with full drawing and documentation support.',
    description:
      'Control panel design and fabrication constitute integral components of our business offerings. We craft high-quality electrical panels, expertly integrated with drives, starters, and control systems, and carefully outfitted with PLC systems and electrical control components for precise control and monitoring. We also provide comprehensive drawing and documentation support for seamless operation and maintenance.',
    features: [
      'Control Panel Design & Fabrication',
      'Drive & Starter Integration',
      'PLC System Integration',
      'Electrical Control Components',
      'Drawing & Documentation Support',
    ],
    icon: 'panel',
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    shortDescription:
      'End-to-end IoT services that integrate with existing control systems — sensor integration, network configuration, data management, cloud services, and real-time analytics.',
    description:
      'Our IoT solutions are designed to integrate seamlessly with existing control systems, enabling enhanced data collection, real-time monitoring, and advanced analytics. We provide end-to-end IoT services — sensor integration, network configuration, data management, and cloud services — helping clients achieve greater visibility and control over their processes.',
    features: [
      'Sensor Integration',
      'Network Configuration',
      'Data Management & Cloud Services',
      'Real-Time Monitoring & Analytics',
      'Predictive Maintenance Support',
    ],
    icon: 'iot',
  },
  {
    id: 'embedded-controller-design',
    title: 'Embedded Controller Design',
    shortDescription:
      'Full-cycle embedded controller development — hardware design, firmware development, and system integration from initial concept through to final product.',
    description:
      'We specialize in the design and development of embedded controllers tailored to meet specific application requirements. Our services encompass the entire development cycle — from initial concept through to final product — including hardware design, firmware development, and system integration, delivering robust, efficient, and scalable solutions.',
    features: [
      'Hardware Design',
      'Firmware Development',
      'System Integration',
      'Microcontroller Platforms',
      'Concept to Final Product',
    ],
    icon: 'embedded',
  },
];

export const trainings: Training[] = [
  {
    id: 'industrial-electrical-engineering',
    title: 'Industrial Electrical Engineering',
    description:
      'Covering fundamental and advanced concepts in electrical engineering for industrial applications.',
    topics: [
      'Fundamental Electrical Concepts',
      'Advanced Industrial Applications',
      'Systems Operation & Safety',
    ],
  },
  {
    id: 'plc-hmi-design-programming',
    title: 'PLC/HMI Design and Programming',
    description:
      'Providing in-depth training on designing and programming PLCs and HMIs across various brands.',
    topics: ['PLC Programming Fundamentals', 'HMI Screen Design', 'Multi-Brand Platform Training'],
  },
  {
    id: 'scada-design',
    title: 'SCADA Design',
    description: 'Teaching the principles and practices of SCADA system design and implementation.',
    topics: [
      'SCADA System Architecture',
      'Implementation Practices',
      'Data Acquisition & Monitoring',
    ],
  },
  {
    id: 'embedded-system-design',
    title: 'Embedded System Design',
    description:
      'Offering hands-on experience in designing and developing embedded systems, including hardware and firmware development.',
    topics: ['Embedded Hardware Development', 'Firmware Development', 'Hands-On Project Work'],
  },
];

export const tools: Tool[] = [
  {
    id: 'autocad',
    name: 'AutoCAD',
    category: 'Design Software',
    description: 'Professional 2D and 3D CAD design for electrical panel layouts and schematics.',
    icon: 'cad',
  },
  {
    id: 'eplan-electric',
    name: 'ePlan Electric',
    category: 'Design Software',
    description:
      'Advanced electrical engineering design software for comprehensive project documentation.',
    icon: 'lines',
  },
  {
    id: 'paneldraw',
    name: 'PanelDraw',
    category: 'Design Software',
    description:
      'Specialized software for designing electrical panel layouts with component libraries.',
    icon: 'panel',
  },
  {
    id: 'pscad',
    name: 'PSCAD',
    category: 'Simulation Software',
    description: 'Power system simulation and analysis tool for electrical network studies.',
    icon: 'chart',
  },
  {
    id: 'siemens-tia-portal',
    name: 'Siemens TIA Portal',
    category: 'PLC Platform',
    description:
      'Totally Integrated Automation Portal for Siemens S7 PLC programming and configuration.',
    icon: 'plc',
  },
  {
    id: 'allen-bradley',
    name: 'Allen Bradley',
    category: 'PLC Platform',
    description:
      'Rockwell Automation Studio 5000 for ControlLogix and CompactLogix PLC programming.',
    icon: 'plc',
  },
  {
    id: 'schneider-ecostruxure',
    name: 'Schneider EcoStruxure',
    category: 'PLC Platform',
    description:
      'EcoStruxure Automation Enterprise for Schneider Modicon PLC programming and configuration.',
    icon: 'plc',
  },
];

export const products: Product[] = [
  {
    id: 'hirushcore-scada',
    name: 'HirushCore SCADA',
    tagline: 'Industrial Web-Based Monitoring & Design Platform',
    features: [
      'Web-based industrial monitoring and control',
      'HMI and dashboard design',
      'Real-time process visualization',
      'Trends, reporting & events',
      'Alarm management',
      'Centralized system management',
    ],
    icon: 'scada',
  },
  {
    id: 'hirushcore-alert',
    name: 'HirushCore Alert',
    tagline: 'Industrial Notification & Alerting System',
    features: [
      'SMS, Email & WhatsApp notifications',
      'Mobile push notifications',
      'Real-time event detection',
      'Instant alarm delivery',
      'Multi-protocol data collection',
      'Critical event escalation support',
    ],
    icon: 'alert',
  },
  {
    id: 'hirushcore-sentinel',
    name: 'HirushCore Sentinel',
    tagline: 'Industrial Web-Based Central Alarm Monitoring Platform',
    features: [
      'Centralized alarm monitoring',
      'Multi-site alarm management',
      'Alarm acknowledgment tracking',
      'Historical alarm analysis',
      'Web-based alarm dashboards',
    ],
    icon: 'sentinel',
  },
  {
    id: 'hirushcore-data-collector',
    name: 'HirushCore Data Collector',
    tagline: 'Industrial Communication Engine',
    features: [
      'Two-way industrial communication',
      'Multi-protocol device integration',
      'Real-time data acquisition',
      'Secure communication architecture',
      'Protocol-specific or multi-protocol deployment',
      'Integration with industrial applications',
    ],
    icon: 'collector',
  },
  {
    id: 'hirushcore-appstudio',
    name: 'HirushCore AppStudio',
    tagline: 'Industrial Mobile App Development Platform',
    features: [
      'Industrial mobile app development',
      'Android & iOS deployment',
      'Real-time industrial data integration',
      'Mobile alarm & notification handling',
      'Custom UI & dashboard creation',
      'Secure user authentication',
    ],
    icon: 'appstudio',
  },
  {
    id: 'hirushcore-app',
    name: 'HirushCore App',
    tagline: 'Industrial Mobile Runtime',
    features: [
      'Real-time industrial monitoring',
      'Mobile alarm notifications',
      'Remote access & control',
      'Trend & historical data viewing',
      'Mobile dashboard visualization',
      'Secure industrial connectivity',
    ],
    icon: 'app',
  },
];

export const projectReference = {
  title: 'Project Reference',
  subtitle: 'Electrical & Control — Singapore & Sri Lanka',
};

export type ProjectFilterKey = 'all' | ProjectCapability;

export const projectFilters: { key: ProjectFilterKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'design', label: 'Design & Build' },
  { key: 'management', label: 'Project Management' },
  { key: 'plc', label: 'PLC, SCADA & HMI' },
];

export const projects: Project[] = [
  {
    id: 'treated-waste-water-recovery',
    title: 'Treated Waste Water Recovery for Process Use',
    client: 'Petrochemical Corporation of Singapore Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
    image: '',
    imageAlt: 'Temporary image test',
  },
  {
    id: 'ro-di-system-stats-chippac',
    title: 'RO/DI System',
    client: 'Stats ChipPAC Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'process-cooling-water-system',
    title: 'Process Cooling Water System',
    client: 'Stats ChipPAC Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'polishing-system',
    title: 'Polishing System',
    client: 'Stats ChipPAC Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'demineralized-water-treatment-plant',
    title: 'Demineralized Water Treatment Plant',
    client: 'Keppel Sighers Engineering Singapore Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'semakau-electrical-generation-distribution',
    title: 'Upgrading of the Electrical Generation and Distribution System at Semakau Land Fill',
    client: 'National Environment Agency (NEA)',
    role: 'Project Management and Technical Support',
    capability: 'management',
  },
  {
    id: 'remote-operation-monitoring-ipu-valves',
    title: 'Remote Operation and Monitoring of IPU Valves at Reservoirs and Ponds',
    client: 'Public Utilities Board (PUB)',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'upgrading-plant-water-system-cwrp',
    title: 'Upgrading of Plant Water System at Changi Water Reclamation Plant (CWRP)',
    client: 'Public Utilities Board (PUB)',
    role: 'Project Management and Technical Support',
    capability: 'management',
  },
  {
    id: 'sodium-hypochlorite-dosing-bedok',
    title: 'Sodium Hypochlorite Dosing System at Bedok Water Works',
    client: 'Public Utilities Board (PUB)',
    role: 'Project Management and Technical Support',
    capability: 'management',
  },
  {
    id: 'pulsator-vacuum-chua-chu-kang',
    title: 'Replacement of Pulsator Vacuum System at Chua Chu Kang Water Works',
    client: 'Public Utilities Board (PUB)',
    role: 'Project Management and Technical Support',
    capability: 'management',
  },
  {
    id: 'swimming-pool-filtration-electrical',
    title: 'Upgrading of Swimming Pool Filtration System (Electrical)',
    client: 'Singapore Polytechnic',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'climate-monitoring-tengah-air-base',
    title: 'Climate Monitoring System',
    client: 'Tengah Air Base',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'fuel-injection-calibration',
    title: 'Fuel Injection Calibration System',
    client: 'Collin Aerospace',
    role: 'PLC Programming and HMI Design',
    capability: 'plc',
  },
  {
    id: 'ro-system-singapore-polytechnic',
    title: 'RO System',
    client: 'Singapore Polytechnic',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'wave-generation-sump-pump-control',
    title: 'Automated Wave Generation and Sump Pump Control System',
    client: 'Nanyang Technological University',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'ro-di-chemical-transfer',
    title: 'RO DI System and Chemical Transfer System',
    client: '2D Material Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'ro-system-800-super',
    title: 'RO System',
    client: '800 Super Waste Management Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'special-gas-filling-system',
    title: 'Special Gas Filling System',
    client: 'Air Liquide Singapore Pte Ltd',
    role: 'Design and Built',
    capability: 'design',
  },
  {
    id: 'programming-support-otv-veolia',
    title: 'Programming Support and Troubleshooting',
    client: 'OTV VEOLIA (Sri Lanka)',
    role: 'PLC Programming and SCADA/HMI Development',
    capability: 'plc',
  },
  {
    id: 'bms-system-omni-logistics',
    title: 'BMS System',
    client: 'OMNI Logistics',
    role: 'PLC Programming and SCADA Development',
    capability: 'plc',
  },
  {
    id: 'vertical-injector-ls-marine',
    title: 'Vertical Injector',
    client: 'LS Marine Solution',
    role: 'PLC Programming and SCADA Development',
    capability: 'plc',
  },
  {
    id: 'ro-system-fn-foods',
    title: 'RO System',
    client: 'F&N Foods Pte Ltd',
    role: 'PLC Programming and HMI Development',
    capability: 'plc',
  },
];

export const industries: Industry[] = [
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    description:
      'Solutions for controlling and monitoring water treatment processes, ensuring water quality and safety.',
    icon: 'water',
  },
  {
    id: 'gas-systems',
    name: 'Gas Systems',
    description:
      'Gas control systems offering precise control and safety measures for gas handling and distribution.',
    icon: 'gas',
  },
  {
    id: 'data-centers',
    name: 'Data Centers',
    description:
      'Advanced control and monitoring systems to optimize data center operations, ensuring reliability and efficiency.',
    icon: 'dataCenter',
  },
  {
    id: 'acmv',
    name: 'ACMV',
    description:
      'Climate control systems for air conditioning, mechanical ventilation, maintaining optimal conditions for comfort and productivity.',
    icon: 'acmv',
  },
  {
    id: 'chiller-systems',
    name: 'Chiller Systems',
    description:
      'Solutions for efficient cooling and temperature control essential for various industrial processes.',
    icon: 'chiller',
  },
  {
    id: 'climate-monitoring',
    name: 'Climate Monitoring',
    description:
      'Advanced climate monitoring solutions for environmental and industrial applications enabling data collection and analysis.',
    icon: 'climate',
  },
  {
    id: 'manufacturing-factories',
    name: 'Manufacturing Factories',
    description:
      'Controllers and monitoring systems that enhance manufacturing processes by ensuring precision, efficiency, and quality control.',
    icon: 'manufacturing',
  },
];

export const industriesClosing =
  "In each of these industries, our focus is on designing, implementing, and maintaining customized electronics-based controllers to meet specific operational requirements. Whether it's optimizing processes, enhancing safety, or ensuring compliance, our tailored solutions are designed to address the unique challenges and goals of our clients across diverse sectors.";

export const footer = {
  description: '',
    // 'Hirush Automation Pte Ltd provides expert electrical, control, and automation engineering solutions. We specialize in PLC/HMI/SCADA systems, control panel design and fabrication, IoT solutions, embedded controller development, and professional training. With offices in Singapore and Sri Lanka, we serve industries including water treatment, gas systems, data centers, ACMV, chiller systems, climate monitoring, and manufacturing.',
  columns: [
    {
      title: 'SERVICES',
      items: [
        'PLC Programming',
        'HMI/SCADA Design',
        'Electrical & Control Panel',
        'IoT Solutions',
        'Embedded Controller Design',
        'Training Programs',
      ],
    },
    {
      title: 'TRAINING',
      items: [
        'Industrial Electrical Engineering',
        'PLC/HMI Design & Programming',
        'SCADA Design',
        'Embedded System Design',
      ],
    },
    {
      title: 'TOOLS',
      items: [
        'AutoCAD',
        'ePlan Electric',
        'PanelDraw',
        'PSCAD',
        'Siemens TIA Portal',
        'Allen Bradley',
        'Schneider EcoStruxure',
      ],
    },
    {
      title: 'PRODUCTS',
      items: [
        'HirushCore SCADA',
        'HirushCore Alert',
        'HirushCore Sentinel',
        'HirushCore Data Collector',
        'HirushCore AppStudio',
        'HirushCore App',
      ],
    },
    {
      title: 'OFFICES',
      items: ['Singapore', 'Sri Lanka'],
    },
  ] as FooterColumn[],
};

export const seo = {
  title: 'Hirush Automation – Electrical, Control & Automation Engineering Solutions',
  description:
    'Hirush Automation Pte Ltd — Expert electrical, control, and automation engineering solutions. PLC programming, HMI/SCADA design, control panel fabrication, IoT solutions, embedded controllers, and online training. Singapore & Sri Lanka.',
  ogTitle: 'Hirush Automation – Automation Solutions',
  ogDescription:
    'Expert electrical, control, and automation engineering. PLC programming, HMI/SCADA design, control panel fabrication, IoT solutions, and embedded controllers by Hirush Automation Pte Ltd.',
  twitterTitle: 'Hirush Automation – Automation Solutions',
  twitterDescription:
    'Expert electrical, control, and automation engineering solutions by Hirush Automation Pte Ltd.',
};
