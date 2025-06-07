import Header from "./ui/header";
import Footer from "./ui/footer";
import Image from "next/image";
import CurvedLine from "@/public/assets/pattern-curved-line-1.svg";
import CurvedLineTwo from "@/public/assets/pattern-curved-line-2.svg";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 md:px-10">
          <div className="max-w-[1110px] mx-auto lg:grid lg:grid-cols-[1fr_190px] gap-24">
            <div className="mt-20 lg:mt-16">
              <div className="w-full md:pt-22 lg:pt-25 md:pb-10 lg:pb-23 relative">
                <h1 className="leading-11 md:leading-16 lg:leading-20">
                  A{" "}
                  <strong>
                    super{" "}
                    <span className="relative">
                      solution
                      <CurvedLine className="w-full h-auto absolute -top-10 right-0" />
                    </span>{" "}
                  </strong>
                  <br className="hidden md:block" />
                  for your
                  <strong> business.</strong>
                </h1>
                <p className="mt-8 md:mt-10 lg:text-lg md:max-w-[350px] leading-7 lg:leading-8">
                  Our marketing and sales automations help you scale your
                  outreach to get more leads for your company.
                </p>
                <button className="mt-10 md:mt-13 py-4 px-8 bg-dark-blue text-white gradient-bg">
                  Request Beta Access
                </button>
                <Image
                  src={"/assets/image-hero-landscape.png"}
                  alt="hero"
                  width={300}
                  height={500}
                  className="block md:hidden mt-16 w-full"
                />
                <Image
                  src={"/assets/image-hero-portrait.png"}
                  alt="hero"
                  width={350}
                  height={600}
                  className="hidden md:block absolute top-0 right-0 -z-10 h-full"
                />
              </div>
            </div>
            <div className="mt-16 md:mt-22 lg:mt-0 text-center lg:text-left flex flex-col md:flex-row lg:flex-col justify-around lg:justify-center items-center gap-8 lg:gap-16">
              <p>
                <strong className="text-5xl">2k+</strong>
                <span className="block uppercase">companies</span>
              </p>
              <p>
                <strong className="text-5xl">8</strong>
                <span className="block uppercase">languages</span>
              </p>
              <p>
                <strong className="text-5xl">12M</strong>
                <span className="block uppercase">leads</span>
              </p>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="md:px-10 mt-14 md:mt-23 lg:mt-36 overflow-hidden">
            <div className="relative max-w-[1110px] mx-auto">
              <div className="w-full h-[181px] lg:h-[55px]"></div>
              <Image
                src={"/assets/image-jeremy-small.png"}
                alt="jeremy"
                width={252}
                height={402}
                className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 z-10"
              />
              <Image
                src={"/assets/image-jeremy-large.png"}
                alt="jeremy"
                width={375}
                height={600}
                className="hidden lg:block absolute top-0 lg:left-23 z-10"
              />
              <Image
                src={"/assets/pattern-blur.svg"}
                alt="curved line"
                width={400}
                height={200}
                className="absolute top-25 left-1/2 -translate-x-1/2 lg:left-3 lg:bottom-0 lg:top-auto lg:translate-x-0 z-9"
              />
              <div className="bg-[#172339] text-[#F3EDE7] lg:flex justify-end relative text-center lg:text-left rounded-lg">
                <div className="pt-[338px] pb-26 lg:py-22 px-4 md:px-15 lg:px-0 lg:w-[350px] lg:mr-31">
                  <CurvedLineTwo className="absolute top-[261px] lg:top-[161px] left-1/2 -translate-x-1/2 w-[50px] h-[40px] lg:w-[64px] lg:h-[52px]" />
                  <h2 className="text-[2.5rem] lg:text-5xl leading-12 lg:leading-14 text-[#FAF8F6]">
                    It just <strong>works.</strong>
                  </h2>
                  <p className="mt-10 text-lg lg:text-xl leading-8 lg:leading-9">
                    “I really like how it is an all-in-one solution that handle
                    many of the tasks that you would normally need separate
                    tools to do the same job. This thing is a miracle worker.”
                  </p>
                  <strong className="mt-10 block text-lg text-[#FAF8F6] uppercase">
                    Jeremy Robinson, CEO
                  </strong>
                  <p className="uppercase">CMO, FYLO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
