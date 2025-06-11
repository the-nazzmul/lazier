import { ContainerScroll } from "@/components/global/container-scroll";
import { HeroParallax } from "@/components/global/hero-parallax";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { CLIENTS, PRODUCTS } from "@/lib/constant";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* hero section */}
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
        <div className="flex flex-col mt-[100px] md:mt-[50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col md:mb-8">
                <Button
                  size="lg"
                  className="p-8 mb-8 md:mb-4 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate your work with Lazier
                </h1>
              </div>
            }
          >
            <Image
              src={`/temp-banner.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      {/* brands scroll section */}
      <section className="py-16">
        <InfiniteMovingCards
          className="md:mt-[18rem] mt-[-50px]"
          items={CLIENTS}
          direction="right"
          speed="slow"
        />
      </section>
      {/* parallax */}
      <section>
        <HeroParallax products={PRODUCTS} />
      </section>
    </main>
  );
}
