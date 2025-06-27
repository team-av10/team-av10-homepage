import { AceHeading } from "@/components/global/ace-heading";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { FeaturesCard } from "@/components/global/features-card";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/Lamp";
import { ExpandableCardDemo } from "@/components/global/our-team-component";
import { clients, products } from "@/lib/constant";
import Documentation from "./Documentation";

export default function Home() {
  return (
   <main>
    
    <section className="h-screen w-full  bg-black rounded-md  !overflow-visible relative flex flex-col items-center  antialiased mt-[-100px]">
    <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
    {/* <div className="flex flex-col mt-[-100px] md:mt-[-50px]"> */}
      <ContainerScroll
        titleComponent ={
          <div className="flex items-center flex-col">
          <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold animate-slide-in-up">
          Harvesting Tomorrow&apos;s Insights
          </h1>
        </div>
        }
      />
    {/* </div> */}
    </div>
    </section>
    <section className="flex items-center justify-center">
    <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
    </section>
    <section>
      <HeroParallax products={products}></HeroParallax>
    </section>
    <section className="mt-[-300px]">
    <LampComponent />
    </section>
    <section className="mt-[-300px]">
      <FeaturesCard/>
    </section>
    <section className="mt-[-200px]">
    <AceHeading title="Our Crew"/>
    </section>
    <section className="mt-[-150px]">
      <ExpandableCardDemo/>
    </section>
    <section>
        <Documentation/>
    </section>
   </main>
  );
}
