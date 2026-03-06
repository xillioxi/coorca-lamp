import UseCaseCard from "./use-cases/UseCaseCard";
import {
  imgRolePlaying,
  imgBookReading,
  imgPostureAnalysis,
  imgVibeToMusic,
  imgHomework,
  imgTimeAllocation,
} from "../../assets/images";

export default function UseCasesSection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-12">
          Use Cases
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-[3fr_2fr] gap-6">
            <UseCaseCard image={imgRolePlaying} label="Role Playing" />
            <UseCaseCard image={imgBookReading} label="Book Reading" />
          </div>

          <div className="grid grid-cols-[3fr_7fr] gap-6">
            <UseCaseCard image={imgPostureAnalysis} label="Posture Analysis" />
            <UseCaseCard image={imgVibeToMusic} label="Vibe to Music" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <UseCaseCard image={imgHomework} label="Homework" />
            <UseCaseCard image={imgTimeAllocation} label="Time Allocation Analysis" />
          </div>
        </div>
      </div>
    </section>
  );
}
