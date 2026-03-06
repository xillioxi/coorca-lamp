import {
  imgRolePlaying,
  imgPostureAnalysis,
  imgBookReading,
  imgHomework,
  imgVibeToMusic,
  imgTimeAllocation,
} from "../../../assets/images";
import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  { image: imgRolePlaying, label: "Role Playing" },
  { image: imgPostureAnalysis, label: "Posture Analysis" },
  { image: imgBookReading, label: "Book Reading" },
  { image: imgHomework, label: "Homework" },
  {
    image: imgVibeToMusic,
    label: "Vibe to Music",
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    image: imgTimeAllocation,
    label: "Time Allocation Analysis",
    className: "md:col-span-2",
  },
];
