import { FeatureCard } from "@/components/FeatureCard";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <section
          id="services"
          className="bg-stone-100 border-b border-stone-300"
        >
          <div className="container mx-auto px-4 py-12 space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-stone-900">
                  Services
                </h2>
                <div className="h-[2px] w-16 rounded bg-amber-700/60" />
                <p className="text-xs text-stone-700 max-w-xl">
                  Remodeling, carpentry, and repairs—handled with clear
                  communication, clean workspaces, and craftsmanship that lasts.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://mcleancarpentryremodelingllc.simplywise.com"
                  className="inline-flex items-center justify-center rounded-full bg-amber-700 px-4 py-2 text-xs font-semibold text-amber-50 hover:bg-amber-600 shadow-sm"
                >
                  Get a free estimate
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-amber-800/60 px-4 py-2 text-xs font-medium text-amber-900 hover:border-amber-800 hover:bg-amber-50"
                >
                  View all services
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Featured service */}
              <div className="lg:col-span-1 rounded-2xl border border-stone-300 bg-stone-50 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-stone-600">
                  Popular
                </p>

                <div className="mt-3 flex items-start gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/icons/services/kitchen.svg"
                      alt="Kitchen Remodeling"
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-stone-900">
                      Kitchen Remodeling
                    </p>
                    <p className="text-[11px] text-stone-700 leading-relaxed">
                      Cabinets, countertops, backsplash, trim, and layout
                      improvements— done with an eye for function and finish.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-stone-200">
                  <p className="text-[11px] font-semibold text-stone-900">
                    What you can expect:
                  </p>
                  <ul className="mt-2 space-y-1 text-[11px] text-stone-700">
                    <li>• Clear scope + realistic timeline</li>
                    <li>• Clean, respectful work in your home</li>
                    <li>• Solid trim, tile, and finish details</li>
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="mt-4 inline-block text-xs font-semibold text-amber-800 hover:underline"
                >
                  Ask about your kitchen →
                </a>
              </div>

              {/* Grid of services */}
              <div className="lg:col-span-2 grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: "Bathroom Remodeling",
                    icon: "/icons/services/bathroom.svg",
                    description:
                      "Tile, showers, vanities, waterproofing, and lighting upgrades.",
                  },
                  {
                    title: "Basements & Interiors",
                    icon: "/icons/services/remodel.svg",
                    description:
                      "Framing, drywall, flooring, lighting, finishing and updates.",
                  },
                  {
                    title: "Decks & Exterior Carpentry",
                    icon: "/icons/services/deck.svg",
                    description:
                      "Deck builds, repairs, railings, porches, and exterior trim.",
                  },
                  {
                    title: "Custom Carpentry",
                    icon: "/icons/services/carpentry.svg",
                    description:
                      "Built-ins, cabinetry, custom storage, woodworking projects.",
                  },
                  {
                    title: "General Handyman",
                    icon: "/icons/services/hammer.svg",
                    description:
                      "Repairs, installations, and small projects—done professionally.",
                  },
                  {
                    title: "Trim & Finish Work",
                    icon: "/icons/services/carpentry.svg",
                    description:
                      "Doors, baseboards, casing, accent walls, and clean final details.",
                  },
                ].map((service) => (
                  <a
                    key={service.title}
                    href="/services"
                    className="group flex gap-3 rounded-2xl bg-white p-4 shadow-md ring-1 ring-stone-200 transition hover:shadow-lg"
                  >
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain opacity-80 transition group-hover:opacity-100"
                      />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-stone-900">
                        {service.title}
                      </p>
                      <p className="text-[11px] text-stone-700 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-[11px] text-amber-800 opacity-0 transition group-hover:opacity-100">
                        Learn more →
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Small footer note */}
            <p className="text-[11px] text-stone-600">
              Not seeing what you need? We handle most remodeling and carpentry
              work— just reach out and ask.
            </p>
          </div>
        </section>

        {/* Recent work */}
        <section id="work" className="border-b border-stone-300 bg-stone-50">
          <div className="container mx-auto space-y-6 px-4 py-10 md:py-12">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-stone-900">
                  Recent projects
                </h2>
                <p className="max-w-xl text-xs text-stone-700">
                  A small sample of recent work. See more detailed
                  before-and-after galleries on the Our Work page.
                </p>
              </div>
              <a
                href="/our-work"
                className="text-[11px] font-semibold text-amber-800 hover:underline"
              >
                View all projects →
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {projects.slice(0, 3).map((project) => {
                const total = project.images.length;
                const coverImage =
                  total > 0
                    ? `/projects/${project.folder}/${project.images[total - 1]}`
                    : null; // last image = finished shot

                return (
                  <a
                    key={project.name}
                    href="/work"
                    className="flex flex-col gap-2 rounded-2xl border border-stone-300 bg-stone-50 p-3 shadow-sm transition hover:border-amber-600 hover:shadow-md"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-stone-200">
                      {coverImage && (
                        <Image
                          src={coverImage}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900">
                        {project.name}
                      </p>
                      <p className="text-[11px] text-stone-700 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <p className="text-[11px] text-amber-800">
                      View full gallery →
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
