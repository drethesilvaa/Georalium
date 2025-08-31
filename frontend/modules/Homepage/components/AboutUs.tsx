import Slider from "@/components/Slider"
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr"

const teamimagesData = [{
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}, {
    image: "https://placehold.co/400",
    alt: "placeholder",
}]

export const AboutUs = () => {

    return (
        <div className="py-28">
            <div className="custom-container grid gap-32">
                <section>
                    <div className="text-center">
                        <h2 className="heading-6xl font-extrabold">Who We Are</h2>
                        <h3 className="heading-4xl">A Trusted Partner in Angola’s Mining & Energy</h3>
                    </div>
                    <div className="grid xl:grid-cols-2 gap-6 mt-10">
                        <div className="body-2xl">
                            <p><span className="text-primary">Georalium Mining & Energy</span> is a local Angolan firm supporting the mining sector with specialized services for investors and operators—reducing risk and streamlining market entry.</p>
                            <ul className="list-disc pl-10">
                                <li> Local content & legal support for investments </li>
                                <li> Supply-chain mapping and operational readiness </li>
                                <li> Environmental compliance and project evaluation </li>
                            </ul>

                        </div>
                        <div>
                            <img src="/LuandaBg.jpg" alt="Luanda by Carlos César" className="shadow-sm rounded-lg" />
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="heading-4xl font-semibold">Bringing Efficiency Through Innovative IT Services</h3>
                        <h4 className="heading-2xl">Technology that supports operations at every stage</h4>
                    </div>
                    <div className="grid gap-6 mt-10">
                        <Slider className="py-1" breakpoints={{
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
                            }
                        }} pagination={false} loop={false} spaceBetween={24} slidesPerView={3} items={[
                            <div className="card p-2 overflow-hidden  shadow-sm">
                                <figure>
                                    <img
                                        src="/viabilitystudiesBg.png"
                                        className="aspect-square"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center">
                                    <p>Viability studies, tailor-made software, web/intranet/extranet</p>
                                </div>
                            </div>,
                            <div className="card p-2 overflow-hidden  shadow-sm">
                                <figure>
                                    <img
                                        src="/systemadminBg.png"
                                        className="aspect-square"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center">
                                    <p>System administration, security, support & maintenance</p>
                                </div>
                            </div>,
                            <div className="card p-2 overflow-hidden shadow-sm">
                                <figure>
                                    <img
                                        src="/trainingBg.png"
                                        className="aspect-square"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body leading-none absolute bottom-0 bg-gradient--white w-full body-2xl text-center min-h-[120px] flex items-center">
                                    <p>Training (IT)</p>
                                </div>
                            </div>
                        ]} />
                    </div>
                </section>

            </div>
            <section className="mt-32">
                <div className="custom-container">
                    <h3 className="heading-4xl font-semibold">A Multi-Disciplinary Team Dedicated to Mining Excellence</h3>
                    <h4 className="heading-2xl">International specialists with decades of experience; deep knowledge of mining standards.</h4>
                </div>
                <div className="my-10">
                    <Slider pagination={false} navigation slidesPerView={6} items={teamimagesData?.map((image) => (
                        <img src={image.image} alt={image.alt} className="" />
                    ))} />
                </div>
                <div className="text-right flex justify-end px-4 ">
                    <p className="heading-3xl italic w-2/4">“Behind every <strong>successful</strong> project is a team that knows
                        the <strong>ground</strong>, the <strong>market</strong>, and the <strong>people”</strong></p>
                </div>
            </section>
            <section className="mt-32">
                <div className="flex items-center justify-center shrink-0 custom-container">
                    <div className="grid lg:flex gap-6 items-center justify-items-center">
                        <div className="bg-[url('/AngolaMap.png')] w-[320px] h-[350px] bg-cover flex  relative">
                            <div className="absolute top-20 left-5">
                                <MapPinIcon size={46} />
                            </div>
                        </div>
                        <div className="font-bold">
                            <p className="heading-5xl w-[55%]">Our Presence Across <span className="text-angola-red">Angola</span>
                            </p>
                            <p className="body-2xl"> Luanda • Huambo • Lubango • Saurimo</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}