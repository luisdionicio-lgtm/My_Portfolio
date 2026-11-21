"use client";
import Image from "next/image";
import { ThemeSelect } from "./ThemeSelect";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Header() {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="ld. Luis Dionicio, inicio">
          <span className="brand-mark">
            ld<span>.</span>
          </span>
          <span className="brand-name">LUIS DIONICIO</span>
        </Link>
        <nav aria-label="Navegación principal">
          {[
            ["/", "Inicio"],
            ["/projects", "Proyectos"],
            ["/about", "Sobre mí"],
            ["/contact", "Contacto"],
          ].map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={
                pathname === url || (url !== "/" && pathname.startsWith(url))
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <ThemeSelect />
        <a
          className="header-github"
          href="https://github.com/luisdionicio-lgtm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/github.svg"
            className="github-icon"
            width={18}
            height={18}
            alt=""
            aria-hidden="true"
          />{" "}
          GitHub
        </a>
      </div>
    </header>
  );
}
