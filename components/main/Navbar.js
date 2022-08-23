import { useState } from "react";
import { Link } from "react-scroll";
import { IoLogoWhatsapp } from "react-icons/io5";

const Navbar = () => {

  const [toggle, settoggle] = useState(false);
  const [highlighted, sethighlighted] = useState("")

  const defaultNavbar = "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 hover:border-b-4 hover:border-green-500 transition duration-300"
  const activeNavbar = "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
  const defaultNavbarMobile = "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
  const activeNavbarMobile = "block text-sm px-2 py-4 text-white bg-green-500 font-semibold"

  const offset = -65
  const offsetMobile = -378

  return (
    <nav className="bg-white shadow-lg sticky top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>

              <a href="#" className="flex items-center py-4 px-2">
                <img src="logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-gray-500 text-lg">Wani&apos;s Page</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">

              <Link activeClass={activeNavbar} className={defaultNavbar} smooth spy to="home" offset={offset}>
                Home
              </Link>

              <Link activeClass={activeNavbar}  className={defaultNavbar} smooth spy to="medical-card" offset={offset}>
                Medical Card
              </Link>

              <Link activeClass={activeNavbar}  className={defaultNavbar} smooth spy to="hibah" offset={offset}>
                Hibah
              </Link>


              <Link activeClass={activeNavbar}  className={defaultNavbar} smooth spy to="quotation" offset={offset}>
                Quotation
              </Link>

              <Link activeClass={activeNavbar}  className={defaultNavbar} smooth spy to="contact" offset={offset}>
                Contact
              </Link>

              <Link activeClass={activeNavbar}  className={defaultNavbar} smooth spy to="gallery" offset={offset}>
                Gallery
              </Link>
            </div>
          </div>

          {/* put whatsapp here */}
          <div className="flex items-center  md:space-x-3 ">
            <a href="https://wa.link/38ylx6" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 flex">Chat Us <IoLogoWhatsapp className=" ml-1" size={23} /> </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => settoggle(!toggle)} className="outline-none mobile-menu-butto ">
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={toggle ? "" : "hidden"} >
        <div className=" mobile-menu float">
          <ul className="">


            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="home" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Home
            </Link>

            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="medical-card" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Medical Card
            </Link>

            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="hibah" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Hibah
            </Link>

            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="quotation" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Quotation
            </Link>

            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="contact" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Contact
            </Link>

            <Link activeClass={activeNavbarMobile} className={defaultNavbarMobile} smooth spy to="gallery" offset={offsetMobile} onClick={() => settoggle(!toggle)}>
              Gallery
            </Link>


          </ul>
        </div>
      </div>



    </nav>
  );
}

export default Navbar;