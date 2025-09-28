"use client";
import Slider from "@/components/Slider";
import { useLocoAnchors } from "@/hooks/useLocoAnchors";
import { useTranslation } from "@/providers/TranslationProvider";
import { ArrowCircleDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

export const Hero = () => {
  const { dict } = useTranslation();
  const { onAnchorClick } = useLocoAnchors();

  return (
    <div
      id="hero"
      data-scroll-section
      className="min-h-screen flex items-center h-full py-32 bg-[url('/HeroBg.png')] bg-cover bg-center relative "
    >
      <div className="bg-black/45 absolute h-full w-full top-0"></div>
      <div className="grid custom-container h-full items-center content-center gap-10">
        <div className="col-span-full xl:col-span-7 z-[1] ">
          <motion.h1
            className="heading-6xl font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {dict.hero.title1} <br /> {dict.hero.title2}.
          </motion.h1>
          <motion.h3
            className="heading-2xl mt-4 xl:w-3/4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            {dict.hero.subtitle}
          </motion.h3>
          <motion.button
            data-target="#who-we-are"
            onClick={onAnchorClick}
            className="btn md:btn-lg btn-secondary mt-6"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            {dict.hero["cta-button"]} <ArrowCircleDownIcon size={28} />
          </motion.button>
        </div>
        <div className="hidden xl:grid gap-4 col-span-full xl:col-start-9 xl:col-span-4">
          <motion.div
            className="card bg-blue w-full bg-base-100 card-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <div className="card-body">
              <p className="heading-xl italic text-neutral w-2/3">
                “{dict.hero.card1.quote1}{" "}
                <span className="font-semibold">{dict.hero.card1.quote2}</span>”
              </p>
              <motion.img
                src="/pickaxe.png"
                className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]"
                alt=""
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: 15, y: -10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="card bg-blue--light w-full bg-base-100 card-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <div className="card-body">
              <p className="heading-font heading-3xl text-neutral font-black">
                8
              </p>
              <p className="heading-xl text-neutral body-font">
                {dict.hero.card2.title}
              </p>
              <motion.img
                src="/rocket.png"
                className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]"
                alt=""
                initial={{ y: 0 }}
                animate={{ y: 5 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.5,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="card bg-blue--lighter w-full bg-base-100 card-md shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <div className="card-body">
              <p className="heading-xl text-neutral font-black w-2/3">
                {dict.hero.card3.title}
              </p>
              <motion.img
                src="/salve-o-mundo.png"
                className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]"
                alt=""
                initial={{ rotate: 0, scale: 1, opacity: 0 }}
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="grid xl:hidden gap-4 col-span-full">
          <Slider
            animation={false}
            pagination={false}
            slidesPerView={1}
            items={[
              <motion.div
                className="card bg-blue w-full h-full bg-base-100 card-md shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="card-body min-h-[120px]">
                  <p className="heading-xl italic text-neutral w-2/3">
                    “{dict.hero.card1.quote1}{" "}
                    <span className="font-semibold">
                      {dict.hero.card1.quote2}
                    </span>
                    ”
                  </p>
                  <motion.img
                    src="/pickaxe.png"
                    className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]"
                    alt=""
                    initial={{ rotate: 0, y: 0 }}
                    animate={{ rotate: 15, y: -10 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>,
              <motion.div
                className="card bg-blue--light h-full w-full bg-base-100 card-md shadow-sm "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="card-body min-h-[120px]">
                  <p className="heading-font heading-3xl text-neutral font-black">
                    8
                  </p>
                  <p className="heading-xl text-neutral body-font">
                    {dict.hero.card2.title}
                  </p>
                  <motion.img
                    src="/rocket.png"
                    className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]"
                    alt=""
                    initial={{ y: 0 }}
                    animate={{ y: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 1.5,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>,
              <motion.div
                className="card bg-blue--lighter h-full w-full bg-base-100 card-md shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="card-body min-h-[120px]">
                  <p className="heading-xl text-neutral font-black w-2/3">
                    {dict.hero.card3.title}
                  </p>
                  <motion.img
                    src="/salve-o-mundo.png"
                    className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]"
                    alt=""
                    initial={{ rotate: 0, scale: 1, opacity: 0 }}
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>,
            ]}
          ></Slider>
        </div>
      </div>
    </div>
  );
};
