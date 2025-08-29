"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, type Variants } from "framer-motion";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import type { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Slider({
    items,
    auto = true,
    navigation = false,
    pagination = true,
    className = "",
    slidesPerView = 1,
    spaceBetween
}: {
    items: ReactNode[];
    auto?: boolean;
    navigation?: boolean;
    pagination?: boolean;
    className?: string;
    slidesPerView?: number;
    spaceBetween?: number | string
}) {


    const slideVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
            },
        }),
    };

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            <Swiper
                modules={[Pagination, Autoplay, Navigation, A11y]}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop
                navigation={navigation}
                pagination={pagination ? { clickable: true } : false}
                autoplay={auto ? { delay: 3500, disableOnInteraction: false } : false}
                className="mySwiper pb-10"
                breakpoints={{
                    // 0: { slidesPerView: 1 },
                }}
            >
                {items?.map((item, index) => (
                    <SwiperSlide key={index} className={className ?? "pb-10"}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideVariants}
                            custom={index}
                        >
                            {item}
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
