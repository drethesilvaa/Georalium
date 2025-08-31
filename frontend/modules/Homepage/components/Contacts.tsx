"use client"

import { ContactForm } from "@/components/Forms/ContactForm";
import { AtIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr"

export const Contacts = () => {


    return (
        <div data-scroll-section className="min-h-screen h-full py-28">
            <div className="custom-container grid gap-32">
                <section>
                    <div className="text-center">
                        <h2 className="heading-6xl font-extrabold">Contact Us</h2>
                        <h3 className="heading-4xl">Let’s Talk About Your Next Project</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <img
                                src="/ContactUsBg.jpg"
                                alt="Group of People in the Conference Room by Christina Morillo"
                                className="rounded-lg w-full object-cover shadow-sm h-full"
                            />
                            <div className="bg-blue--light p-4 grid gap-4 rounded-lg shadow-sm">
                                {/* Email */}
                                <div className="grid gap-2 justify-items-center text-center">
                                    <AtIcon size={36} color={"#022161"} />
                                    <a
                                        href="mailto:info@georalium.com"
                                        className="text-xl font-semibold text-[#00091A] hover:underline break-words"
                                    >
                                        info@georalium.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="grid gap-2 justify-items-center text-center">
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
                                </div>

                                {/* Map */}
                                <div className="grid gap-2 justify-items-center text-center">
                                    <MapPinIcon size={36} color={"#022161"} />
                                    <a
                                        href="https://www.google.com/maps?q=T.+Rei+Katyavala,+Luanda"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-semibold text-[#00091A] hover:underline"
                                    >
                                        T. Rei Katyavala, Luanda
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue--lighter p-6 rounded-lg shadow-sm">
                            <ContactForm
                                recaptchaSiteKey={"6LeaX7krAAAAAEuWEniMwHCJ8PhekYndsNezSoHV"}
                            />

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}