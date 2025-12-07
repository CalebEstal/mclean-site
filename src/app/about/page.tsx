import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-stone-100 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-stone-900">About Us</h1>
          <p className="text-stone-700 text-sm leading-relaxed">
            McLean Carpentry & Remodeling LLC is a small, hands-on remodeling
            and carpentry business built around craftsmanship, honesty, and
            communication. We believe a home should feel solid, warm, and
            intentionally crafted — not rushed or sloppily assembled.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">Our Approach</h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            When you work with McLean Carpentry & Remodeling, you're not dealing
            with a rotating crew of subcontractors — you’re working directly
            with a craftsman who cares about the details. From the first
            walkthrough to final cleanup, we focus on clarity, transparency, and
            earning your trust.
          </p>

          <ul className="space-y-1 text-sm text-stone-700">
            <li>• Realistic timelines and honest expectations</li>
            <li>• Clean job sites and respectful in-home work</li>
            <li>• Quality materials and long-lasting craftsmanship</li>
            <li>• Clear communication during every phase</li>
            <li>
              • Solutions tailored to your home, not cookie-cutter shortcuts
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">Our Story</h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            What started as a small carpentry business has grown into a trusted
            local remodeling company serving homeowners who want the job done
            right the first time. Whether it’s custom trim, a bathroom
            renovation, or a full interior overhaul, we bring the same level of
            care and attention to every project.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-amber-700 px-6 py-2 text-xs font-semibold text-amber-50 shadow-sm hover:bg-amber-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
