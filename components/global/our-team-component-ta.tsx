"use client";
import Image from "next/image";
import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useOutsideClick(() => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "குழுத் தலைவர் மற்றும் ஹார்ட்வேர் நிபுணர்",
    title: "அரவிந்த் மிராஸ் என்",
    src: "/m1.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/aravind-miras-2789b8156/",
    content: () => {
      return (
        <p>
        ஒரு தொலைநோக்குடைய கட்டுநர் மற்றும் முறைமையியல் சிந்தனையாளர், அரவிந்த் AV10 திட்டத்தை வழிநடத்தி, ட்ரோன் வடிவமைப்பு, எம்பெடெட் அமைப்புகள் மற்றும் ஹார்ட்வேர் ஒருங்கிணைப்புகளை மிகுந்த துல்லியத்துடன் செய்து வருகிறார்.
        </p>
      );
    },
  },
  {
    description: "பயன்பாட்டு மென்பொருள் உருவாக்குநர்",
    title: "விதுஷினி கே",
    src: "/m2.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/vidhushini-k2005/",
    content: () => {
      return (
        <p>
         எங்கள் செயலியின் மூல இயக்க சக்தியாக, விதுஷினி எளிமையான, நம்பகமான மற்றும் பயனர் நட்பான செயலிகளை உருவாக்கி, AV10 வசதிகளை ஒவ்வொரு விவசாயிக்கும் அணுகக்கூடியதாக மாற்றுகிறார்.
        </p>
      );
    },
  },

  {
    description: "UI/UX வடிவமைப்பாளர் மற்றும் செயலி டெவலப்பர்",
    title: "சுதர்சனா ஏ",
    src: "/m3.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/sutharsana-anandan-8b7819255/",
    content: () => {
      return (
        <p>
       துல்லியமான பார்வையும் பயனர்களின் அனுபவத்திற்கான கருணையும் கொண்ட சுதர்சனா, எளிதாக பயன்படுத்தக்கூடிய இடைமுகங்களை வடிவமைத்து, செயலியின் முக்கிய அம்சங்களையும் மேம்படுத்துகிறார்.
        </p>
      );
    },
  },
  {
    description: "இயந்திரக் கற்றல் (ML) மேம்பாட்டாளர்",
    title: "கார்த்திக் ஆர்",
    src: "/m4.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/karthick-rk07/",
    content: () => {
      return (
        <p>
          தரவுகளை அறிவாக மாற்றும் வல்லுநர் கார்த்திக், பயிர் பிரச்சனைகளை முன்கூட்டியே கண்டறிந்து, விவசாயத் தீர்வுகளை மேம்படுத்தும் இயந்திரக் கற்றல் மாதிரிகளை உருவாக்குகிறார் மற்றும் பயிற்சி அளிக்கிறார்.
        </p>
      );
    },
  },
  {
    description: "எங்கள் பிரியமான வழிகாட்டி",
    title: "கார்த்திகேயன் எஸ்",
    src: "/m5.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
         குழுவிற்கான ஒளியாக இருப்பவர் கார்த்திகேயன், தனது ஞானம், தொழில்நுட்ப ஆழம் மற்றும் தொடர்ந்த ஆதரவுடன் AV10-இன் பார்வையை வடிவமைத்து, குழுவை ஒருமுகப்படுத்துகிறார்.
        </p>
      );
    },
  },
  {
    description: "எங்கள் பிரியமான வழிகாட்டி",
    title: "பூபாலன் எஸ்",
    src: "/m7.png",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/er-boobalan-s-0318722a4/",
    content: () => {
      return (
        <p>
        பூபாலனின் வழிகாட்டுதல், திட்டத்தின் ஒவ்வொரு கட்டத்திலும் குழுவை வலுப்படுத்தும் மூலதனம். அவரது மூலோபாய அறிவும், சீரான அணுகுமுறையும் குழுவுக்கு வலுவாக இருக்க உதவுகிறது.
        </p>
      );
    },
  },
  
];
