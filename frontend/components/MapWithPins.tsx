"use client"
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr";

/**
 * Pin positions are given in percentages (from the top-left of the image).
 * This keeps everything responsive as the map resizes.
 */
type Pin = {
    id: string;
    label: string;
    topPct: number;   // 0–100
    leftPct: number;  // 0–100
};

type MapWithPinsProps = {
    imageSrc: string;        // e.g. "/AngolaMap.png"
    pins: Pin[];
    className?: string;
};

export function MapWithPins({
    imageSrc,
    pins,
    className = "",
}: MapWithPinsProps) {
    const [activeId, setActiveId] = React.useState<string | null>(null);

    // close any open label when clicking/tapping outside
    React.useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            // ignore clicks on elements that have data-pin-root
            if (!target?.closest?.("[data-pin-root]")) setActiveId(null);
        };
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, []);

    return (
        <div
            className={`flex items-center justify-center shrink-0 custom-container ${className}`}
        >
            <div className="grid lg:flex gap-6 items-center justify-center justify-items-center w-full">
                {/* MAP */}
                <div
                    className="
            relative w-full max-w-[460px]
            aspect-[320/350]  /* keeps the original ratio, scales responsively */
            rounded-md overflow-hidden
          "
                    style={{
                        backgroundImage: `url(${imageSrc})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    aria-label="Map of Angola with locations"
                    role="img"
                >
                    {pins.map((pin) => {
                        const isActive = activeId === pin.id;
                        return (
                            <div
                                key={pin.id}
                                data-pin-root
                                className="absolute"
                                style={{
                                    top: `${pin.topPct}%`,
                                    left: `${pin.leftPct}%`,
                                    transform: "translate(-50%, -100%)", // position pin tip at the coordinate
                                }}
                            >
                                {/* Interactive pin */}
                                <button
                                    type="button"
                                    className="
                                    bg-white
                    group relative outline-none
                    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:primary rounded-full
                  "
                                    aria-haspopup="true"
                                    aria-expanded={isActive}
                                    aria-label={pin.label}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveId(isActive ? null : pin.id);
                                    }}
                                    onMouseEnter={() => setActiveId(pin.id)}
                                    onMouseLeave={() => setActiveId(null)}
                                    onFocus={() => setActiveId(pin.id)}
                                    onBlur={() => setActiveId(null)}
                                >
                                    <motion.div
                                        initial={false}
                                        animate={{ y: isActive ? -2 : 0, scale: isActive ? 1.05 : 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 28 }}
                                        className="
                      flex items-center justify-center
                      rounded-full shadow-lg
                    "
                                    >
                                        <MapPinIcon
                                            size={38}
                                            className={`drop-shadow-sm  ${isActive ? "text-[#274D9C]" : "text-[#022161]"} `}
                                            weight="fill"
                                            aria-hidden
                                        />
                                        {/* pulsing dot to draw attention */}
                                        <motion.span
                                            className="absolute -bottom-1.5 h-2 w-2 rounded-full bg-[#022161]"
                                            style={{ transform: "translateX(-50%)" }}
                                            initial={{ opacity: 0.6, scale: 1 }}
                                            animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.15, 1] }}
                                            transition={{ repeat: Infinity, duration: 1.6 }}
                                        />
                                    </motion.div>

                                    {/* Tooltip / label */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                                                animate={{ opacity: 1, y: -6, scale: 1 }}
                                                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                                className="
                          absolute left-1/2 -translate-x-1/2
                          -top-3 -translate-y-full
                          whitespace-nowrap
                          rounded-md bg-[#274D9C] backdrop-blur
                          px-3 py-1.5 text-sm font-medium text-white
                          shadow-xl ring-1 ring-black/10
                        "
                                                role="tooltip"
                                            >
                                                {pin.label}
                                                <span
                                                    className="
                            pointer-events-none absolute left-1/2 top-full
                            -translate-x-1/2
                            border-8 border-transparent border-t-[#274D9C]
                            drop-shadow
                          "
                                                    aria-hidden
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* TEXT BLOCK */}
                <div className="font-bold text-center lg:text-left px-4 lg:px-0">
                    <p className="heading-5xl max-w-[28ch]">
                        Our Presence Across <span className="text-angola-red">Angola</span>
                    </p>
                    <p className="body-2xl mt-2">Luanda • Huambo • Lubango • Saurimo</p>
                </div>
            </div>
        </div>
    );
}

export const ANGOLA_PINS: Pin[] = [
    { id: "luanda", label: "Luanda", topPct: 36, leftPct: 20 },
    { id: "huambo", label: "Huambo", topPct: 58, leftPct: 32 },
    { id: "lubango", label: "Lubango", topPct: 81, leftPct: 21 },
    { id: "saurimo", label: "Saurimo", topPct: 34, leftPct: 68 },
];

