export default function ContactPage() {
  return (
    <div className="bg-stone-100 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-stone-900">Contact Us</h1>
          <p className="text-sm text-stone-700 leading-relaxed">
            Ready to talk about your project? Send us a message and we’ll get
            back to you as soon as possible. You can also call or email
            directly.
          </p>

          <div className="text-sm text-stone-800 space-y-1">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:5551234567" className="text-amber-800 font-semibold">
                (555) 123-4567
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@example.com"
                className="text-amber-800 font-semibold"
              >
                hello@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 rounded-2xl border border-stone-300 bg-stone-50 p-6 shadow-sm">
          <div>
            <label className="text-[11px] text-stone-700 block mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-amber-700 outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] text-stone-700 block mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-amber-700 outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] text-stone-700 block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-amber-700 outline-none"
            />
          </div>

          <div>
            <label className="text-[11px] text-stone-700 block mb-1">
              Project details
            </label>
            <textarea
              placeholder="Tell us about your project..."
              className="min-h-[110px] w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 focus:border-amber-700 outline-none"
            />
          </div>

          <p className="text-[11px] text-stone-600">
            This form does not send emails yet — I’ll help you hook it to
            Formspree or an API route next.
          </p>

          <button
            type="submit"
            className="rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-amber-50 hover:bg-amber-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
