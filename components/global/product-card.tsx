"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

interface productProps{
  title: string;
  description: string;
  image: string;

}

export function ProductCard({title, description, image}:productProps) {
  return (
      <div className="w-96">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt="product"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span> Unavailable </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-green-600">
            Coming Soon
          </span>
        </button>
      </BackgroundGradient>
      </div>
    
  );
}
