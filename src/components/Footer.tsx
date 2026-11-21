import Link from 'next/link';
import { personalInfo } from '@/lib/data';
export function Footer() {
  return <footer className="footer shell"><div><Link href="/" className="brand-mark" aria-label="Volver al inicio">ld<span>.</span></Link><p>Ideas claras. Código con intención.</p></div><div className="footer-links"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="#contenido">Volver arriba</a></div><p className="copyright">© {new Date().getFullYear()} Luis Dionicio · Hecho en Lima, Perú</p></footer>;
}
