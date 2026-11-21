import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveSiteUrl } from "../src/lib/site-origin.ts";

test("conserva localhost en desarrollo y normaliza el dominio autorizado", () => {
  assert.equal(resolveSiteUrl({}), "http://localhost:3000");
  assert.equal(
    resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: " https://portfolio.example/ " }),
    "https://portfolio.example",
  );
});
test("Vercel usa el dominio de producción antes que la URL temporal", () => {
  assert.equal(
    resolveSiteUrl({
      VERCEL: "1",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.example",
      VERCEL_URL: "preview.vercel.app",
    }),
    "https://portfolio.example",
  );
  assert.equal(
    resolveSiteUrl({ VERCEL: "1", VERCEL_URL: "portfolio.vercel.app" }),
    "https://portfolio.vercel.app",
  );
  assert.equal(
    resolveSiteUrl({
      VERCEL: "1",
      NEXT_PUBLIC_SITE_URL: "https://custom.example",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
    }),
    "https://custom.example",
  );
});
test("rechaza un dominio incompleto, rutas, credenciales y orígenes locales en Vercel", () => {
  for (const value of [
    "portfolio.example",
    "ftp://portfolio.example",
    "https://portfolio.example/contact",
    "https://user:pass@portfolio.example",
    "https://portfolio.example?x=1",
    "https://portfolio.example/#x",
  ]) {
    assert.throws(() => resolveSiteUrl({ NEXT_PUBLIC_SITE_URL: value }));
  }
  for (const value of [
    "http://localhost:3000",
    "https://127.0.0.1",
    "http://portfolio.example",
  ]) {
    assert.throws(() =>
      resolveSiteUrl({ VERCEL: "1", NEXT_PUBLIC_SITE_URL: value }),
    );
  }
  assert.throws(() => resolveSiteUrl({ VERCEL: "1" }));
});
