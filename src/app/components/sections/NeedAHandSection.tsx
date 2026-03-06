import { imgHelpingHand } from "../../assets/images";

const capabilities = [
  "Work\nAnalysis",
  "Diction &\nTranslation",
  "Voice-to-Voice\nInteraction",
];

export default function NeedAHandSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-8">
        Need A Hand?
      </h2>
      <p className="font-['Inter',sans-serif] text-[#787878] text-3xl text-center max-w-5xl mx-auto mb-12">
        Equipped with the most advanced recognition and OCR system
        <br />
        Orca automatically recognizes and steps in when you're in trouble
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <img
          src={imgHelpingHand}
          alt="Helping with homework"
          className="w-full rounded-3xl"
        />
        <div className="grid grid-cols-1 gap-6">
          {capabilities.map((text) => (
            <div
              key={text}
              className="bg-gradient-to-r from-[#2d2d2d] to-[#494949] text-white p-8 rounded-3xl text-center"
            >
              <p className="font-['Inter',sans-serif] font-bold text-4xl whitespace-pre-line">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
