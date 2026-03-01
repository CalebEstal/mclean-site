"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type CarouselProject = {
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
};

export default function ProjectsCarousel({
  projects,
  intervalMs = 4500,
}: {
  projects: CarouselProject[];
  intervalMs?: number;
}) {
  const items = useMemo(() => projects.filter(Boolean), [projects]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      intervalMs,
    );
    return () => clearInterval(t);
  }, [items.length, intervalMs]);

  if (items.length === 0) return null;

  const active = items[index];

  return (
    <div className="rounded-2xl bg-white shadow-md ring-1 ring-stone-200 overflow-hidden">
      <div className="grid md:grid-cols-5">
        {/* Image */}
        <div className="md:col-span-3">
          <div className="relative h-64 md:h-80 lg:h-96 bg-stone-200 overflow-hidden">
            <img
              src={active.imageSrc}
              alt={active.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="md:col-span-2 p-6 flex flex-col justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-stone-600">
              Recent project
            </p>
            <h3 className="text-xl font-semibold text-stone-900 leading-snug">
              {active.title}
            </h3>
            {active.description ? (
              <p className="text-sm text-stone-700 leading-relaxed">
                {active.description}
              </p>
            ) : (
              <p className="text-sm text-stone-700 leading-relaxed">
                See more finished work and in-progress builds.
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={active.href ?? "/our-work"}
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-4 py-2 text-xs font-semibold text-amber-50 shadow-sm hover:bg-amber-600"
            >
              View our work
            </Link>

            <Link
              href="https://mcleancarpentryremodelingllc.simplywise.com"
              className="inline-flex items-center justify-center rounded-full border border-amber-800/60 px-4 py-2 text-xs font-medium text-amber-900 hover:border-amber-800 hover:bg-amber-50"
            >
              Get an estimate
            </Link>
          </div>

          {/* Dots */}
          {items.length > 1 && (
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show project ${i + 1}`}
                  className={[
                    "h-2 w-2 rounded-full transition",
                    i === index
                      ? "bg-amber-700"
                      : "bg-stone-300 hover:bg-stone-400",
                  ].join(" ")}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
