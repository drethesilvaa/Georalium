"use client";

import Slider from "@/components/Slider";
import { useLocoAnchors } from "@/hooks/useLocoAnchors";
import {
  ChartBarIcon,
  ChartLineUpIcon,
  FileSearchIcon,
  FileTextIcon,
  GlobeHemisphereEastIcon,
  HandshakeIcon,
  MegaphoneSimpleIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/providers/TranslationProvider";

export const Solutions = () => {
  const { dict, lang } = useTranslation();
  const { onAnchorClick } = useLocoAnchors();

  const solutionsData = [
    {
      subtitle: dict.solutions.operator.subtitle,
      title: dict.solutions.operator.title,
      img: "/OperatorBg.png",
      imgAlt: dict.solutions.operator.imgAlt,
      ctaButton: dict.solutions.operator.ctaButton,
      items: [
        {
          icon: (
            <ChartBarIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.operator["item1-title"],
        },
        {
          icon: (
            <TruckIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.operator["item2-title"],
        },
        {
          icon: (
            <GlobeHemisphereEastIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.operator["item3-title"],
        },
        {
          icon: (
            <HandshakeIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.operator["item4-title"],
        },
      ],
    },
    {
      subtitle: dict.solutions.investor.subtitle,
      title: dict.solutions.investor.title,
      img: "/InvestorsBg.png",
      imgAlt: dict.solutions.investor.imgAlt,
      ctaButton: dict.solutions.investor.ctaButton,
      items: [
        {
          icon: (
            <FileSearchIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.investor["item1-title"],
        },
        {
          icon: (
            <ChartLineUpIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.investor["item2-title"],
        },
        {
          icon: (
            <FileTextIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.investor["item3-title"],
        },
        {
          icon: (
            <MegaphoneSimpleIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: dict.solutions.investor["item4-title"],
        },
      ],
    },
  ];

  return (
    <div
      id="solutions"
      data-scroll-section
      className="min-h-screen h-full py-28 bg-[url('/SolutionsBg.png')] bg-cover bg-center relative "
    >
      <div className="bg-black/75 absolute h-full w-full top-0"></div>
      <div className="grid h-full items-center">
        <div className="text-white z-10">
          <motion.h4
            className="custom-container heading-6xl uppercase text-center font-extrabold"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {dict.solutions.title}
          </motion.h4>
          <div className="grid mt-10 px-6">
            <Slider
              center
              animation={false}
              pagination={false}
              auto={false}
              loop={false}
              navigation
              className="slider--solutions"
              slidesPerView={1.5}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.5,
                },
              }}
              spaceBetween={"24px"}
              items={solutionsData.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="p-6 solution--card">
                    <div>
                      <motion.h3
                        className="heading-3xl"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        {item.subtitle}
                      </motion.h3>
                      <motion.h4
                        className="heading-5xl font-semibold"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                      >
                        {item.title}
                      </motion.h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <motion.img
                          viewport={{ once: true }}
                          src={item.img}
                          alt={item.imgAlt}
                          className="rounded-lg shadow-sm max-h-[420] object-cover w-full"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-6 items-center content-center">
                        {item.items?.map((content, k) => (
                          <motion.div
                            key={k}
                            className="flex gap-6 items-center p-2 bg-white shadow-xs rounded-lg h-full text-[#00091A]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 0.4 + 0.1 * k,
                            }}
                          >
                            <motion.div>{content.icon}</motion.div>
                            <motion.p className="body-2xl">
                              {content.title}
                            </motion.p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-10">
                    <motion.button
                      data-target="#contacts"
                      onClick={onAnchorClick}
                      className="btn btn-glass btn-glass--dark md:btn-xl uppercase font-normal text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    >
                      {item.ctaButton}
                    </motion.button>
                  </div>
                </Fragment>
              ))}
            ></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
