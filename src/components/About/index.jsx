import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBook, FaHeadphones, FaComments } from "react-icons/fa";
import images from "../../constants/image";


const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
      ></motion.div>
      <div className="flex gap-20 items-start flex-col-reverse md:flex-row-reverse transition-all">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="w-full text-primary md:w-2/3 xl:w-1/2 dark:text-white"
        >
          <h2 className="text-3xl mb-6 font-display">My name is Aryan, and I love learning, building, and exploring.</h2>
          <p className="text-lg font-light text-neutral-700 dark:text-neutral-300 mb-4  ">
          I study CS and business at the University of Michigan with a minor in math. I'm currently most interested in systems computing, financial markets, writing, talking to strangers, and weightlifting. I love public speaking, playing drums, running, and music. In my free time, I work as a part time Wedding MC!
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <FaComments className="mr-3 text-xl text-neutral-700 dark:text-neutral-300" />
                <p className="text-lg font-light text-neutral-700 dark:text-neutral-300">
                  Talk to me about:
                </p>
              </div>
              <ul className="list-disc pl-10 text-lg font-light text-neutral-700 dark:text-neutral-300">
                <li>Books</li>
                <li>Music</li>
                <li>Finance</li>
                <li>Design</li>
                <li>Philosophy</li>
                <li>Art</li>
                <li>Typography</li>
              </ul>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-2">
                <FaBook className="mr-3 text-xl text-neutral-700 dark:text-neutral-300" />
                <p className="text-lg font-light text-neutral-700 dark:text-neutral-300">
                  Recently Reading:
                </p>
              </div>
              <ul className="list-disc pl-10 text-lg font-light text-neutral-700 dark:text-neutral-300">
                <li>Matt Levine</li>
                <li>Sayaka Murata</li>
                <li>Dmitri Nesteruk</li>
                <li>Donella Meadows</li>
                <li>Peter Attia</li>
              </ul>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-2">
                <FaHeadphones className="mr-3 text-xl text-neutral-700 dark:text-neutral-300" />
                <p className="text-lg font-light text-neutral-700 dark:text-neutral-300">
                  Currently Listening:
                </p>
              </div>
              <ul className="list-disc pl-10 text-lg font-light text-neutral-700 dark:text-neutral-300">
                <li>Fred Again</li>
                <li>Playboi Carti</li>
                {/* <li>The Neighbourhood</li> */}
                <li>Saint Levant</li>
                <li>Lavern</li>
                <li>Sudan Archives</li>
                <li>In This Moment</li>
                <li>Caroline Polachek</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="w-full relative md:w-1/3 xl:w-1/2 md:h-[450px]"
        >
          {!isLoaded && (
            <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full h-full" />
          )}
          <img
            src={images.profile}
            alt="Aryan Shah"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover rounded-lg ${isLoaded ? "" : "hidden"}`}
          />
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
      >
      </motion.div>
    </>
  );
};

export default TabSection;
