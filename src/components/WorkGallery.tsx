"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";

const THUMB_COUNT = 3; // how many finished photos to show per project
const PAGE_SIZE = 10; // how many projects to load at a time

export function WorkGallery() {
  const [open, setOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    Math.min(PAGE_SIZE, projects.length)
  );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const activeProject =
    activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  function openModal(projectIndex: number) {
    setActiveProjectIndex(projectIndex);
    // start slideshow at first image (before → after)
    setActiveImageIndex(0);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  }

  function showNext() {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev + 1 < activeProject.images.length ? prev + 1 : 0
    );
  }

  function showPrev() {
    if (!activeProject) return;
    setActiveImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : activeProject.images.length - 1
    );
  }

  // Keyboard controls when modal open
  useEffect(() => {
    if (!open || !activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, activeProject]);

  // Infinite scroll: load more projects when sentinel enters viewport
  useEffect(() => {
    if (visibleCount >= projects.length) return;

    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + PAGE_SIZE, projects.length)
          );
        }
      },
      { rootMargin: "200px" } // start loading before you actually hit the bottom
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleCount]);

  return (
    <>
      {/* Project cards */}
      <div className="space-y-10">
        {projects.slice(0, visibleCount).map((project, projectIndex) => {
          const total = project.images.length;
          const start = Math.max(total - THUMB_COUNT, 0); // last 2–3 images = finished shots
          const thumbs = project.images.slice(start);

          const extraCount =
            project.images.length > THUMB_COUNT
              ? project.images.length - THUMB_COUNT
              : 0;

          return (
            <section
              key={project.name}
              className="cursor-pointer rounded-2xl border border-stone-300 bg-stone-50 p-5 shadow-sm transition hover:border-amber-600 hover:shadow-md"
              onClick={() => openModal(projectIndex)}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="text-lg font-semibold text-stone-900">
                  {project.name}
                </h2>
                <p className="max-w-xl text-xs text-stone-700">
                  {project.description}
                </p>
              </div>

              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {thumbs.map((fileName, idx) => {
                  const src = `/projects/${project.folder}/${fileName}`;
                  const isLastThumbWithMore =
                    idx === thumbs.length - 1 && extraCount > 0;

                  return (
                    <div
                      key={fileName}
                      className="relative aspect-video overflow-hidden rounded-xl border border-stone-200 bg-stone-200"
                    >
                      <Image
                        src={src}
                        alt={`${project.name} - ${fileName}`}
                        fill
                        className="object-cover"
                      />
                      {isLastThumbWithMore && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-xs font-semibold text-amber-50">
                          +{extraCount} more
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-[11px] text-stone-600">
                Click this project to view the full before-and-after gallery.
              </p>
            </section>
          );
        })}

        {/* Sentinel for infinite scroll */}
        {visibleCount < projects.length && (
          <div
            ref={loadMoreRef}
            className="h-8 w-full text-center text-[11px] text-stone-500"
          >
            Loading more projects…
          </div>
        )}
        {visibleCount >= projects.length && (
          <p className="text-center text-[11px] text-stone-500">
            That&apos;s all the projects for now.
          </p>
        )}
      </div>

      {/* Modal slideshow */}
      {open && activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-stone-100 p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()} // don’t close when clicking inside
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-stone-100 hover:bg-black/80"
            >
              ✕
            </button>

            <div className="mb-3 flex items-baseline justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold text-stone-900">
                  {activeProject.name}
                </h2>
                <p className="text-[11px] text-stone-600">
                  Photo {activeImageIndex + 1} of {activeProject.images.length}
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-stone-300 bg-stone-200">
              <Image
                src={`/projects/${activeProject.folder}/${activeProject.images[activeImageIndex]}`}
                alt={`${activeProject.name} - slide ${activeImageIndex + 1}`}
                fill
                className="object-contain bg-stone-900"
              />

              {/* Prev / Next controls */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-stone-100 hover:bg-black/80"
              >
                ←
              </button>
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-stone-100 hover:bg-black/80"
              >
                →
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {activeProject.images.map((fileName, idx) => {
                const src = `/projects/${activeProject.folder}/${fileName}`;
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={fileName}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border ${
                      isActive
                        ? "border-amber-700 ring-2 ring-amber-500"
                        : "border-stone-300"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${activeProject.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <p className="mt-2 text-[11px] text-stone-600">
              Use the arrows or your keyboard (← →, Esc) to move through photos
              and close.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
