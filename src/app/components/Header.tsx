import { imgLogo } from "../assets/images";

export default function Header() {
  return (
    <header className="bg-[#322f2f] py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center">
        <img src={imgLogo} alt="CoOrca Logo" className="h-14" />
      </div>
    </header>
  );
}
