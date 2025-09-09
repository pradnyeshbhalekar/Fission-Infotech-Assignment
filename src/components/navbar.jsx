import React, { useState, useEffect } from "react";
import { Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // <- Add framer motion
import LogoLight from "../assets/logo-light.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <div className="flex items-center">
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "w-16 h-16" : "w-24 h-24"
              } rounded-full flex items-center justify-center`}
            >
              <img
                src={LogoLight}
                alt="Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "w-16 h-16" : "w-24 h-24"
                }`}
              />
            </div>
          </div>
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium relative">
            <li className="hover:text-[#EF2168] cursor-pointer transition-colors">Work</li>

            <li
              className="relative"
              onMouseEnter={() => setHoveredMenu("services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <span className="hover:text-[#EF2168] cursor-pointer transition-colors flex items-center">
                Services <span className="ml-1">•</span>
              </span>
            </li>

            <li className="hover:text-[#EF2168] cursor-pointer transition-colors">Clients</li>

            <li
              className="relative"
              onMouseEnter={() => setHoveredMenu("about")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <span className="hover:text-[#EF2168] cursor-pointer transition-colors flex items-center">
                About <span className="ml-1">•</span>
              </span>
            </li>

            <li className="hover:text-[#EF2168] cursor-pointer transition-colors">Knowledge</li>
          </ul>


          <div className="flex items-center space-x-4">
            <Sun
              className={`text-gray-600 hover:text-black cursor-pointer transition-all duration-300 ${
                isScrolled ? "w-5 h-5" : "w-6 h-6"
              }`}
            />
            <button className="hidden md:block bg-black text-white rounded hover:bg-gray-800 px-6 py-3 text-base transition-all duration-300">
              Contact
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>


        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-6 space-y-4 animate-pulse">
            {["Work", "Services", "Clients", "About", "Knowledge"].map((item) => (
              <a key={item} href="#" className="block text-gray-700 font-medium">
                {item}
              </a>
            ))}
            <button className="w-full bg-black text-white rounded hover:bg-gray-800 px-6 py-3 text-base transition-all duration-300">
              Contact
            </button>
          </div>
        )}
      </nav>


      <AnimatePresence>
        {hoveredMenu === "services" && (
          <motion.div
            key="services"
            className="fixed top-[88px] left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={megaMenuVariants}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredMenu("services")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 gap-8">
              {[
                { title: "Design", desc: "Handcraft the perfect user experience with modern design principles.", color: "pink" },
                { title: "Technology", desc: "Leverage the power of code with cutting-edge development solutions.", color: "blue" },
                { title: "Marketing", desc: "Creative strategies that drive brands forward in the digital landscape.", color: "purple" },
              ].map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl p-8 h-48 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}.</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex justify-end">
                      <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}>
                        →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {hoveredMenu === "about" && (
          <motion.div
            key="about"
            className="fixed top-[88px] left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-100"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={megaMenuVariants}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredMenu("about")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 gap-8">
              {[
                { title: "About Us", desc: "We are super-efficient yet humble to serve you with excellence.", color: "pink" },
                { title: "Team", desc: "We are proud of our experienced and accomplished team members.", color: "blue" },
                { title: "Career", desc: "Join our team and help us create amazing experiences together.", color: "pink" },
              ].map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl p-8 h-48 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}.</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="flex justify-end">
                      <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}>
                        →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
