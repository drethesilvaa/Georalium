
"use client"
import Slider from "@/components/Slider"
import { useLocoAnchors } from "@/hooks/useLocoAnchors";
import { ArrowCircleDownIcon } from "@phosphor-icons/react/dist/ssr"

export const Hero = () => {

    const { onAnchorClick } = useLocoAnchors();

    return (
        <div id="hero" data-scroll-section className="min-h-screen flex items-center h-full py-32 bg-[url('/HeroBg.png')] bg-cover bg-center relative ">
            <div className="bg-black/45 absolute h-full w-full top-0"></div>
            <div className="grid custom-container h-full items-center content-center gap-10">
                <div className="col-span-full xl:col-span-7 z-[1] ">
                    <h1 className="heading-6xl font-extrabold text-white">Powering Angola’s <br></br> Mining Future.</h1>
                    <h3 className="heading-2xl mt-4 xl:w-3/4 text-white">From prospecting to operations, we provide the clarity, compliance, and local support you need to succeed in Angola</h3>
                    <button data-target="#who-we-are" onClick={onAnchorClick} className="btn md:btn-lg btn-secondary mt-6" type="button">KNOW MORE <ArrowCircleDownIcon size={28} /></button>
                </div>
                <div className="hidden xl:grid gap-4 col-span-full xl:col-start-9 xl:col-span-4">
                    <div className="card bg-blue w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p className="heading-xl italic text-neutral w-2/3">“We don’t just provide services, <span className="font-semibold">we become partners in your success</span>”</p>
                            <img src="/pickaxe.png" className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]" alt="" />

                        </div>
                    </div>
                    <div className="card bg-blue--light w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p className="heading-font heading-3xl text-neutral font-black">00+</p>
                            <p className="heading-xl text-neutral body-font">Satisfied Partners</p>
                            <img src="/rocket.png" className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]" alt="" />

                        </div>
                    </div>
                    <div className="card bg-blue--lighter w-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <p className="heading-font heading-3xl text-neutral font-black">000k</p>
                            <p className="heading-xl text-neutral body-font" >Some Metric</p>
                            <img src="/trophy.png" className="h-[76px] w-[76px] object-cover absolute right-[24px] bottom-[24px]" alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid xl:hidden gap-4 col-span-full">
                    <Slider animation={false} pagination={false} slidesPerView={1} items={[
                        <div className="card bg-blue w-full h-full bg-base-100 card-md shadow-sm">
                            <div className="card-body">
                                <p className="heading-xl italic text-neutral w-2/3">“We don’t just provide services, <span className="font-semibold">we become partners in your success</span>”</p>
                                <img src="/pickaxe.png" className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]" alt="" />

                            </div>
                        </div>,
                        <div className="card bg-blue--light h-full w-full bg-base-100 card-md shadow-sm">
                            <div className="card-body">
                                <p className="heading-font heading-3xl text-neutral font-black">00+</p>
                                <p className="heading-xl text-neutral body-font">Satisfied Partners</p>
                                <img src="/rocket.png" className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]" alt="" />

                            </div>
                        </div>,
                        <div className="card bg-blue--lighter h-full w-full bg-base-100 card-md shadow-sm">
                            <div className="card-body">
                                <p className="heading-font heading-3xl text-neutral font-black">000k</p>
                                <p className="heading-xl text-neutral body-font" >Some Metric</p>
                                <img src="/trophy.png" className="h-[10vw] w-[10vw] max-w-[80px] max-h-[80px] object-cover absolute right-[24px] bottom-[24px]" alt="" />
                            </div>
                        </div>
                    ]}>
                    </Slider>
                </div>
            </div>
        </div>
    )
}