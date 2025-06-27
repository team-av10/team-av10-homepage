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
    description: "Team Lead & Hardware",
    title: "Aravind Miras N",
    src: "/m1.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/aravind-miras-2789b8156/",
    content: () => {
      return (
        <p>
          A visionary builder and systems thinker, Aravind leads the AV10 project, handling drone design, embedded systems, and overall hardware integration with precision and passion.
        </p>
      );
    },
  },
  {
    description: "Application Developer",
    title: "Vidhushini K",
    src: "/m2.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/vidhushini-k2005/",
    content: () => {
      return (
        <p>
         The coding engine behind our app, Vidhushini crafts seamless, reliable, and user-friendly applications that bring AV10&apos;s features to life for every farmer.
        </p>
      );
    },
  },

  {
    description: "UI/UX Designer & Application Developer",
    title: "Sutharsana A",
    src: "/m3.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/sutharsana-anandan-8b7819255/",
    content: () => {
      return (
        <p>
       With a sharp eye for detail and empathy for users, Sutharsana designs intuitive interfaces and smooth user experiences, while also developing core app features.
        </p>
      );
    },
  },
  {
    description: "ML Developer",
    title: "Karthick R",
    src: "/m4.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/karthick-rk07/",
    content: () => {
      return (
        <p>
          Karthick transforms data into decisions. He builds and trains machine learning models that help AV10 detect crop issues early and improve agricultural insight.
        </p>
      );
    },
  },
  {
    description: "Our Beloved Mentor",
    title: "Karthikeyan S",
    src: "/m5.jpg",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
         A guiding light to the team, Karthikeyan brings wisdom, technical depth, and constant support—shaping AV10&apos;s vision and keeping the team focused.
        </p>
      );
    },
  },
  {
    description: "Our Beloved Mentor",
    title: "Boobalan S",
    src: "/m7.png",
    ctaText: "LinkedIn",
    ctaLink: "https://www.linkedin.com/in/er-boobalan-s-0318722a4/",
    content: () => {
      return (
        <p>
        Boobalan&apos;s mentorship empowers the team with strategic guidance, problem-solving insights, and a calm presence that strengthens every stage of the project.
        </p>
      );
    },
  },
  
];
