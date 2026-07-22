import React, { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/outline";
import RichText from "../RichText";
import { motion } from "framer-motion";

const projects = [
  {
    heading: "Furnishion | AI Virtual Staging Platform",
    stack: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "Supabase"
    ],
    bullets: [
      "Architected an event-driven virtual-staging pipeline for unlimited batch uploads using 5 Inngest workflows and a durable 6-state lifecycle, with concurrency-safe furniture consistency across room views.",
      "Engineered an image-safety gate using 9,216-pixel structural comparisons, a 15% alteration threshold, hard object blocklists, and a 1-imperfection cap, with audit records and 2 bounded retries.",
      "Built 7 API endpoints, 8 PostgreSQL tables, and 18 row-level security policies supporting signed uploads, rights attestation, Gemini-based staging, and 4 furniture packages with 8 reference assets."
    ]
  },
  {
    heading: "Vacha | Tax Optimization Tooling",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind"
    ],
    bullets: [
      "Built a CPA-vetted tax-planning platform for high-income earners, modeling depreciation schedules, 1031 exchanges, and capital gains under IRS and MACRS guidelines.",
      "Implemented calculation pipelines for depreciation recapture, exchange timelines, and tax-bracket phase-outs; collaborated with CPAs to validate formulas and deliver scenario-based projections."
    ],
    websiteLink: "https://tryvacha.com"
  },

  {
    heading: "ThunderQuote | Geospatial Storm Risk Explorer",
    stack: [
      "Python",
      "PyTorch",
      "D3.js"
    ],
    bullets: [
      "Cleaned and integrated 70MB+ of storm and insurance-claim records across all 50 states, resolving inconsistent geography and producing deterministic data for 3,129 U.S. counties.",
      "Evaluated Random Forest, Gradient Boosting, and neural-network regressors, reducing average prediction error from approximately $1,841 to $1,237 and achieving approximately 8% testing error.",
      "Deployed a responsive D3-Geo research explorer to Vercel with GeoPandas artifacts, methodology documentation, accessibility checks, and 21 automated unit and browser tests."
    ],
    websiteLink: "https://thunderquote-research-explorer-dhruvjwcs-projects.vercel.app"
  },

  {
    heading: "VesselVision | Ophthalmology Deep Learning",
    stack: [
      "U-Net",
      "RAVIR Dataset",
      "3D Slicer",
      "Python",
      "NumPy",
      "OpenCV"
    ],
    bullets: [
      "Trained a U-Net model for retinal vessel segmentation using RAVIR, reaching ~85% accuracy on vein/artery classification.",
      "Augmented dataset via manual segmentation in 3D Slicer and geometric transformations to improve generalization.",
      "Unified manual and automated segmentation workflows to support retinal disease screening at scale."
    ]
  },

  {
    heading: "Text-to-NFT | Generative AI + Blockchain",
    stack: [
      "Stable Diffusion",
      "React",
      "Flask",
      "Google Cloud",
      "Solidity",
      "MetaMask"
    ],
    bullets: [
      "Led development of a platform converting natural language prompts into NFTs via Stable Diffusion and blockchain minting.",
      "Built backend image generation pipeline on Google Cloud with Flask APIs, enabling real-time NFT creation and wallet transfer.",
      "Integrated React frontend with MetaMask for secure wallet connection, successfully minting NFTs during live demo."
    ]
  }
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [perLine, setPerLine] = useState(12);

  const updatePerLine = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setPerLine(5);
    } else if (width < 768) {
      setPerLine(6);
    } else if (width < 1024) {
      setPerLine(8);
    } else {
      setPerLine(12);
    }
  };

  useEffect(() => {
    updatePerLine();
    window.addEventListener("resize", updatePerLine);
    return () => window.removeEventListener("resize", updatePerLine);
  }, []);

  return (
    <div className="flex flex-col gap-20 mt-32 md:gap-24 md:mx-24 lg:mx-48">
      {projects.map((proj, index) => (
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className="featured-alt flex flex-col-reverse gap-10 items-start relative md:gap-20 md:flex-row justify-start text-left"
        >
          <span className="featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden xl:block">
            0{index + 1}
          </span>
          {index === 0 && proj.image && (
            <div className="w-full z-10 relative md:w-1/2">
              {!isLoaded && (
                <div className="absolute bg-primary-400 animate-pulse w-full rounded-lg filter shadow-lg object-cover h-[340px]" />
              )}
              <img
                className="w-full rounded-lg filter shadow-lg object-contain h-auto"
                loading="lazy"
                width={684}
                height={355}
                src={proj.image}
                alt={proj.heading}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          )}
          <div className={`w-full z-10 md:w-2/3`}>
            <h3 className="text-primary text-4xl font-display mb-4 dark:text-white">
              {proj.heading}
            </h3>
            <ul className="mt-2 mb-4 text-primary-400 text-base dark:text-neutral-300 font-light list-disc list-outside pl-6 space-y-1">
              {proj.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {proj.stack && (
              <RichText
                className="text-primary-400 text-base dark:text-neutral-300 italic font-light list-none pl-0"
                content={"Technologies Used: " + proj.stack.join(", ")}
              />
            )}
            <div className="flex justify-start relative">
              <div className="flex flex-row justify-center gap-4 py-10">
                {proj.websiteLink && (
                  <a
                    className="relative inline-block text-sm font-medium text-black dark:text-white group focus:outline-none focus:ring"
                    href={proj.websiteLink}
                    target="_blank"
                  >
                    <span className="absolute inset-0 border border-black dark:border-white dark:group-active:border-white group-active:border-black"></span>
                    <span className="flex items-center gap-3 px-4 py-3 transition-transform bg-222831 border border-black dark:border-white black:active:border-white active:border-black active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <GlobeAltIcon className="w-6 h-6" />
                      Website
                    </span>
                  </a>
                )}
                {proj.githubLink && (
                  <a
                    className="relative inline-block text-sm font-medium text-black dark:text-white active:text-white group focus:outline-none focus:ring"
                    href={proj.githubLink}
                    target="_blank"
                  >
                    <span className="absolute inset-0 border border-current"></span>
                    <span className="flex flex-row gap-3 items-center px-4 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black dark:text-secondary-50 fill-current"
                      >
                        <path
                          d="M10.2397 0.517241C4.86796 0.517241 0.51709 4.86811 0.51709 10.2399C0.51709 14.5421 3.30019 18.1759 7.16493 19.4642C7.65106 19.5493 7.83336 19.2576 7.83336 19.0024C7.83336 18.7714 7.8212 18.0058 7.8212 17.1915C5.3784 17.6412 4.74643 16.596 4.55197 16.0491C4.4426 15.7696 3.96862 14.9067 3.55541 14.6758C3.21512 14.4935 2.72898 14.0438 3.54325 14.0317C4.30891 14.0195 4.85581 14.7366 5.03811 15.0282C5.91314 16.4988 7.31077 16.0856 7.86982 15.8304C7.95489 15.1984 8.21011 14.773 8.48963 14.53C6.32635 14.2869 4.06584 13.4483 4.06584 9.72942C4.06584 8.67208 4.4426 7.79705 5.06241 7.11647C4.96519 6.8734 4.62489 5.87683 5.15964 4.53997C5.15964 4.53997 5.97391 4.28475 7.83336 5.53654C8.61117 5.31778 9.43759 5.2084 10.264 5.2084C11.0904 5.2084 11.9169 5.31778 12.6947 5.53654C14.5541 4.2726 15.3684 4.53997 15.3684 4.53997C15.9031 5.87683 15.5628 6.8734 15.4656 7.11647C16.0854 7.79705 16.4622 8.65993 16.4622 9.72942C16.4622 13.4605 14.1895 14.2869 12.0262 14.53C12.3787 14.8338 12.6825 15.4171 12.6825 16.3286C12.6825 17.629 12.6704 18.6742 12.6704 19.0024C12.6704 19.2576 12.8527 19.5614 13.3388 19.4642C15.2689 18.8125 16.946 17.5721 18.1342 15.9173C19.3224 14.2626 19.9617 12.277 19.9623 10.2399C19.9623 4.86811 15.6114 0.517241 10.2397 0.517241Z"
                          fill="current"
                        />
                      </svg>
                      Github
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
