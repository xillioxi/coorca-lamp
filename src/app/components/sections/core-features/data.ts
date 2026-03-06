import {
  imgCamera,
  imgMobileApp,
  imgServos,
  imgSoftware,
  imgHifi,
} from "../../../assets/images";
import type { CoreFeature } from "./types";

export const coreFeatures: CoreFeature[] = [
  {
    title: "16MP",
    subtitle: "Camera System",
    image: imgCamera,
    imageAlt: "Camera",
    imageClassName: "absolute right-0 top-0 w-44 h-40 object-cover rounded-r-[33px]",
  },
  {
    title: "AI",
    subtitle: "Emotion Processing",
  },
  {
    title: "Integrated",
    subtitle: "Mobile App System",
    titleColor: "#202020",
    image: imgMobileApp,
    imageAlt: "Mobile App",
    imageClassName: "absolute right-4 top-1/2 -translate-y-1/2 h-36 w-auto",
  },
  {
    title: "180 DOF",
    subtitle: "Auto Adjusting Servos",
    titleColor: "#202020",
    image: imgServos,
    imageAlt: "Servos",
    imageClassName: "absolute right-4 top-1/2 -translate-y-1/2 h-36 w-auto",
  },
  {
    title: "Sensitivity",
    subtitle: "Audio System",
    titleColor: "#322f2f",
    image: imgHifi,
    imageAlt: "HiFi Speakers",
    imageClassName: "absolute right-4 top-1/2 -translate-y-1/2 h-36 w-auto",
  },
  {
    title: "Software",
    subtitle: "Designed Just For You",
    titleColor: "#202020",
    image: imgSoftware,
    imageAlt: "Software",
    imageClassName: "absolute right-0 top-0 h-full w-auto rounded-r-[35px]",
  },
];
