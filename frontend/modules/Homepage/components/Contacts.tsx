"use client";

import { ContactForm } from "@/components/Forms/ContactForm";
import { AtIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";

export const Contacts = () => {
  return (
    <div
      id="contacts"
      data-scroll-section
      className="min-h-screen h-full py-28"
    >
      <div className="custom-container grid gap-32">
        <section>
          {/* Section Title */}
          <div className="text-center">
            <motion.h2
              className="heading-6xl font-extrabold"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Contact Us
            </motion.h2>
            <motion.h3
              className="heading-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Let’s Talk About Your Next Project
            </motion.h3>
          </div>

          {/* Contact Info Section */}
          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Image */}
              <motion.img
                src="/ContactUsBg.jpg"
                alt="Group of People in the Conference Room by Christina Morillo"
                className="rounded-lg w-full object-cover shadow-sm h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              />

              {/* Contact Details */}
              <motion.div
                className="bg-blue--light p-4 grid gap-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                {/* Email */}
                {/* <div className="grid gap-2 justify-items-center text-center">
                  <AtIcon size={36} color={"#022161"} />
                  <a
                    href="mailto:info@georalium.com"
                    className="text-xl font-semibold text-[#00091A] hover:underline break-words"
                  >
                    georaliuminfo@georalium.com
                  </a>
                </div> */}

                {/* Phone */}
                {/* <div className="grid gap-2 justify-items-center text-center">
                  <PhoneIcon size={36} color={"#022161"} />
                  <div className="flex gap-2">
                    <a
                      href="tel:+244925041069"
                      className="text-xl font-semibold text-[#00091A] hover:underline"
                    >
                      +244 925 041 069
                    </a>
                    |
                    <a
                      href="tel:+244222747198"
                      className="text-xl font-semibold text-[#00091A] hover:underline"
                    >
                      222 747 198
                    </a>
                  </div>
                </div> */}

                {/* Map */}
                <div className="grid gap-2 justify-items-center text-center items-center">
                  <MapPinIcon size={36} color={"#022161"} />
                  <a
                    href="https://www.google.com/maps?q=Urbanização Boa Vida Loja A02,Via Expresso,
                    Belas, Angola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-[#00091A] hover:underline"
                  >
                    Urbanização Boa Vida, Loja A02 <br />
                    Via Expresso, Belas, Angola
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="bg-blue--lighter p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <ContactForm
                recaptchaSiteKey={"6LeaX7krAAAAAEuWEniMwHCJ8PhekYndsNezSoHV"}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};
