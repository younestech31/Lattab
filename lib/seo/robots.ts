import { KNOWN_STATIC_ROUTES, isKnownPublicRoute } from "../data/knownRoutes";

export const INDEXABLE_ROBOTS_HEADER =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const NOINDEX_ROBOTS_HEADER = "noindex, follow";

export interface RobotsHeaderInput {
  method: string;
  pathname: string;
  hasSearchParams: boolean;
}

/**
 * Returns an HTTP robots directive only when middleware can determine it safely.
 *
 * Static public routes have a fixed indexability policy and can receive an
 * explicit index header. Dynamic article and NAE routes resolve existence and
 * language eligibility in their page metadata, so middleware must not override
 * that route-level decision with a blanket "index, follow" header.
 *
 * Query variants, non-GET requests, and unknown routes remain noindex.
 */
export function getRobotsHeader({
  method,
  pathname,
  hasSearchParams,
}: RobotsHeaderInput): string | null {
  if (method.toUpperCase() !== "GET" || hasSearchParams) {
    return NOINDEX_ROBOTS_HEADER;
  }

  if (!isKnownPublicRoute(pathname)) {
    return NOINDEX_ROBOTS_HEADER;
  }

  if (KNOWN_STATIC_ROUTES.has(pathname)) {
    return INDEXABLE_ROBOTS_HEADER;
  }

  // Dynamic article / NAE routes own their robots metadata after data lookup.
  return null;
}
