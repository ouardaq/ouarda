export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Software Development Methodologies',
    skills: [
      'Agile (Scrum & Kanban)',
      'Jira',
      'Trello',
      'UML'
     
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      'C',
      'C++',
      'Java',
      'Python',
      'SQL (MySQL)',
      'HTML/CSS',
      'JavaScript',
      'PHP',
      'TypeScript'
      
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
      
      'RESTful APIs',
      'Postman',
      
      'Celigo Integrator.io',
      'Linux',
      'Git/Version Control',
      'IoT',
      'LaTeX',
      'Power BI',
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
