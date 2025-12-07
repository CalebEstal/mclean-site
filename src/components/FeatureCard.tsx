import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-stone-300 bg-amber-50/60 p-4 shadow-sm shadow-stone-300/60">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-sm text-amber-800">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      <p className="text-xs leading-relaxed text-stone-700">{description}</p>
    </div>
  );
}
