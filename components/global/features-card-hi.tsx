import React from "react";
import { useId } from "react";

export function FeaturesCard() {
  return (
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "किसान-मैत्री वेब डैशबोर्ड",
    description:
      "स्वच्छ और क्षेत्रीय भाषाओं में डैशबोर्ड जो रियल-टाइम खेत की जानकारी और अलर्ट इस तरह दिखाते हैं कि हर किसान आसानी से समझ सके।",
  },
  {
    title: "IoT आधारित पर्यावरणीय डेटा संग्रह और विश्लेषण प्रणाली",
    description:
      "खेत में लगे सेंसर तापमान, मिट्टी, नमी और अन्य कारकों को ट्रैक करते हैं—और इस डेटा को उपयोगी जानकारी में बदलते हैं ताकि खेती और बेहतर हो सके।",
  },
  {
    title: "सटीक फसल निगरानी और रोग पहचान",
    description:
      "हमारा ड्रोन आसमान से फसल की निगरानी करता है और एआई की मदद से कीटों, बीमारियों और पौधों में तनाव का जल्दी पता लगाता है—समय रहते समाधान के लिए।",
  },
  {
    title: "विस्तारशीलता और स्वचालित संचालन",
    description:
      "छोटे खेतों से लेकर बड़े खेतों तक, AV10 खुद को अनुकूल बनाकर स्वचालित रूप से काम करता है—जिससे समय, श्रम और संसाधनों की बचत होती है।",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][];
  size?: number;
}) => {
  const p: [number, number][] = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x={-12}
          y={4}
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: { width: number; height: number; x: number; y: number; squares: [number, number][]; [key: string]: unknown }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: [number, number]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
