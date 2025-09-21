"use client";
import {
  ArrowCircleRightIcon,
  BriefcaseIcon,
  HandshakeIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useHideOnLocoScroll } from "@/hooks/useHideOnLocoScroll";
import { useLocoAnchors } from "@/hooks/useLocoAnchors";
import { motion } from "framer-motion";

export default function Navbar() {
  const hidden = useHideOnLocoScroll(6, 80);
  const { onAnchorClick } = useLocoAnchors();

  return (
    <motion.div
      className={`custom-container navbar gap-4 rounded-2xl p-2 md:p-4 shadow-xl fixed top-5 lg:top-10 left-0 right-0 z-50 transition-transform duration-300 will-change-transform
      ${hidden ? "-translate-y-[calc(100%+2.5rem)]" : "translate-y-0"}`}
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <a href="#who-we-are" onClick={onAnchorClick} className="text-lg">
                Who We Are
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <a href="#services" onClick={onAnchorClick} className="text-lg">
                Services
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <a href="#solutions" onClick={onAnchorClick} className="text-lg">
                Solutions
              </a>
            </motion.li>
          </motion.ul>
        </div>
        <a href="/" className="text-xl">
          <motion.img
            src="/Logo.png"
            className="h-10 object-contain"
            alt="Logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <motion.ul
          className="text-base font-semibold menu menu-horizontal text-neutral px-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <a href="#who-we-are" onClick={onAnchorClick}>
              <UserCircleIcon /> Who We Are
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <a href="#services" onClick={onAnchorClick}>
              <BriefcaseIcon /> What We Do
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <a href="#solutions" onClick={onAnchorClick}>
              <HandshakeIcon /> Tailored Solutions
            </a>
          </motion.li>
        </motion.ul>
      </div>

      <div className="navbar-end">
        <motion.a
          href="#contacts"
          onClick={onAnchorClick}
          className="btn btn-primary btn-sm md:btn-md"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
        >
          Get in Touch <ArrowCircleRightIcon size={24} />
        </motion.a>
      </div>
    </motion.div>
  );
}
