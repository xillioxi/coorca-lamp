import { imgMobileApp, imgAppFeatures } from "../../assets/images";

export default function MobileAppSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="font-['Inter',sans-serif] font-bold text-5xl text-black mb-8">
        Dedicated Mobile App
      </h2>
      <p className="font-['Inter',sans-serif] text-[#787878] text-3xl text-center max-w-5xl mx-auto mb-4">
        Available on iOS and Android, Orca+, allows you to choose from a wide
        range of personalities for Orca Lamp
      </p>
      <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
        <img
          src={imgMobileApp}
          alt="Mobile App Interface"
          className="w-full lg:w-[22%] object-contain"
        />
        <img
          src={imgAppFeatures}
          alt="App Features"
          className="w-full lg:w-[73%] rounded-3xl"
        />
      </div>

      <p className="font-['Inter',sans-serif] text-[#a5a5a5] text-xl text-center max-w-5xl mx-auto">
        You can also add different accessories to change the behavior of Orca
      </p>
    </section>
  );
}
