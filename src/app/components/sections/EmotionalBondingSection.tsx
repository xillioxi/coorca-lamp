import { imgEmotionalBonding } from "../../assets/images";

export default function EmotionalBondingSection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-4">
          Emotional Bonding
        </h2>
        <p className="font-['Inter',sans-serif] text-[#787878] text-lg text-center max-w-4xl mx-auto mb-10">
          Orca watches your expression, to understand you better, if you're sad
          it will congra. If you're happy it will celebrate with you.
        </p>
        <img
          src={imgEmotionalBonding}
          alt="Emotional Bonding"
          className="w-full max-w-6xl mx-auto rounded-3xl object-cover max-h-[420px]"
        />
      </div>
    </section>
  );
}
