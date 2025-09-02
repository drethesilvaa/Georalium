"use client";

import Slider from "@/components/Slider";
import { useLocoAnchors } from "@/hooks/useLocoAnchors";
import {
  ChartBarIcon,
  ChartLineUpIcon,
  FileSearchIcon,
  FileTextIcon,
  GlobeHemisphereEastIcon,
  HandshakeIcon,
  MegaphoneSimpleIcon,
  TruckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";

export const Solutions = () => {
  const { onAnchorClick } = useLocoAnchors();

  const solutionsData = [
    {
      subtitle: "Operational Support That Reduces Risk",
      title: "Empowering Operators for Efficient Operations",
      img: "/OperatorBg.png",
      imgAlt: "Operator in a site by aftabmirza",
      ctaButton: "Schedule an operations review",
      items: [
        {
          icon: (
            <ChartBarIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Project evaluation & economic models for monitoring",
        },
        {
          icon: (
            <TruckIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Logistics, administrative & operational support",
        },
        {
          icon: (
            <GlobeHemisphereEastIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Environmental compliance",
        },
        {
          icon: (
            <HandshakeIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title:
            "Outsourcing (customs brokerage, IT, accounting, local contracting)",
        },
      ],
    },
    {
      subtitle: "Turning Opportunities Into Sustainable Investments",
      title: "Supporting Investors with Clarity and Confidence",
      img: "/InvestorsBg.png",
      imgAlt: "People shaking hand in a office by aftabmirza",
      ctaButton: "Request investor pack",
      items: [
        {
          icon: (
            <FileSearchIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Investment portfolio sourcing / tailored prospecting",
        },
        {
          icon: (
            <ChartLineUpIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Project evaluation & risk screening",
        },
        {
          icon: (
            <FileTextIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Licensing, local content & legal processes",
        },
        {
          icon: (
            <MegaphoneSimpleIcon className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" />
          ),
          title: "Go-to-market and marketing support",
        },
      ],
    },
  ];

  return (
    <div
      id="solutions"
      data-scroll-section
      className="min-h-screen h-full py-28 bg-[url('/SolutionsBg.png')] bg-cover bg-center relative "
    >
      <div className="bg-black/75 absolute h-full w-full top-0"></div>
      <div className="grid h-full items-center">
        <div className="text-white z-10">
          <h4 className="custom-container heading-6xl uppercase text-center font-extrabold">
            Solutions For Everyone
          </h4>
          <div className="grid mt-10 px-6">
            <Slider
              center
              animation={false}
              pagination={false}
              auto={false}
              loop={false}
              navigation
              className="slider--solutions"
              slidesPerView={1.5}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.5,
                },
              }}
              spaceBetween={"24px"}
              items={solutionsData.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="p-6 solution--card">
                    <div>
                      <h3 className="heading-3xl ">{item.subtitle}</h3>
                      <h4 className="heading-5xl font-semibold">
                        {item.title}
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <img
                          src={item.img}
                          alt={item.imgAlt}
                          className="rounded-lg shadow-sm max-h-[420] object-cover w-full"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-6 items-center content-center">
                        {item.items?.map((content, k) => (
                          <div
                            key={k}
                            className="flex gap-6 items-center p-2 bg-white shadow-xs rounded-lg h-full text-[#00091A]"
                          >
                            <div>{content.icon}</div>
                            <p className="body-2xl">{content.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-10">
                    <button
                      data-target="#contacts"
                      onClick={onAnchorClick}
                      className="btn btn-glass btn-glass--dark md:btn-xl uppercase font-normal text-white"
                    >
                      {item.ctaButton}
                    </button>
                  </div>
                </Fragment>
              ))}
            ></Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
