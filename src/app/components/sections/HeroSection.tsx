import { imgOrcaLamp } from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 text-center">
      <p className="font-['Roboto',sans-serif] text-black text-3xl mb-2">CoOrca</p>
      <h2 className="font-['Roboto',sans-serif] font-medium text-6xl text-black mb-6">
        Orca Lamp
      </h2>
      <p className="font-['Roboto',sans-serif] text-[#666] text-2xl max-w-2xl mx-auto mb-12">
        Your intelligent desk companion that sees, hears, and adapts to your mood
      </p>

      <div className="max-w-4xl mx-auto">
        <img
          src={imgOrcaLamp}
          alt="Orca Lamp"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
