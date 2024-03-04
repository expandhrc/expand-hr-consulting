import { FaEnvelope, FaInstagram, FaFacebook, FaSnapchat, FaLinkedin } from 'react-icons/fa';

export interface Service {
  heading: string;
  paragraphs: string[];
}

export interface FAQs {
  question: string;
  answer: string;
}

// NAVIGATION
export const NAV_LINKS = [
  { href: '#home', key: 'home', label: 'Home' },
  { href: '#services', key: 'services', label: 'Services' },
  { href: '#approach', key: 'approach', label: 'Our Approach' },
  { href: '#team', key: 'team', label: 'Team' },
  { href: '#contact', key: 'contact', label: 'Contact Us' },
  { href: '#faq', key: 'faq', label: 'FAQs' },
];

//  SERVICES
export const servicesData = [
  {
    heading: "Talent Acquisition and Recruitment:",
    paragraphs: [
      "Attract top talent with our comprehensive recruitment services.",
      "Services include job posting, candidate sourcing, and recruitment process outsourcing."
    ]
  },
  {
    heading: "Workforce Planning:",
    paragraphs: [
      "Classify and each unit's activities and evaluate gaps and excess in terms of FTEs.",
      "Provide a detailed scientific model showing excess and gaps of employees in different business units of the organization."
    ]
  },
  {
    heading: "Organizational Development:",
    paragraphs: [
      "Enhance organizational efficiency through strategic initiatives.",
      "Services cover employee training, change management, and leadership development.",
    ],
  },
  {
    heading: "Competency Framework:",
    paragraphs: [
      "Study the core business of the organization and propose suitable competencies.",
      "Services cover Competencies dictionary and competencies matrix with allocation to positions.",
    ],
  },
  {
    heading: "Business Model Re-engineering:",
    paragraphs: [
      "Assess currently operative business model and propose enhancements and upgrades.",
      "Services cover policies, procedures and processes rewriting and knowledge transfer to HR team.",
    ],
  },
  {
    heading: "HR Consulting:",
    paragraphs: [
      "Get expert guidance on HR strategy, compliance, and performance management.",
      "Tailored services include HR strategy development and policy consulting, and complete performance evaluation methodology.",
    ],
  },
  {
    heading: "Employee Engagement:",
    paragraphs: [
      "Foster a positive work environment with our employee engagement programs.",
      "Offerings include surveys, recognition programs, and team-building initiatives.",
    ],
  },
  {
    heading: "Succession Planning:",
    paragraphs: [
      "Develop and implement effective succession plans for key roles.",
      "Ensure a smooth transition of leadership within your organization.",
    ],
  },
  {
    heading: "Talent Management:",
    paragraphs: [
      "Optimize your workforce through comprehensive talent management solutions.",
      "Services cover performance appraisal, career development, and talent retention strategies.",
    ],
  },
  {
    heading: "HR Technology Solutions:",
    paragraphs: [
      "Streamline HR processes with cutting-edge technology solutions.",
      "Implement applicant tracking systems, HRIS, and automation of workflows.",
    ],
  },
  {
    heading: "HR Compliance and Regulations:",
    paragraphs: [
      "Stay compliant with ever-changing HR laws and regulations.",
      "Services cover compliance audits, policy reviews, and training on legal requirements.",
    ],
  },
  {
    heading: "Customized Workshops and Training:",
    paragraphs: [
      "Enhance skills and knowledge within your workforce with our customized workshops.",
      "Offerings range from leadership workshops to diversity and inclusion training.",
    ],
  },
  {
    heading: "Startup HR Solutions:",
    paragraphs: [
      "Specialized support for startups navigating HR challenges during growth phases.",
      "Services include scalable HR solutions, recruitment for startups, and HR strategy.",
    ],
  },
]

// FAQs
export const faqData = [
  {
    question: "What services does Expand HR Consulting offer?",
    answer:
      "Expand HR Consulting offers a range of HR consulting services, including talent acquisition, organizational development, strategic HR planning, and customized solutions tailored to your business needs.",
  },
  {
    question: "How can Expand HR Consulting help with recruitment?",
    answer:
      "Expand HR Consulting specializes in designing and implementing effective recruitment strategies, leveraging innovative approaches, technology, and industry expertise to attract and secure top-tier talent for your organization.",
  },
  {
    question: "What industries does Expand HR Consulting serve?",
    answer:
      `Expand HR Consulting has experience serving a diverse range of industries, including but
      not limited to technology, manufacturing, healthcare, finance, and
      professional services.`,
  },
  {
    question: "How does your HR consulting process work?",
    answer:
      `Our Expand HR Consulting begins with a thorough assessment of your needs. We then develop
      tailored solutions, implement strategic initiatives, and provide
      ongoing support to ensure the success of your HR goals.`,
  },
  {
    question: "Can Expand HR Consulting assist with employee training and development?",
    answer:
      `Absolutely. We offer customized training and development
      programs to enhance the skills of your workforce, fostering
      professional growth and contributing to overall organizational
      success.`,
  },
  {
    question: "What sets Expand HR Consulting apart from other HR consulting firms?",
    answer:
      `Expand HR Consulting stands out for its personalized approach, industry-specific
      expertise, and a commitment to delivering measurable results. We
      prioritize building long-term partnerships and understanding the
      unique needs of each client.`,
  },
  {
    question: "How can I contact Expand HR Consulting for services?",
    answer:
      `You can reach out to Expand HR Consulting through our Contact Page, where you'll find our contact details, a
      contact form, and information on scheduling a consultation.`,
  },
  {
    question: "Is Expand HR Consulting experienced in handling HR challenges for startups?",
    answer:
      `Yes, we have a proven track record of assisting startups with
      their HR challenges. Our flexible and scalable solutions are
      designed to support organizations at every stage of growth.`,
  },
  {
    question: "Can Expand HR Consulting help with HR compliance and regulations?",
    answer:
      `Absolutely. We stay updated on HR regulations and compliance
      requirements to ensure your organization is well-informed and in
      adherence to all relevant laws and standards.`,
  },
  {
    question: "What types of assessments does Expand HR Consulting offer for recruitment or career management purposes?",
    answer:
      `Expand HR Consulting provides a range of assessments, including skills assessments,
      behavioral assessments, and cultural fit assessments, tailored to
      your specific hiring or career management needs.`,
  }
];

// SOCIAL MEDIA
export const contactMethods = [
  { platform: 'E-mail', username: 'info@hrexpandplus.com', icon: FaEnvelope },
  { platform: 'Instagram', username: 'HRexpandplus', icon: FaInstagram },
  { platform: 'Facebook', username: 'HRexpandplus', icon: FaFacebook },
  // { platform: 'Snapchat', username: 'HRexpandplus', icon: <FaSnapchat /> },
  // { platform: 'X', username: 'HRexpandplus', icon: <YourIconComponent /> },
  // { platform: 'Linkedin', username: 'HRexpandplus', icon: <FaLinkedin /> },
]

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
