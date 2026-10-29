import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface UnifiedPageHeaderProps {
  lang?: 'ar' | 'fr';
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  backLink?: {
    href: string;
    label: string;
  };
  children?: React.ReactNode;
  className?: string;
}

export default function UnifiedPageHeader({
  lang = 'ar',
  badgeText,
  badgeIcon,
  eyebrow,
  title,
  description,
  breadcrumbs,
  backLink,
  children,
  className = '',
}: UnifiedPageHeaderProps) {
  const isAr = lang === 'ar';
  const isRtl = isAr;

  return (
    <section
      className={`
        relative bg-emerald-950 text-white overflow-hidden
        pt-[calc(5.5rem+env(safe-area-inset-top,0px))] md:pt-32
        pb-12 md:pb-16
        ${className}
      `}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Background visual layers matching homepage identity */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-emerald-950" />
        <div className="absolute inset-0 bg-pattern-plus opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent" />
        
        {/* Subtle glowing ambient blobs */}
        <div className="absolute top-10 left-6 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/15 rounded-full filter blur-3xl" />
        <div className="absolute bottom-6 right-6 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500/15 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Top bar: Back link and Breadcrumbs */}
        {(backLink || (breadcrumbs && breadcrumbs.length > 0)) && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs sm:text-sm text-emerald-200/80">
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors group"
              >
                {isRtl ? (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                ) : (
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                )}
                <span>{backLink.label}</span>
              </Link>
            )}

            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 overflow-x-auto py-1">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <React.Fragment key={idx}>
                      {idx > 0 && (
                        <span className="text-white/40" aria-hidden="true">
                          {isRtl ? (
                            <ChevronLeft className="w-3.5 h-3.5 inline" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 inline" />
                          )}
                        </span>
                      )}
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="hover:text-white transition-colors whitespace-nowrap"
                        >
                          {crumb.name}
                        </Link>
                      ) : (
                        <span
                          className={`whitespace-nowrap ${isLast ? 'text-white font-medium' : ''}`}
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {crumb.name}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            )}
          </div>
        )}

        {/* Center Content */}
        <div className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs sm:text-sm border border-white/15 shadow-sm">
              {badgeIcon ? (
                <span className="text-amber-400">{badgeIcon}</span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
              <span className="font-medium text-amber-300">{badgeText}</span>
            </div>
          )}

          {/* Eyebrow */}
          {eyebrow && (
            <p className="text-amber-300/90 font-semibold text-sm sm:text-base">
              {eyebrow}
            </p>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-emerald-100/90 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
              {description}
            </p>
          )}

          {/* Optional children (e.g. Search Bar or Quick CTA Links) */}
          {children && <div className="w-full mt-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
