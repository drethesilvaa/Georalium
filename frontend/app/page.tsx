import Navbar from "@/components/Navbar";
import { AboutUs } from "@/modules/Homepage/components/AboutUs";
import { Hero } from "@/modules/Homepage/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
    </>
  );
}
