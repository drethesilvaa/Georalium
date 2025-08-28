import { ArrowCircleRightIcon } from "@phosphor-icons/react/dist/ssr"

const Navbar = () => {


    return (
        <div className="navbar bg-white/90 rounded-2xl p-4 shadow-sm fixed top-10 z-10 custom-container left-0 right-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="">Who We Are</a></li>
                        <li><a>Services</a></li>
                        <li><a>Solutions</a></li>
                    </ul>
                </div>
                <a className="text-xl"><img src="/Logo.png" className="h-16" alt="" /> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-base font-semibold menu menu-horizontal text-neutral px-1">
                    <li><a>Who We Are</a></li>
                    <li><a>Services</a></li>
                    <li><a>Solutions</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Get in Touch <ArrowCircleRightIcon size={24} /> </a>
            </div>
        </div>
    )
}

export default Navbar