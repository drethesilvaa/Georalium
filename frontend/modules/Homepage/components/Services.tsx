import Slider from "@/components/Slider";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

const servicesData = [{
    icon: <MagnifyingGlassIcon size={94} />,
    title: "Investment Prospecting & Evaluation"
}, {
    icon: <MagnifyingGlassIcon size={94} />,
    title: "Investment Prospecting & Evaluation"
}, {
    icon: <MagnifyingGlassIcon size={94} />,
    title: "Investment Prospecting & Evaluation"
}, {
    icon: <MagnifyingGlassIcon size={94} />,
    title: "Investment Prospecting & Evaluation"
}, {
    icon: <MagnifyingGlassIcon size={94} />,
    title: "Investment Prospecting & Evaluation"
}]

export const Services = () => {
    return (
        <div className="h-screen bg-[url('/ServicesBg.png')] bg-cover bg-center relative">
            {/* Option A: let overlay exist but not capture events */}
            <div className="bg-black/40 absolute inset-0 pointer-events-none"></div>

            {/* Make this positioned so z-index applies */}
            <div className="grid custom-container h-full items-center relative z-10">
                <div className="text-white">
                    <h4 className="heading-3xl">From Prospecting to Production</h4>
                    <h3 className="heading-5xl font-semibold">Services That Drive Growth</h3>
                    <div className="grid">
                        <Slider
                            auto={false}
                            className="mt-14"
                            slidesPerView={3}
                            spaceBetween={"24px"}
                            items={servicesData.map((item, idx) => (
                                <div className="card bg-base-100 w-full shadow-sm">
                                    <figure className="px-10 pt-10">
                                        {item.icon}
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.title}</h2>
                                    </div>
                                </div>))}
                        >

                        </Slider>

                    </div>
                </div>
            </div>
        </div>
    );
};
