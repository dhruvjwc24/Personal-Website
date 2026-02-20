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
          <h2 className="text-3xl mb-6 font-display">My name is Dhruv, and I love to ship.</h2>
          <p className="text-lg font-light text-neutral-700 dark:text-neutral-300 mb-4">
            I study Data Science at the University of Michigan, where I’m exploring the intersections of systems computing, data-driven modeling, and machine learning, with a minor in Mathematics.
            <br /><br />
            I’m deeply interested in machine learning, financial markets, product design and ideation, and how technology shapes human decision-making. I love writing and reading, debating philosophy and politics, and learning from the way people think.
            <br /><br />
            Outside of academics, I enjoy practicing the guitar and singing, music production, playing tennis, running, and cooking.
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
                <li>ML</li>
                <li>Books</li>
                <li>Startups</li>
                <li>Philosophy</li>
                <li>Politics</li>
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
                <li>Khaled Hosseini</li>
                <li>Sandra Brown</li>
                <li>Sidney Sheldon</li>
                <li>Jeffery Archer</li>
                <li>Firoozeh Dumas</li>
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
                <li>Avenoir</li>
                <li>Bryant Barnes</li>
                <li>Daniel Caesar</li>
                <li>Giveon</li>
                <li>Zayn</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="w-full relative md:w-1/3 xl:w-1/2 md:h-[550px]"
        >
          {!isLoaded && (
            <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full h-full" />
          )}
          <img
            src={images.profile}
            alt="Dhruv"
            onLoad={() => setIsLoaded(true)}
            /* Keep the rounded frame the same but make the photo black-and-white
               and move the image content down inside the frame so the top of the
               head isn't cut off. We use Tailwind's filter utilities for
               grayscale and `objectPosition` to shift the image, which doesn't
               affect the container/frame size. */
            className={`w-full h-full object-cover rounded-lg ${isLoaded ? "" : "hidden"}`}
            style={{ objectPosition: "center 40%" }}
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
