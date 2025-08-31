"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion, type Variants } from "framer-motion";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import type { ReactNode } from "react";


export default function Slider({
    items,
    auto = true,
    loop = true,
    animation = true,
    navigation = false,
    center = false,
    pagination = true,
    className = "",
    slidesPerView = 1,
    spaceBetween,
    breakpoints
}: {
    items: ReactNode[];
    auto?: boolean;
    loop?: boolean;
    animation?: boolean;
    navigation?: boolean;
    pagination?: boolean;
    center?: boolean;
    className?: string;
    slidesPerView?: number;
    spaceBetween?: number | string
    breakpoints?: {};
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
        <div className={`relative w-full overflow-hidden ${className} `}>
            <Swiper
                modules={[Pagination, Autoplay, Navigation, A11y]}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop={loop}
                centeredSlides={center}
                navigation={navigation}
                pagination={pagination ? { clickable: true, bulletClass: "paginationCustomBullet", bulletActiveClass: "paginationCustomActiveBullet" } : false}
                autoplay={auto ? { delay: 3500, disableOnInteraction: false } : false}
                className={`mySwiper ${pagination ? "big-padding" : "pb-10"}  `}
                breakpoints={breakpoints}
            >
                {items?.map((item, index) => (
                    <SwiperSlide key={index} className={className ?? "pb-10"}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={animation ? slideVariants : undefined}
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
