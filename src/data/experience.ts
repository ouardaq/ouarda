export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Integration Developer Intern',
    company: 'Lysi',
    location: 'In-office @ Rabat, Morocco',
    period: 'Since August 2025',
    description: [
      'Supporting the team in troubleshooting integration errors and performing data mapping tasks within the Celigo platform',
      'Developed an understanding of API-led connectivity',
      'Gained hands-on experience with integration tools and technologies',
      'Collaborated with cross-functional teams to ensure seamless data flow between systems',
      'Celigo certified Integration Developer'  
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Prefecture of Oujda Angad',
    location: 'In-office @ Oujda, Morocco',
    period: 'February 2022 - June 2022',
    description: [
      'Developped an App with OCR technology using Windev',
      'Automated administrative tasks to improve efficiency'
      
    ]
  },
  
  {
    title: 'IT Technician Intern ',
    company: 'Ouagglo',
    location: 'In-office @ Oujda, Morocco',
    period: 'Februray 2021 - January 2022',
    description: [
      'Troubleshot hardware and software issues on employee workstations.'

      
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'CHU Oujda',
    location: 'Remote @ Oujda, Morocco',
    period: 'May 2020 - July 2020',
    description: [
      'Developed a web application to manage hospital eployees using HTML, CSS, JavaScript, and Laravel.',
      'Improved data management and accessibility for hospital staff.'
      
    ]
  },
  {
    title: 'Cyber Security Intern',
    company: 'Nevo Technologies',
    location: 'In-office @ Rabat, Morocco',
    period: 'July 2019 - August 2019',
    description: [
      'Assisted in conducting vulnerability assessments and penetration testing on client systems.',
      'Gained hands-on experience with various cybersecurity tools and techniques.'
      
    ]
  },

];
