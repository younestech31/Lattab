import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { getRobotsHeader, INDEXABLE_ROBOTS_HEADER, NOINDEX_ROBOTS_HEADER } from "../lib/seo/robots";
import { isKnownPublicRoute } from "../lib/data/knownRoutes";

const cleanGet = (pathname: string) =>
  getRobotsHeader({ method: "GET", pathname, hasSearchParams: false });

test("keeps the clean Arabic and French public entry pages indexable", () => {
  for (const pathname of ["/", "/fr", "/blog", "/fr/blog"]) {
    assert.equal(cleanGet(pathname), INDEXABLE_ROBOTS_HEADER, pathname);
  }
});

test("keeps Search Console example article URLs indexable when clean", () => {
  const examples = [
    "/blog/mainlevee-hypotheque-apres-credit-algerie",
    "/blog/declaration-plus-value-gn17-vente-immobilier-algerie",
    "/blog/sortie-indivision-immobiliere-algerie",
    "/blog/droit-preemption-vente-immobilier-algerie",
    "/blog/notaire-algeriens-etranger-procuration-legalisation",
    "/fr/blog/comparaison-eurl-sarl-spa-algerie-2026",
    "/fr/blog/auto-entrepreneur-startups-algerie-avantages",
    "/fr/blog/mainlevee-hypotheque-apres-credit-algerie",
    "/fr/blog/taxe-fonciere-gn31-algerie",
  ];

  for (const pathname of examples) {
    assert.equal(isKnownPublicRoute(pathname), true, pathname);
    assert.equal(cleanGet(pathname), INDEXABLE_ROBOTS_HEADER, pathname);
  }
});

test("every Markdown article filename is accepted by middleware in both locales", () => {
  const root = process.cwd();
  const arabicDir = path.join(root, "content", "blog");
  const frenchDir = path.join(arabicDir, "fr");
  const cases = [
    { dir: arabicDir, prefix: "/blog/" },
    { dir: frenchDir, prefix: "/fr/blog/" },
  ];

  for (const { dir, prefix } of cases) {
    const files = readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"));

    assert.ok(files.length > 0, `Expected Markdown articles in ${dir}`);

    for (const file of files) {
      const slug = file.name.slice(0, -".md".length);
      const pathname = `${prefix}${slug}`;
      assert.equal(isKnownPublicRoute(pathname), true, pathname);
      assert.equal(cleanGet(pathname), INDEXABLE_ROBOTS_HEADER, pathname);
    }
  }
});

test("keeps query-string variants out of the index without blocking clean canonicals", () => {
  const variants = [
    { pathname: "/", hasSearchParams: true },
    { pathname: "/?service=vente", hasSearchParams: true },
    { pathname: "/blog", hasSearchParams: true },
    { pathname: "/fr/blog", hasSearchParams: true },
    { pathname: "/blog/mainlevee-hypotheque-apres-credit-algerie", hasSearchParams: true },
  ];

  for (const item of variants) {
    assert.equal(
      getRobotsHeader({ method: "GET", ...item }),
      NOINDEX_ROBOTS_HEADER,
      item.pathname,
    );
  }

  assert.equal(cleanGet("/"), INDEXABLE_ROBOTS_HEADER);
  assert.equal(
    cleanGet("/blog/mainlevee-hypotheque-apres-credit-algerie"),
    INDEXABLE_ROBOTS_HEADER,
  );
});

test("never marks unknown routes or non-GET requests as indexable", () => {
  assert.equal(
    getRobotsHeader({
      method: "GET",
      pathname: "/not-a-public-route",
      hasSearchParams: false,
    }),
    NOINDEX_ROBOTS_HEADER,
  );

  for (const method of ["POST", "PUT", "PATCH", "DELETE", "OPTIONS"]) {
    assert.equal(
      getRobotsHeader({
        method,
        pathname: "/contact",
        hasSearchParams: false,
      }),
      NOINDEX_ROBOTS_HEADER,
      method,
    );
  }
});
