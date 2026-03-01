// src/components/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate h-[90vh] min-h-[600px] w-full">
      {/* Background image */}
      <Image
        src="/hero/dresser2.jpg" // ← put your edited image here
        alt="Handcrafted solid wood dresser"
        fill
        priority
        className="object-cover object-[50%_70%]"
      />

      {/* Dark overlay (keeps realism, not glossy) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl pl-2 md:pl-6 lg:pl-12">
            <p className="mb-4 text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Craftsman Furniture • Built by Hand
            </p>

            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-stone-100 md:text-5xl">
              Furniture built to be used,
              <br />
              not replaced.
            </h1>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-stone-300 md:text-base">
              Each piece is designed, built, and finished by hand in our
              Mackenaw, Illinois workshop.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://mcleancarpentryremodelingllc.simplywise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 shadow hover:bg-amber-600"
              >
                Request a quote
              </a>

              <Link
                href="/shop"
                className="rounded-full border border-stone-400/60 px-6 py-3 text-sm font-medium text-stone-200 hover:border-stone-200 hover:text-white"
              >
                View available pieces
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}
