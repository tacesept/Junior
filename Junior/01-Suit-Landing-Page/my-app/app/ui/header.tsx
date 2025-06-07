import Link from "next/link";
import HomeIcon from "@/public/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="px-4 pt-8 md:px-10 md:pt-10 lg:pt-12">
        <nav className="flex justify-between items-center max-w-[1110px] mx-auto">
          <Link href="/">
            <HomeIcon className="text-dark-blue" />
          </Link>
          <button
            className="py-3 px-6 bg-white border border-black text-dark-blue
            hover:bg-dark-blue hover:text-white"
          >
            Request Beta Access
          </button>
        </nav>
      </div>
    </header>
  );
}