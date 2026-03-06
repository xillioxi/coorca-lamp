import FeatureCard from "./core-features/FeatureCard";
import { coreFeatures } from "./core-features/data";

export default function CoreFeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
