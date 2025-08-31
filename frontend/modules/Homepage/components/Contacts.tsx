"use client"

import { ContactForm } from "@/components/Forms/ContactForm";
import { AtIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr"

export const Contacts = () => {


    return (
        <div className="min-h-screen h-full py-28">
            <div className="custom-container grid gap-32">
                <section>
                    <div className="text-center">
                        <h2 className="heading-6xl font-extrabold">Contact Us</h2>
                        <h3 className="heading-4xl">Let’s Talk About Your Next Project</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 mt-10">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                            <img src="/ContactUsBg.jpg" alt="Group of People in the Conference Room by Christina Morillo" className="rounded-lg w-full object-cover shadow-sm h-full" />
                            <div className="bg-blue--light p-4 grid gap-2 rounded-lg shadow-sm">
                                <div className="grid gap-2 justify-items-center">
                                    <AtIcon size={36} color={"#022161"} />
                                    <p className="text-xl font-semibold">info@georalium.com</p>
                                </div>
                                <div className="grid gap-2 justify-items-center">
                                    <PhoneIcon size={36} color={"#022161"} />
                                    <p className="text-xl font-semibold">+244 925 041 069 / 222 747 198</p>
                                </div>
                                <div className="grid gap-2 justify-items-center">
                                    <MapPinIcon size={36} color={"#022161"} />
                                    <p className="text-xl font-semibold">T. Rei Katyavala, Luanda</p>
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