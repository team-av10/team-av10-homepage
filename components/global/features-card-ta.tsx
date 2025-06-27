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
    title: "விவசாயி நட்பான வலை டாஷ்போர்டுகள்",
    description:
      "துணைமொழியில் சுத்தமாக உருவாக்கப்பட்ட டாஷ்போர்டுகள், நேரடி புல தகவல்களையும் எச்சரிக்கைகளையும் விவசாயிகள் எளிதாகப் புரிந்து கொள்ளும் விதத்தில் காட்டுகின்றன.",
  },
  {
    title: "IoT அடிப்படையிலான சூழ்நிலை தரவுச் சேகரிப்பு மற்றும் பகுப்பாய்வு அமைப்புகள்",
    description:
      "மட்டத்தில் உள்ள சென்சார்கள் வெப்பநிலை, மண், ஈரப்பதம் உள்ளிட்ட தகவல்களை பதிவு செய்து, அவற்றை விவசாய மேம்பாட்டுக்கான மதிப்புள்ள உள்ளடக்கங்களாக மாற்றுகின்றன.",
  },
  {
    title: "துல்லியமான பயிர் கண்காணிப்பு மற்றும் நோய் கண்டறிதல்",
    description:
      "எங்கள் ட்ரோன், ஆகாயத்திலிருந்து பயிர்களை கண்காணித்து, AI-யின் உதவியுடன், பூச்சிகள், நோய்கள் மற்றும் தாவர அழுத்தத்தை ஆரம்ப கட்டத்திலேயே கண்டறிகிறது.",
  },
  {
    title: "விரிவாக்கக்கூடிய மற்றும் தானியங்கி செயல்பாடு",
    description:
      "சிறிய பண்ணையிலிருந்தும் பெரிய புலங்கள்வரைக்கும், AV10 தன்னைச் சாதகமாக மாற்றிக் கொண்டு தானாக இயங்கி, நேரம், உழைப்பு மற்றும் வளங்களை மிச்சப்படுத்துகிறது.",
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
