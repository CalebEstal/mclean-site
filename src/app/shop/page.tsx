// src/app/shop/page.tsx
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="bg-stone-100 min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-stone-600">
            Small batch • Made to order • Limited runs
          </p>
          <h1 className="text-3xl font-bold text-stone-900">Shop</h1>
          <p className="text-sm text-stone-700 leading-relaxed max-w-2xl">
            The online shop is launching soon. We build in small batches with
            preorder windows so we can keep quality high and lead times clear.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://mcleancarpentryremodelingllc.simplywise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-amber-700 px-4 py-2 text-xs font-semibold text-amber-50 shadow-sm hover:bg-amber-600"
          >
            Join the waitlist / request a quote
          </a>

          <Link
            href="/our-work"
            className="inline-flex items-center justify-center rounded-full border border-amber-800/60 px-4 py-2 text-xs font-medium text-amber-900 hover:border-amber-800 hover:bg-amber-50"
          >
            View recent work
          </Link>
        </div>

        {/* Info cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-stone-300 bg-stone-50 p-5">
            <h2 className="text-sm font-semibold text-stone-900">
              Limited releases
            </h2>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              Each run is capped. When a batch sells out, the next release is
              scheduled after the current build is complete.
            </p>
          </div>

          <div className="rounded-xl border border-stone-300 bg-stone-50 p-5">
            <h2 className="text-sm font-semibold text-stone-900">
              Preorder windows
            </h2>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              Preorders open for a short window so we can source lumber, mill
              parts, and keep timelines predictable.
            </p>
          </div>

          <div className="rounded-xl border border-stone-300 bg-stone-50 p-5">
            <h2 className="text-sm font-semibold text-stone-900">
              Premium custom work
            </h2>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              Custom commissions are available at a higher price point and with
              limited availability.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="rounded-xl border border-stone-300 bg-white p-5">
          <p className="text-sm text-stone-700 leading-relaxed">
            Want first access to new drops? Use the waitlist link above. If you
            have a specific piece in mind (size, wood species, finish), request
            a quote and include your details.
          </p>
        </div>
      </div>
    </div>
  );
}
