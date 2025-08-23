import Dexie, { type EntityTable } from 'dexie';

// Consider end dates before the start date as 'In Progress'
// (required since dexie cannot index null or undefined )

interface Skill {
  name: string;
  experienceLevel: string[];
  category: string[]; // their names
}

interface SkillCategory {
  name: string;
  subCategories: string[]; // their names
}

interface Certificate {
  organization: string[]; // their names
  name: string;
  images: string[];
  skills: string[]; // their names
  links: string[]; // their urls
  code: string;
  description: string;
}

interface Project {
  name: string;
  skills: string[]; // their names
  startDate: Date;
  endDate: Date;
  description: string;
  links: string[]; // their urls
  relatedActivities: number[]; // their ids
  relatedProjects: string[]; // their names
}

interface Link {
  url: string;
  type: string; // their name
}

interface LinkType {
  name: string;
}

interface Role {
  id: number;
  organization: string[]; // their names
  name: string;
  type: string;
  category: string[]; // their names
  startDate: Date;
  endDate: Date;
  skills: string[]; // their names
  modules: string[]; // their codes
  locations: string[];
  description: string;
  links: string[]; // their urls
  relatedActivities: number[]; // their ids
}

interface RoleCategory {
  name: string;
  skills: string[]; // their names
}

interface Organization {
  name: string;
  roles: number[]; // their ids
  locations: string[];
  links: string[]; // their urls
}

interface Module {
  organization: string[]; // their names
  name: string;
  code: string;
  grade: string;
  year: string;
}


const db = new Dexie('Database') as Dexie & {
  // typing
  skills: EntityTable<Skill, 'name'>;
  skillCategories: EntityTable<SkillCategory, 'name'>;
  certificates: EntityTable<Certificate, 'name'>;
  projects: EntityTable<Project, 'name'>;
  links: EntityTable<Link, 'url'>;
  linkTypes: EntityTable<LinkType, 'name'>;
  roles: EntityTable<Role, 'id'>;
  roleCategories: EntityTable<RoleCategory, 'name'>;
  organizations: EntityTable<Organization, 'name'>;
  modules: EntityTable<Module, 'code'>;
};

// Schema declaration:
db.version(1).stores({
  skills: 'name, *category, *experienceLevel',
  skillCategories: 'name, *subCategories',
  certificates: 'name, *organization, *skills, code',
  projects: 'name, *skills, startDate, endDate, *relatedActivities, *relatedProjects',
  links: 'url, type',
  linkTypes: 'name',
  roles: 'id, name, *organization, type, *category, startDate, endDate, *skills, *locations, *relatedActivities',
  roleCategories: 'name, *skills',
  organizations: 'name, *roles, *locations',
  modules: 'code, name, *organization, grade, year'
});

await db.skillCategories.bulkPut([
  { name: 'Spoken Languages', subCategories: ['Romance languages (Latin Languages)'] },
  { name: 'Romance languages (Latin Languages)', subCategories: [] },
  {
    name: "Languages", subCategories: ['Programming Languages',
      'Scripting Languages', 'Style Sheet Languages', 'Markup Languages',
      'Query Languages', 'Data Definition Languages', 'Front-End Languages',
      'Back-End Languages', 'High-Level Languages', 'Low-Level Languages',
      'Modelling Languages']
  },
  {
    name: "Programming Languages", subCategories: [
      'Functional Programming Languages', 'Object-Oriented Programming Languages',
      'Procedural Programming Languages', 'Logic Programming Languages',
      'Assembly Languages']
  },
  { name: 'Scripting Languages', subCategories: [] },
  { name: 'Style Sheet Languages', subCategories: [] },
  { name: 'Markup Languages', subCategories: [] },
  { name: 'Query Languages', subCategories: [] },
  { name: 'Data Definition Languages', subCategories: [] },
  { name: 'Front-End Languages', subCategories: [] },
  { name: 'Back-End Languages', subCategories: [] },
  { name: 'High-Level Languages', subCategories: [] },
  { name: 'Low-Level Languages', subCategories: [] },
  { name: 'Modelling Languages', subCategories: [] },
  { name: 'Functional Programming Languages', subCategories: [] },
  { name: 'Object-Oriented Programming Languages', subCategories: [] },
  { name: 'Procedural Programming Languages', subCategories: [] },
  { name: 'Logic Programming Languages', subCategories: [] },
  { name: 'Assembly Languages', subCategories: [] },
  {
    name: 'Hard Skills', subCategories: ['Languages', 'IDEs', 'Version Control',
      'Office Suites', 'Adobe Suite', 'Graphics', 'Operating Systems',
      'Data Science Tools', 'Communication Tools']
  },
  { name: 'IDEs', subCategories: [] },
  { name: 'Version Control', subCategories: [] },
  { name: 'Office Suites', subCategories: [] },
  { name: 'Adobe Suite', subCategories: [] },
  { name: 'Graphics', subCategories: [] },
  { name: 'Operating Systems', subCategories: [] },
  { name: 'Data Science Tools', subCategories: [] },
  { name: 'Communication Tools', subCategories: [] },
  {
    name: 'Soft Skills', subCategories: ['Spoken Languages',
      'Communication Skills', 'Teamwork Skills', 'Problem-Solving Skills',
      'Leadership Skills', 'Work Ethic Skills', 'Creative Skills']
  },
  { name: 'Communication Skills', subCategories: [] },
  { name: 'Teamwork Skills', subCategories: [] },
  { name: 'Problem-Solving Skills', subCategories: [] },
  { name: 'Leadership Skills', subCategories: [] },
  { name: 'Work Ethic Skills', subCategories: [] },
  { name: 'Creative Skills', subCategories: [] },
]);


await db.skills.bulkPut([
  { name: "Python", category: [], experienceLevel: [] },
  { name: "JavaScript", category: [], experienceLevel: [] },
  { name: "TypeScript", category: [], experienceLevel: [] },
  { name: "Java", category: [], experienceLevel: [] },
  { name: "C#", category: [], experienceLevel: [] },
  { name: "XAML", category: [], experienceLevel: [] },
  { name: ".NET", category: [], experienceLevel: [] },
  { name: "Visual Studio", category: [], experienceLevel: [] },
  { name: "WPF", category: [], experienceLevel: [] },
  { name: "C", category: [], experienceLevel: [] },
  { name: "Vim", category: [], experienceLevel: [] },
  { name: "Eclipse", category: [], experienceLevel: [] },
  { name: "Maven", category: [], experienceLevel: [] },
  { name: "JUnit", category: [], experienceLevel: [] },
  { name: "JavaFX", category: [], experienceLevel: [] },
  { name: "SPIM", category: [], experienceLevel: [] },
  { name: "MIPS", category: [], experienceLevel: [] },
  { name: "LMC", category: [], experienceLevel: [] },
  { name: "Kotlin", category: [], experienceLevel: [] },
  { name: "Android Studio", category: [], experienceLevel: [] },
  { name: "OpenCV", category: [], experienceLevel: [] },
  { name: "SQL", category: [], experienceLevel: [] },
  { name: "PostgreSQL", category: [], experienceLevel: [] },
  { name: "UML", category: [], experienceLevel: [] },
  { name: "Visual Studio Code", category: [], experienceLevel: [] },
  { name: "XML", category: [], experienceLevel: [] },
  { name: "Git", category: [], experienceLevel: [] },
  { name: "GitHub", category: [], experienceLevel: [] },
  { name: "Markdown", category: [], experienceLevel: [] },
  { name: "Terminal", category: [], experienceLevel: [] },
  { name: "PowerShell", category: [], experienceLevel: [] },
  { name: "Batch", category: [], experienceLevel: [] },
  { name: "Docker", category: [], experienceLevel: [] },
  { name: "JSON", category: [], experienceLevel: [] },
  { name: "Node.js", category: [], experienceLevel: [] },
  { name: "React", category: [], experienceLevel: [] },
  { name: "Electron", category: [], experienceLevel: [] },
  { name: "HTML5", category: [], experienceLevel: [] },
  { name: "CSS3", category: [], experienceLevel: [] },
  { name: "Sass", category: [], experienceLevel: [] },
  { name: "Jupyter", category: [], experienceLevel: [] },
  { name: "LibreOffice", category: [], experienceLevel: [] },
  { name: "Microsoft Office", category: [], experienceLevel: [] },
  { name: "Microsoft PowerPoint", category: [], experienceLevel: [] },
  { name: "Microsoft Word", category: [], experienceLevel: [] },
  { name: "Microsoft Excel", category: [], experienceLevel: [] },
  { name: "Microsoft OneNote", category: [], experienceLevel: [] },
  { name: "Microsoft Outlook", category: [], experienceLevel: [] },
  { name: "Microsoft Access", category: [], experienceLevel: [] },
  { name: "Microsoft Teams", category: [], experienceLevel: [] },
  { name: "Zoom", category: [], experienceLevel: [] },
  { name: "Adobe Photoshop", category: [], experienceLevel: [] },
  { name: "Adobe Illustrator", category: [], experienceLevel: [] },
  { name: "Adobe Premier Pro", category: [], experienceLevel: [] },
  { name: "Adobe XD", category: [], experienceLevel: [] },
  { name: "Adobe Acrobat Reader", category: [], experienceLevel: [] },
  { name: "Blender", category: [], experienceLevel: [] },
  { name: "GIMP", category: [], experienceLevel: [] },
  { name: "Unity", category: [], experienceLevel: [] },
  { name: "WSL", category: [], experienceLevel: [] },
  { name: "Gleam", category: [], experienceLevel: [] },
  { name: "TeX / LaTeX", category: [], experienceLevel: [] },
  { name: "Gleam", category: [], experienceLevel: [] },
  { name: "SWI-Prolog", category: [], experienceLevel: [] },
  { name: "KLWP", category: [], experienceLevel: [] },
  { name: "KWGT", category: [], experienceLevel: [] },
  { name: "Total Launcher", category: [], experienceLevel: [] },
  { name: "Nova Launcher", category: [], experienceLevel: [] },
  { name: "Kvaesitso", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
]);

export type { Skill, SkillCategory, Certificate, Project, Link, LinkType, Role, RoleCategory, Organization, Module };
export { db };