export interface Project {
  slug: string;
  title: string;
  category: "Full Stack" | "Backend" | "IoT" | "Mobile";
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  status: string;
  highlights: string[];
  color: string;
}
