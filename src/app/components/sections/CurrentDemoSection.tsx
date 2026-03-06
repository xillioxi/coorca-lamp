import { imgDemo1, imgDemo2 } from "../../assets/images";

export default function CurrentDemoSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-12">
        Current Demo
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={imgDemo1}
          alt="Demo 1"
          className="w-full md:w-[60%] rounded-3xl object-cover"
        />
        <img
          src={imgDemo2}
          alt="Demo 2"
          className="w-full md:w-[37%] rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
