import type { TechSpec } from "./types";

export default function SpecCard({ label, value }: TechSpec) {
  return (
    <div className="bg-[#f1f1f1] rounded-3xl p-6 text-center shadow-lg">
      <h3 className="font-['Inter',sans-serif] font-bold text-3xl mb-2">
        {label}
      </h3>
      <p className="font-['Inter',sans-serif] text-2xl">{value}</p>
    </div>
  );
}
