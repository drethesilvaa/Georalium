import GlassCard from "@/components/GlassCard";
import Slider from "@/components/Slider";
import { ChartBarIcon, FileTextIcon, GraduationCapIcon, LeafIcon, MagnifyingGlassIcon, ScalesIcon, TruckIcon } from "@phosphor-icons/react/dist/ssr";

const servicesData = [{
    icon: <MagnifyingGlassIcon size={94} weight="duotone" />,
    title: "Investment Prospecting & Evaluation"
}, {
    icon: <FileTextIcon size={94} weight="duotone" />,
    title: "Licensing & Contractual Process"
}, {
    icon: <LeafIcon size={94} weight="duotone" />,
    title: "Environmental Compliance"
}, {
    icon: <TruckIcon size={94} weight="duotone" />,
    title: "Logistics & Administrative Support"
}, {
    icon: <ChartBarIcon size={94} weight="duotone" />,
    title: "Market Research & Marketing"
}, {
    icon: <ScalesIcon size={94} weight="duotone" />,
    title: "Specialised Outsourcing & Legal Advice"
}, {
    icon: <GraduationCapIcon size={94} weight="duotone" />,
    title: "Training (Mining & Energy)"
}]

export const Services = () => {
    return (
        <div data-scroll-section className="h-screen bg-[url('/ServicesBg.png')] bg-cover bg-center relative">
            {/* Option A: let overlay exist but not capture events */}
            <div className="bg-black/40 absolute inset-0 pointer-events-none"></div>

            {/* Make this positioned so z-index applies */}
            <div id="services" className="grid custom-container h-full items-center relative z-10">
                <div className="text-white">
                    <h4 className="heading-3xl">From Prospecting to Production</h4>
                    <h3 className="heading-5xl font-semibold">Services That Drive Growth</h3>
                    <div className="grid mt-10">
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
                                }
                            }}
                            spaceBetween={"24px"}
                            items={servicesData.map((item, idx) => (
                                <GlassCard
                                    title={item.title}
                                    icon={item.icon}
                                    className="text-white min-h-[226px]"
                                />))}
                        >

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};
