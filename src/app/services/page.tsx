import { Metadata } from "next";
import ProjectsCarousel, {
  CarouselProject,
} from "@/components/ProjectsCarousel";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Services | McLean Carpentry & Remodeling LLC",
  description:
    "Full list of remodeling, carpentry, and handyman services offered.",
};

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-xl bg-stone-100 ring-1 ring-stone-200 flex items-center justify-center text-amber-800">
      {children}
    </div>
  );
}

const icons = {
  kitchen: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 21V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 13h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 21v-4h10v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  bath: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 7V5a2 2 0 0 1 2-2h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12h18a1 1 0 0 1 1 1v1a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-1a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 20v2M17 20v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  basement: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V14h6v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  deck: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 8v12M18 8v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 20h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 12h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  custom: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 20V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 10h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 14h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  handyman: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 7 7 14l3 3 7-7-3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 19l3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 3l5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const services: Service[] = [
  {
    title: "Kitchen Remodeling",
    description:
      "Cabinetry upgrades, countertop installation, backsplash, trim, layout adjustments, and modern functional enhancements.",
    icon: <IconWrap>{icons.kitchen}</IconWrap>,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Shower replacements, tile work, waterproofing, vanities, lighting, and full wet-area modernization.",
    icon: <IconWrap>{icons.bath}</IconWrap>,
  },
  {
    title: "Basement Finishing & Interior Remodeling",
    description:
      "Framing, drywall, flooring, lighting, and complete basement transformations into usable living space.",
    icon: <IconWrap>{icons.basement}</IconWrap>,
  },
  {
    title: "Decks, Porches & Exterior Carpentry",
    description:
      "Deck builds, railing systems, porch work, exterior trim replacement, and repair projects.",
    icon: <IconWrap>{icons.deck}</IconWrap>,
  },
  {
    title: "Custom Carpentry & Built-ins",
    description:
      "Entertainment centers, cabinetry, shelving, custom woodwork, and one-off furniture builds.",
    icon: <IconWrap>{icons.custom}</IconWrap>,
  },
  {
    title: "Handyman & Small Projects",
    description:
      "Punch lists, repairs, installations, minor upgrades, and general maintenance tasks.",
    icon: <IconWrap>{icons.handyman}</IconWrap>,
  },
];

/**
 * IMPORTANT:
 * This path should match how /our-work builds image URLs.
 * If your images live in /public/projects/<folder>/<filename>,
 * this will work as-is.
 */
function projectImagePath(folder: string, filename: string) {
  return `/projects/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

const carouselProjects: CarouselProject[] = projects
  .filter((p) => p.images?.length)
  .map((p) => ({
    title: p.name,
    description: p.description,
    imageSrc: projectImagePath(
      p.folder,
      p.images[p.images.length - 1], // 👈 last image
    ),
    href: "/our-work",
  }));

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
                {service.icon}
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

        {/* Projects rotator */}
        <div className="space-y-3 pt-2">
          <h2 className="text-xl font-semibold text-stone-900">
            Recent Projects
          </h2>
          <p className="text-sm text-stone-700 max-w-2xl">
            A quick look at recent work—remodels, repairs, and builds completed
            with the same attention to detail we bring to every job.
          </p>

          <ProjectsCarousel projects={carouselProjects} />
        </div>

        <p className="text-xs text-stone-600 pt-4">
          Need something not listed here? We handle most remodeling and
          carpentry work — just reach out and ask.
        </p>
      </div>
    </div>
  );
}
