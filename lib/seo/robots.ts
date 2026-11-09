import { isKnownPublicRoute } from "../data/knownRoutes";

export const INDEXABLE_ROBOTS_HEADER =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const NOINDEX_ROBOTS_HEADER = "noindex, follow";

export interface RobotsHeaderInput {
  method: string;
  pathname: string;
  hasSearchParams: boolean;
}

/**
 * Centralizes the HTTP robots policy used by middleware.
 *
 * Clean GET requests to known public routes may be indexed. Query variants,
 * non-GET requests, and routes not recognized as public must not be indexed.
 */
export function getRobotsHeader({
  method,
  pathname,
  hasSearchParams,
}: RobotsHeaderInput): string {
  if (
    method.toUpperCase() !== "GET" ||
    hasSearchParams ||
    !isKnownPublicRoute(pathname)
  ) {
    return NOINDEX_ROBOTS_HEADER;
  }

  return INDEXABLE_ROBOTS_HEADER;
}
