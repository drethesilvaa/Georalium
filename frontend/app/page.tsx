import { AboutUs } from "@/modules/Homepage/components/AboutUs";
import { Contacts } from "@/modules/Homepage/components/Contacts";
import { Hero } from "@/modules/Homepage/components/Hero";
import { Services } from "@/modules/Homepage/components/Services";
import { Solutions } from "@/modules/Homepage/components/Solutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Hero />
        <AboutUs />
        <Services />
        <Solutions />
        <Contacts />
    </>
  );
}
