'use client';
import { useState } from 'react';
import { projects } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
const categories = ['Todos', 'Full Stack', 'Backend', 'Mobile', 'IoT'];
export function ProjectExplorer() {
  const [category, setCategory] = useState('Todos');
  const visible = projects.filter(project => category === 'Todos' || project.category === category);
  return <><div className="filter-bar"><div className="filters" aria-label="Filtrar proyectos">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div><p role="status">{visible.length} proyectos</p></div><div className="project-grid">{visible.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></>;
}
