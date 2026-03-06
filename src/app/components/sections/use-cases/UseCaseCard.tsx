import type { UseCase } from "./types";

export default function UseCaseCard({ image, label, className = "" }: UseCase) {
  return (
    <div className={`relative rounded-3xl overflow-hidden h-96 ${className}`}>
      <img
        src={image}
        alt={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <p className="absolute bottom-6 left-6 font-['Inter',sans-serif] text-white text-3xl">
        {label}
      </p>
    </div>
  );
}
