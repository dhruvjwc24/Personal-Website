import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    section: "University of Michigan \nComputer Science and Engineering",
    location: "Ann Arbor, MI",
    degree: "B.S.E. in Computer Engineering, Minor in Mathematics",
    year: "2028",
    coursework: {
      computerScience: [
        "*EECS 281 - Data Structures & Algorithms",
        "*EECS 370 - Computer Organization",
        "EECS 203 - Discrete Mathematics",
        "EECS 280 - Programming and Data Structures",
      ],
      mathematics: [
        "*MATH 286 - Honors Differential Equations",
        "MATH 215 - Multivariable & Vector Calculus",
        "MATH 214 - Applied Linear Algebra",
        "MATH 116 - Calculus II",
        "MATH 115 - Calculus I",

      ],
    },
  },
];

const activitiesData = {
  section: "Activities & Societies",
  location: "University of Michigan",
  items: [
    "V1@Michigan Product Studio",
    "Propel Impact Consulting",
    "MFly",
  ]
};

const scholarshipsData = {
  section: "Scholarships & Awards",
  location: "University of Michigan",
  items: [
    "2025 National Merit Scholarship Winner - 2500 selected out of over 1.3 million entrants nationally.",
  ]
};

const EducationList = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <motion.div>
        {educationData.map((section, index) => (
          <motion.div
            key={index}
            variants={{
              offscreen: { y: 150 },
              onscreen: {
                y: 0,
                transition: { type: "spring", bounce: 0.4, duration: 1 },
              },
            }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
          >
            <h6 className="text-3xl text-primary mb-4 dark:text-white font-display whitespace-pre-line">
              {section.section}
              <span className="mt-4 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
                {section.location}
              </span>
              {/* <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300">
                GPA: {section.gpa}
              </span> */}
              <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
                {section.degree}
              </span>
              {/* {(
                <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300">
                  {section.minor ? `${section.minor}` : "     \u3000"}
                </span>
              )} */}
            </h6>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500 ">
                  Relevant Coursework
                </span>
              </div>
            </div>
            {section.coursework && (
              <>
                {section.coursework.computerScience && (
                  <>
                    <h3 className="text-xl text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                      Computer Engineering
                    </h3>
                    <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
                      {section.coursework.computerScience.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.coursework.mathematics && (
                  <>
                    <h3 className="text-xl  text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                      Mathematics
                    </h3>
                    <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
                      {section.coursework.mathematics.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.coursework.economics && (
                  <>
                    <h3 className="text-xl  text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                      Economics
                    </h3>
                    <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
                      {section.coursework.economics.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {section.coursework.business && (
                  <>
                    <h3 className="text-xl  text-neutral-800 dark:text-neutral-200 mb-2 font-display">
                      Business
                    </h3>
                    <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
                      {section.coursework.business.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flex flex-col gap-10 justify-start">
        {/* Activities Card */}
        <motion.div
          variants={{
            offscreen: { y: 150 },
            onscreen: {
              y: 0,
              transition: { type: "spring", bounce: 0.4, duration: 1 },
            },
          }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer bg-gray-100 px-6 pt-16 pb-4 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
        >
          <h6 className="text-3xl text-primary mb-4 dark:text-white font-display ">
            {activitiesData.section}
            <span className="mt-1 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
              {activitiesData.location}
            </span>
          </h6>
          <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
            {activitiesData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Scholarships Card */}
        <motion.div
          variants={{
            offscreen: { y: 150 },
            onscreen: {
              y: 0,
              transition: { type: "spring", bounce: 0.4, duration: 1 },
            },
          }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer bg-gray-100 px-6 pt-16 pb-4 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
        >
          <h6 className="text-3xl text-primary mb-4 dark:text-white font-display ">
            {scholarshipsData.section}
            <span className="mt-1 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
              {scholarshipsData.location}
            </span>
          </h6>
          <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
            {scholarshipsData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EducationList;
