import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | McLean Carpentry & Remodeling LLC",
  description:
    "Full list of remodeling, carpentry, and handyman services offered.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Cabinetry upgrades, countertop installation, backsplash, trim, layout adjustments, and modern functional enhancements.",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Shower replacements, tile work, waterproofing, vanities, lighting, and full wet-area modernization.",
  },
  {
    title: "Basement Finishing & Interior Remodeling",
    description:
      "Framing, drywall, flooring, lighting, and complete basement transformations into usable living space.",
  },
  {
    title: "Decks, Porches & Exterior Carpentry",
    description:
      "Deck builds, railing systems, porch work, exterior trim replacement, and repair projects.",
  },
  {
    title: "Custom Carpentry & Built-ins",
    description:
      "Entertainment centers, cabinetry, shelving, custom woodwork, and one-off furniture builds.",
  },
  {
    title: "Handyman & Small Projects",
    description:
      "Punch lists, repairs, installations, minor upgrades, and general maintenance tasks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-12">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-stone-900">Our Services</h1>
          <p className="text-sm text-stone-700 max-w-2xl">
            Whether it’s a major remodel or a small repair, every project is
            completed with care, attention to detail, and craftsmanship you can
            count on.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-stone-200 transition hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                {/* Icon placeholder */}
                <div className="h-10 w-10 rounded-md bg-stone-200" />

                <div>
                  <p className="text-base font-semibold text-stone-900">
                    {service.title}
                  </p>
                  <p className="text-sm text-stone-700 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone-600 pt-4">
          Need something not listed here? We handle most remodeling and
          carpentry work — just reach out and ask.
        </p>
      </div>
    </div>
  );
}
