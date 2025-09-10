"use client";

import { ANGOLA_PINS, MapWithPins } from "@/components/MapWithPins";
import Slider from "@/components/Slider";
import { motion } from "framer-motion";

const teamimagesData = [
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
  {
    image: "https://placehold.co/400",
    alt: "placeholder",
  },
];

export const AboutUs = () => {
  return (
    <div className="py-28">
      <div className="custom-container grid gap-32">
        <section id="who-we-are" data-scroll-section>
          <div className="text-center">
            <motion.h2
              className="heading-6xl font-extrabold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Who We Are
            </motion.h2>
            <motion.h3
              className="heading-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              A Trusted Partner in Angola’s Mining & Energy
            </motion.h3>
          </div>
          <div className="grid xl:grid-cols-2 gap-6 mt-10">
            <div className="body-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <motion.span className="text-primary">
                  Georalium Mining & Energy
                </motion.span>{" "}
                is a local Angolan firm supporting the mining sector with
                specialized services for investors and operators—reducing risk
                and streamlining market entry.
              </motion.p>
              <ul className="list-disc pl-10">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Local content & legal support for investments
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Supply-chain mapping and operational readiness
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Environmental compliance and project evaluation
                </motion.li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <motion.img
                src="/LuandaBg.jpg"
                alt="Luanda by Carlos César"
                className="shadow-sm rounded-lg"
              />
            </motion.div>
          </div>
        </section>
        <section data-scroll-section>
          <div>
            <motion.h3
              className="heading-4xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Bringing Efficiency Through Innovative IT Services
            </motion.h3>
            <motion.h4
              className="heading-2xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Technology that supports operations at every stage
            </motion.h4>
          </div>
          <motion.div className="grid gap-6 mt-10">
            <Slider
              className="py-1"
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              pagination={false}
              loop={false}
              spaceBetween={24}
              slidesPerView={3}
              items={[
                <div className="card p-2 overflow-hidden shadow-sm">
                  <figure>
                    <motion.img
                      src="/viabilitystudiesBg.png"
                      className="aspect-square"
                      alt="Shoes"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </figure>
                  <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center">
                    <p>
                      Viability studies, tailor-made software,
                      web/intranet/extranet
                    </p>
                  </div>
                </div>,
                <div className="card p-2 overflow-hidden shadow-sm">
                  <figure>
                    <motion.img
                      src="/systemadminBg.png"
                      className="aspect-square"
                      alt="Shoes"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </figure>
                  <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center">
                    <p>
                      System administration, security, support & maintenance
                    </p>
                  </div>
                </div>,
                <div className="card p-2 overflow-hidden shadow-sm">
                  <figure>
                    <motion.img
                      src="/trainingBg.png"
                      className="aspect-square"
                      alt="Shoes"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </figure>
                  <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center min-h-[120px] flex items-center">
                    <p>Training (IT)</p>
                  </div>
                </div>,
              ]}
            />
          </motion.div>
        </section>
      </div>
      <section data-scroll-section className="mt-32">
        <div className="custom-container">
          <motion.h3
            className="heading-4xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            A Multi-Disciplinary Team Dedicated to Mining Excellence
          </motion.h3>
          <motion.h4
            className="heading-2xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            International specialists with decades of experience; deep knowledge
            of mining standards.
          </motion.h4>
        </div>
        <motion.div className="my-10">
          <Slider
            pagination={false}
            navigation
            slidesPerView={6}
            items={teamimagesData?.map((image) => (
              <motion.img
                src={image.image}
                alt={image.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}
          />
        </motion.div>
        <div className="text-right flex justify-end px-4 ">
          <motion.p
            className="heading-3xl italic w-full lg:w-2/4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            “Behind every <strong>successful</strong> project is a team that
            knows the <strong>ground</strong>, the <strong>market</strong>, and
            the <strong>people”</strong>
          </motion.p>
        </div>
      </section>
      <section data-scroll-section className="mt-32">
        <MapWithPins imageSrc="/AngolaMap.png" pins={ANGOLA_PINS} />
      </section>
    </div>
  );
};
