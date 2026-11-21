'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function Header() {
  const pathname = usePathname();
  return <header className="header"><div className="shell header-inner"><Link href="/" className="brand" aria-label="Luis Dionicio, inicio"><span className="brand-mark">ld<span>.</span></span><span className="brand-name">LUIS DIONICIO</span></Link><nav aria-label="Navegación principal">{[['/', 'Inicio'], ['/projects', 'Proyectos'], ['/about', 'Sobre mí']].map(([url, label]) => <Link key={url} href={url} aria-current={pathname === url || (url !== '/' && pathname.startsWith(url)) ? 'page' : undefined}>{label}</Link>)}</nav><a className="header-github" href="https://github.com/luisdionicio-lgtm" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></header>;
}
