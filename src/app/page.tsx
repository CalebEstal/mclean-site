import { FeatureCard } from "@/components/FeatureCard";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-stone-300 bg-gradient-to-b from-stone-100 to-stone-200">
          <div className="container mx-auto flex flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-400 bg-stone-50/80 px-3 py-1 text-[10px] text-stone-700">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Locally owned • Detail-driven craftsmanship</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                  Carpentry, remodels &{" "}
                  <span className="bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent">
                    custom woodwork
                  </span>
                  , built to last.
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-stone-700">
                  From full remodels to small handyman projects, McLean
                  Carpentry & Remodeling LLC brings a craftsman&apos;s eye for
                  detail to every job—so your home feels solid, warm, and truly
                  yours.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-700 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-amber-50 shadow-sm hover:bg-amber-600"
                >
                  Request a free estimate
                </a>
                <a
                  href="tel:5551234567" // TODO: phone
                  className="rounded-full border border-stone-500 px-4 py-2 text-xs font-medium text-stone-800 hover:bg-stone-50"
                >
                  Or call: (555) 123-4567
                </a>
                <span className="text-[11px] text-stone-600">
                  Serving homeowners in the local area.
                </span>
              </div>
            </div>

            {/* Right side: logo + project blurb */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40 md:h-48 md:w-48">
                  <Image
                    src="/logo/mclean-logo.png"
                    alt="McLean Carpentry & Remodeling logo"
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-stone-300 bg-stone-50 p-4 text-xs text-stone-800 shadow-sm">
                <p className="font-semibold text-stone-900">
                  “Don&apos;t just build… create!”
                </p>
                <p className="mt-1 text-stone-700">
                  We specialize in warm, lived-in spaces with clean lines,
                  natural wood, and thoughtful details—from trim and built-ins
                  to full kitchen and bath remodels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-stone-100 border-b border-stone-300"
        >
          <div className="container mx-auto px-4 py-12 space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-stone-900">Services</h2>
              <div className="h-[2px] w-16 rounded bg-amber-700/60" />
              <p className="text-xs text-stone-700 max-w-xl">
                Quality work across a wide range of remodeling and carpentry
                services.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Kitchen Remodeling",
                  icon: "/icons/services/kitchen.svg",
                  description:
                    "Cabinets, countertops, backsplash, trim, layout improvements.",
                },
                {
                  title: "Bathroom Remodeling",
                  icon: "/icons/services/bathroom.svg",
                  description:
                    "Tile, showers, vanities, waterproofing, lighting upgrades.",
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
                    "Deck builds, repairs, railings, porches, exterior trim.",
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
                    "Repairs, installations, small projects — done professionally.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-md ring-1 ring-stone-200 transition hover:shadow-lg"
                >
                  <div className="relative h-10 w-10">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain opacity-80"
                    />
                  </div>

                  <p className="text-sm font-semibold text-stone-900">
                    {service.title}
                  </p>
                  <p className="text-[11px] text-stone-700">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/services"
              className="inline-block text-xs font-semibold text-amber-800 hover:underline"
            >
              View full service list →
            </a>
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

        {/* About */}
        <section
          id="about"
          className="border-b border-stone-300 bg-stone-50/90"
        >
          <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 md:py-12">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-stone-900">
                Built by a craftsman, not a crew of strangers.
              </h2>
              <p className="text-xs text-stone-700">
                McLean Carpentry & Remodeling is a small, hands-on operation.
                That means you&apos;re dealing directly with the person
                who&apos;ll be working in your home—not a revolving door of
                subs.
              </p>
              <p className="text-xs text-stone-700">
                We believe in honest bids, realistic timelines, and leaving your
                space cleaner than we found it.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-stone-300 bg-stone-100 p-4 text-xs text-stone-800 shadow-sm">
              <p className="font-semibold text-stone-900">What to expect:</p>
              <ul className="space-y-1">
                <li>• Free, no-pressure estimates</li>
                <li>• Clear scope and timeline before work begins</li>
                <li>• Respectful, tidy work in your home</li>
                <li>
                  • Honest recommendations—no upselling you don&apos;t need
                </li>
                <li>• A focus on long-lasting, solid work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-stone-100">
          <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 md:py-12">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-stone-900">
                Tell us about your project.
              </h2>
              <p className="text-xs text-stone-700">
                Share a few details and we&apos;ll follow up to schedule a quick
                call or on-site visit. You can also reach out directly:
              </p>
              <div className="space-y-1 text-xs text-stone-800">
                <p>
                  Phone:{" "}
                  <a
                    href="tel:5551234567" // TODO: phone
                    className="font-semibold text-amber-800"
                  >
                    (555) 123-4567
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@example.com" // TODO: email
                    className="font-semibold text-amber-800"
                  >
                    hello@example.com
                  </a>
                </p>
              </div>
            </div>

            <form className="space-y-3 rounded-2xl border border-stone-300 bg-stone-50 p-4 text-xs shadow-sm">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] text-stone-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-xs text-stone-900 outline-none focus:border-amber-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-stone-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-xs text-stone-900 outline-none focus:border-amber-700"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-stone-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-xs text-stone-900 outline-none focus:border-amber-700"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-stone-700">
                  Project details
                </label>
                <textarea
                  className="min-h-[90px] w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-xs text-stone-900 outline-none focus:border-amber-700"
                  placeholder="Tell us about the room(s), timeline, and any photos you have…"
                />
              </div>

              <p className="text-[11px] text-stone-600">
                This is a front-end-only form. Hook it up to email, Formspree,
                or your backend when you&apos;re ready.
              </p>

              <button
                type="submit"
                className="mt-1 rounded-full bg-amber-700 px-4 py-2 text-xs font-semibold text-amber-50 hover:bg-amber-600"
              >
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
