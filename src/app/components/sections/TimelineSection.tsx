import { milestones } from "./timeline/data";
import TimelineItem from "./timeline/TimelineItem";

export default function TimelineSection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-16">
          Current Progress
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e2c28a] to-[#e08e00] -translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((milestone) => (
              <TimelineItem key={milestone.date} {...milestone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
