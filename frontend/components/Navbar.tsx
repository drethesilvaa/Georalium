"use client";
import { ArrowCircleRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useHideOnLocoScroll } from "@/hooks/useHideOnLocoScroll";
import { useLocoAnchors } from "@/hooks/useLocoAnchors";

export default function Navbar() {
    const hidden = useHideOnLocoScroll(6, 80);
    const { onAnchorClick } = useLocoAnchors();

    return (
        <div
            className={`custom-container navbar gap-4 rounded-2xl p-2 md:p-4 shadow-sm fixed top-5 lg:top-10 left-0 right-0 z-50 transition-transform duration-300 will-change-transform
      ${hidden ? "-translate-y-[calc(100%+2.5rem)]" : "translate-y-0"}`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        <li><a href="#who-we-are" onClick={onAnchorClick} className="text-lg">Who We Are</a></li>
                        <li><a href="#services" onClick={onAnchorClick} className="text-lg">Services</a></li>
                        <li><a href="#solutions" onClick={onAnchorClick} className="text-lg">Solutions</a></li>
                    </ul>
                </div>
                <a href="#hero" onClick={onAnchorClick} className="text-xl"><img src="/Logo.png" className="h-10 object-contain" alt="Logo" /></a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="text-base font-semibold menu menu-horizontal text-neutral px-1">
                    <li><a href="#who-we-are" onClick={onAnchorClick}>Who We Are</a></li>
                    <li><a href="#services" onClick={onAnchorClick}>Services</a></li>
                    <li><a href="#solutions" onClick={onAnchorClick}>Solutions</a></li>
                </ul>
            </div>

            <div className="navbar-end">
                <a href="#contacts" onClick={onAnchorClick} className="btn btn-primary btn-sm md:btn-md">
                    Get in Touch <ArrowCircleRightIcon size={24} />
                </a>
            </div>
        </div>
    );
}
