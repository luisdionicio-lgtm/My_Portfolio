"use client";
import { useSyncExternalStore } from "react";
const key = "luis-portfolio-theme";
function read() {
  try {
    return localStorage.getItem(key) || "system";
  } catch {
    return "system";
  }
}
function apply(theme: string) {
  if (theme === "system") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
}
function subscribe(callback: () => void) {
  const update = () => {
    apply(read());
    callback();
  };
  window.addEventListener("storage", update);
  window.addEventListener("portfolio-theme", update);
  return () => {
    window.removeEventListener("storage", update);
    window.removeEventListener("portfolio-theme", update);
  };
}
export function ThemeSelect() {
  const theme = useSyncExternalStore(subscribe, read, () => "system");
  return (
    <label className="theme-control">
      <span>Tema</span>
      <select
        aria-label="Tema de colores"
        value={theme}
        onChange={(event) => {
          const next = event.target.value;
          try {
            localStorage.setItem(key, next);
          } catch {}
          apply(next);
          window.dispatchEvent(new Event("portfolio-theme"));
        }}
      >
        <option value="system">Sistema</option>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>
    </label>
  );
}
