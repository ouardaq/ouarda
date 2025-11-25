export interface education{
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string[];
}

export const education: education[] = [
  {
    degree: 'Masters',
    school: 'National University of Science and Technology POLITEHNICA Bucharest , Faculty of engineering in foreign languages',
    location: 'Bucharest, Romania',
    period: 'Spetember 2022 - July 2024',
    description: [
      'Management, Innovation and technology of Collborative Systems,'
      
    ]
  },
  {
    degree: 'Professional Bachelor',
    school: 'Superior School of Tehcnology',
    location: 'Oujda, Morocco',
    period: 'Spetember 2020 - July 2021',
    description: [
      'Business Intelligence'
      
    ]
  },
   {
    degree: 'University Diploma of Technology',
    school: 'Superior School of Tehcnology',
    location: 'Oujda, Morocco',
    period: 'Spetember 2018 - July 2020',
    description: [
      'Software Developement'
      
    ]
  }
  

];
