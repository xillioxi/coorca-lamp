import type { Milestone } from "./types";

export default function TimelineItem({ date, description, side }: Milestone) {
  return (
    <div className="relative flex items-center">
      <div className="w-1/2 text-right pr-12">
        {side === "left" && (
          <>
            <h3 className="font-['Inter',sans-serif] text-3xl mb-2">{date}</h3>
            <p className="font-['Inter',sans-serif] text-[#494949] text-xl">
              {description}
            </p>
          </>
        )}
      </div>

      <div className="absolute left-1/2 w-12 h-12 bg-[#3c3c3c] rounded-full -translate-x-1/2 z-10" />

      <div className="w-1/2 pl-12">
        {side === "right" && (
          <>
            <h3 className="font-['Inter',sans-serif] text-3xl mb-2">{date}</h3>
            <p className="font-['Inter',sans-serif] text-[#494949] text-xl">
              {description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
