export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  github: string;
  technologies?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  logo: string;
  date: string;
  description: string;
}
