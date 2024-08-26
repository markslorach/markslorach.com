export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  technologies?: string[];
  href: string;
  github: string;
  aria: string;
}

export interface Experience {
  id: string;
  logo: string;
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}
