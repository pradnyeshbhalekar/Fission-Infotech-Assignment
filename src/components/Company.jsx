import React from "react";
import { motion } from "framer-motion";
import bmw from '../assets/bmw.svg'
import choice from '../assets/choice.svg'
import eton from '../assets/eton.svg'
import fab from '../assets/fab.svg'
import huggies from '../assets/huggies.svg'
import indium from '../assets/indium.svg'
import kimirica from '../assets/kimirica.svg'
import kpit from '../assets/kpit.svg'
import pandg from '../assets/p&g.svg'
import sony from '../assets/sony.svg'
import star from '../assets/star.svg'
import tata from '../assets/tata.svg'

const images = [bmw, choice, eton, fab, huggies, indium, kimirica, kpit, pandg, sony, star, tata];

const HorizontalScrollImage = () => {
  return (
    <div className="overflow-hidden bg-white px-4 py-6 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
      <p className="font-semibold text-gray-800 whitespace-nowrap md:mr-6 text-center md:text-left">
        Your trusted UI UX design agency
      </p>
      <div className="hidden md:block w-px h-16 bg-gray-500 flex-shrink-0" />
      <div className="relative w-full h-16 overflow-hidden flex items-center">
        <motion.div
          className="flex items-center h-full whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {images.concat(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Scroll ${index}`}
              className="w-16 h-16 object-contain mx-4 md:mx-8"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollImage;
