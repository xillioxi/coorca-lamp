import type { CoreFeature } from "./types";

export default function FeatureCard({
  title,
  subtitle,
  image,
  imageAlt,
  imageClassName,
  titleColor = "#1e1e1e",
}: CoreFeature) {
  return (
    <div className="bg-[#ececec] rounded-[35px] p-6 relative overflow-hidden h-40">
      <div className="flex-1">
        <h3
          className="font-['Roboto',sans-serif] font-bold text-3xl mb-1"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p className="font-['Roboto',sans-serif] text-xl text-black">
          {subtitle}
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt={imageAlt ?? title}
          className={imageClassName}
        />
      )}
    </div>
  );
}
