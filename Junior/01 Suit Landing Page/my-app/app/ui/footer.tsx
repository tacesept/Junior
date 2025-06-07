import Link from "next/link";
import HomeIcon from "@/public/assets/logo.svg";
import FacebookIcon from "@/public/assets/icon-facebook.svg";
import TwitterIcon from "@/public/assets/icon-twitter.svg";
import InstagramIcon from "@/public/assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute bottom-0 -z-20 bg-[#F3EDE7] w-full h-[500px]"></div>
      <div className="md:px-10">
        <div
          className="max-w-[1110px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8
          pb-18 pt-14"
        >
          <Link href="/">
            <HomeIcon className="text-dark-blue" />
          </Link>
          <p className="text-[#49566D]">Copyright - Suite</p>
          <ul className="flex items-center gap-7">
            <li>
              <a href="#" className="hover:opacity-70">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-70">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}