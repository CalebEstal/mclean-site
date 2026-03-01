import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-300 bg-stone-100">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: business info */}
          <div className="space-y-1 text-xs text-stone-700">
            <p className="font-semibold text-stone-900">
              McLean Carpentry & Remodeling LLC
            </p>
            <p>Residential remodeling, carpentry & handyman services</p>
            <p className="text-[11px] text-stone-600">
              Serving the Midwest U.S.A.
            </p>
          </div>

          {/* Right: navigation */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            <Link
              href="/services"
              className="text-stone-700 hover:text-stone-900"
            >
              Services
            </Link>
            <Link href="/work" className="text-stone-700 hover:text-stone-900">
              Our Work
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-stone-900">
              About
            </Link>
            <Link
              href="/contact"
              className="text-stone-700 hover:text-stone-900"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col gap-2 border-t border-stone-300 pt-4 text-[11px] text-stone-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} McLean Carpentry & Remodeling LLC. All
            rights reserved.
          </p>
          <p className="text-stone-500">
            Built with care — quality work from start to finish.
          </p>
        </div>
      </div>
    </footer>
  );
}
