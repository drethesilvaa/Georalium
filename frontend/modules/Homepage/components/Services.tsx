"use client";

import GlassCard from "@/components/GlassCard";
import Slider from "@/components/Slider";
import { useTranslation } from "@/providers/TranslationProvider";
import {
  ChartBarIcon,
  FileTextIcon,
  GraduationCapIcon,
  LeafIcon,
  MagnifyingGlassIcon,
  ScalesIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

export const Services = () => {
  const { dict, lang } = useTranslation();

  const servicesData = [
    {
      icon: <MagnifyingGlassIcon size={94} weight="duotone" />,
      title: dict.services.service1,
    },
    {
      icon: <FileTextIcon size={94} weight="duotone" />,
      title: dict.services.service2,
    },
    {
      icon: <LeafIcon size={94} weight="duotone" />,
      title: dict.services.service3,
    },
    {
      icon: <TruckIcon size={94} weight="duotone" />,
      title: dict.services.service4,
    },
    {
      icon: <ChartBarIcon size={94} weight="duotone" />,
      title: dict.services.service5,
    },
    {
      icon: <ScalesIcon size={94} weight="duotone" />,
      title: dict.services.service6,
    },
    {
      icon: <GraduationCapIcon size={94} weight="duotone" />,
      title: dict.services.service7,
    },
  ];
  return (
    <div
      data-scroll-section
      className="h-screen bg-[url('/ServicesBg.png')] bg-cover bg-center relative"
    >
      {/* Option A: let overlay exist but not capture events */}
      <div className="bg-black/40 absolute inset-0 pointer-events-none"></div>

      {/* Make this positioned so z-index applies */}
      <div
        id="services"
        className="grid custom-container h-full items-center relative z-10"
      >
        <div className="text-white">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading-3xl"
          >
            {dict.services.title}
          </motion.h4>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="heading-5xl font-semibold"
          >
            {dict.services.subtitle}
          </motion.h3>
          <motion.div className="grid mt-10">
            <Slider
              auto={false}
              loop={false}
              className=""
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={"24px"}
              items={servicesData.map((item, idx) => (
                <GlassCard
                  title={item.title}
                  icon={item.icon}
                  className="text-white min-h-[226px]"
                />
              ))}
            ></Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
