"use client";

import { ANGOLA_PINS, MapWithPins } from "@/components/MapWithPins";
import Slider from "@/components/Slider";
import { useTranslation } from "@/providers/TranslationProvider";
import { motion } from "framer-motion";

const teamimagesData = [
  {
    image: "/teamImages/pexels-pavel-danilyuk-8111815.jpg",
    alt: "Figurine of Justice on Table in Office",
  },
  {
    image: "/teamImages/pexels-divinetechygirl-1181438.jpg",
    alt: "Group of Women Standing Near Desk",
  },
  {
    image: "/teamImages/pexels-divinetechygirl-1181622.jpg",
    alt: "Women Colleagues gathered inside Conference Room",
  },
  {
    image: "/teamImages/adult-1867771_1920.jpg",
    alt: "Adult, Construction, Hard hat image",
  },
  {
    image: "/teamImages/pexels-pavel-danilyuk-8111876.jpg",
    alt: "A Woman in Black Blazer Holding a Clipboard",
  },
  {
    image: "/teamImages/pexels-fauxels-3184339.jpg",
    alt: "Man Wearing Brown Suit Jacket",
  },
  {
    image: "/teamImages/pexels-illustrate-digital-ug-924569584-19982408.jpg",
    alt: "Worker at Construction Site",
  },
  {
    image: "/teamImages/pexels-divinetechygirl-1181622.jpg",
    alt: "Women Colleagues gathered inside Conference Room",
  },
  {
    image: "/teamImages/adult-1867771_1920.jpg",
    alt: "Adult, Construction, Hard hat image",
  },
  {
    image: "/teamImages/pexels-pavel-danilyuk-8111876.jpg",
    alt: "A Woman in Black Blazer Holding a Clipboard",
  },
  {
    image: "/teamImages/pexels-fauxels-3184339.jpg",
    alt: "Man Wearing Brown Suit Jacket",
  },
  {
    image: "/teamImages/pexels-illustrate-digital-ug-924569584-19982408.jpg",
    alt: "Worker at Construction Site",
  },
  {
    image: "/teamImages/pexels-divinetechygirl-1181622.jpg",
    alt: "Women Colleagues gathered inside Conference Room",
  },
  {
    image: "/teamImages/adult-1867771_1920.jpg",
    alt: "Adult, Construction, Hard hat image",
  },
  {
    image: "/teamImages/pexels-pavel-danilyuk-8111876.jpg",
    alt: "A Woman in Black Blazer Holding a Clipboard",
  },
  {
    image: "/teamImages/pexels-fauxels-3184339.jpg",
    alt: "Man Wearing Brown Suit Jacket",
  },
  {
    image: "/teamImages/pexels-illustrate-digital-ug-924569584-19982408.jpg",
    alt: "Worker at Construction Site",
  },
];

export const AboutUs = () => {
  const { dict, lang } = useTranslation();

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
              {dict.aboutus["who-we-are"].title}
            </motion.h2>
            <motion.h3
              className="heading-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.02 }}
            >
              {dict.aboutus["who-we-are"].subtitle}
            </motion.h3>
          </div>
          <div className="grid xl:grid-cols-2 gap-6 mt-10">
            <div className="body-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.04 }}
              >
                <motion.span className="text-primary">
                  Georalium Mining & Energy
                </motion.span>{" "}
                {dict.aboutus["who-we-are"].description}
              </motion.p>
              <ul className="list-disc pl-10">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.06 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["local-legal"]}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["supply-chain"]}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["investor-care"]}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                >
                  {
                    dict.aboutus["who-we-are"]["bullet-points"][
                      "legal-accounting"
                    ]
                  }
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.14 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["tax"]}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["geological"]}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                >
                  {dict.aboutus["who-we-are"]["bullet-points"]["environmental"]}
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
            {dict.aboutus["who-we-are"]["team"].title}
          </motion.h3>
          <motion.h4
            className="heading-2xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {dict.aboutus["who-we-are"]["team"].subtitle}
          </motion.h4>
        </div>
        <motion.div className="my-10">
          <Slider
            navigation
            loop
            pagination={false}
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 6 },
            }}
            items={teamimagesData?.map((image) => (
              <img
                src={image.image}
                alt={image.alt}
                className="aspect-square object-cover w-full h-full"
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
            {lang === "en" ? (
              <>
                “Behind every <strong>successful</strong> project is a team that
                knows the <strong>ground</strong>, the <strong>market</strong>,
                and the <strong>people”</strong>
              </>
            ) : (
              <>
                “Por trás de cada projeto <strong>bem-sucedido</strong> está uma
                equipa que conhece profundamente o <strong>terreno</strong>, o
                <strong>mercado</strong> e as <strong>pessoas”</strong>
              </>
            )}
          </motion.p>
        </div>
      </section>
      <div className="custom-container grid mt-32">
        <section data-scroll-section>
          <div>
            <motion.h3
              className="heading-4xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {dict.aboutus["who-we-are"]["it"].title}
            </motion.h3>
            <motion.h4
              className="heading-2xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {dict.aboutus["who-we-are"]["it"].subtitle}
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
                    <p>{dict.aboutus["who-we-are"]["it"]["card1-title"]}</p>
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
                    <p>{dict.aboutus["who-we-are"]["it"]["card2-title"]}</p>
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
                    <p>{dict.aboutus["who-we-are"]["it"]["card3-title"]}</p>
                  </div>
                </div>,
              ]}
            />
          </motion.div>
        </section>
      </div>
      <section data-scroll-section className="mt-32">
        <MapWithPins imageSrc="/AngolaMap.png" pins={ANGOLA_PINS} />
      </section>
    </div>
  );
};
