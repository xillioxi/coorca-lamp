import { imgTechDiagram } from "../../assets/images";
import SpecCard from "./tech-specs/SpecCard";
import { techSpecs } from "./tech-specs/data";

export default function TechSpecsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-12">
        Technical Specifications
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <img
          src={imgTechDiagram}
          alt="Technical Diagram"
          className="w-full lg:w-2/5 rounded-3xl"
        />

        <div className="grid grid-cols-3 gap-6 flex-1">
          {techSpecs.map((spec) => (
            <SpecCard key={spec.label} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
}
