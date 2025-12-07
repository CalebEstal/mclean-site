import { WorkGallery } from "@/components/WorkGallery";

export default function WorkPage() {
  return (
    <div className="bg-stone-100 min-h-screen py-12">
      <div className="container mx-auto max-w-5xl px-4 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-stone-900">Our Work</h1>
          <p className="text-sm text-stone-700 leading-relaxed">
            Here&apos;s a sample of recent projects we&apos;ve completed. Click
            any project to see the full before-and-after gallery.
          </p>
        </div>

        <WorkGallery />
      </div>
    </div>
  );
}
