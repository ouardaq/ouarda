export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Algorithm & Research',
    skills: [
      'Algorithm Design',
      'Algorithm Development',
      'Research',
      'Machine Learning',
      'Database Systems',
     
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      'C',
      'C++',
      'Java',
      'Python',
      'SQL',
      'HTML/CSS',
      'JavaScript',
      'PHP',
      'XML'
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'ReactJS',
      'Next.js',
      'TailwindCSS',
      'jQuery',
      'Bootstrap'
      
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'OracleDB',
      'OCI',
      'Oracle Apex',
      'Linux',
      'Git/Version Control',
      'IoT',
      'LaTeX',
      'Business Intelligence',
      'Microsoft Office'
    ]
  },
  {
    category: 'Languages',
    skills: [
      'Moroccan Arabic (Native)',
      'English (C2 Native)',
      'Arabic (Native)',
      'French (Profesionnal)',
      'German (Intremediate)'
    ]
  }
];
