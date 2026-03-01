export default function ContactPage() {
  return (
    <div className="bg-stone-100 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-stone-900">Contact</h1>
          <p className="text-sm text-stone-700 leading-relaxed">
            Ready to talk about your project? Call, text, or email anytime.
            We’ll follow up to schedule a quick call or on-site visit.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6 shadow-sm space-y-5">
          {/* Phone */}
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-stone-600">
              Phone / Text
            </p>
            <a
              href="tel:3098380007" // TODO: replace
              className="text-xl font-semibold text-amber-800 hover:underline"
            >
              (309) 838-0007
            </a>
            <p className="text-xs text-stone-600">
              Call or text — whichever is easiest.
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1 pt-3 border-t border-stone-300">
            <p className="text-xs uppercase tracking-wide text-stone-600">
              Email
            </p>
            <a
              href="mailto:admin@mcleancarpentry.com" // TODO: replace
              className="text-lg font-semibold text-amber-800 hover:underline break-all"
            >
              admin@mcleancarpentry.com
            </a>
            <p className="text-xs text-stone-600">
              Include photos and a brief description if possible.
            </p>
          </div>
        </div>

        {/* What to include */}
        <div className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-stone-900 mb-2">
            Helpful details to include:
          </p>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• Type of project</li>
            <li>• Approximate size or scope</li>
            <li>• Desired timeline</li>
            <li>• Photos of the space (if available)</li>
          </ul>
        </div>

        {/* Service area note */}
        <p className="text-xs text-stone-600 text-center">
          Serving Central Illinois and surrounding areas.
        </p>
      </div>
    </div>
  );
}
