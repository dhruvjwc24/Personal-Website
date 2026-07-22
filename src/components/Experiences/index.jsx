import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const cardData = [
  {
    company: "Effluent, The Wastewater Intelligence Company",
    period: "Jun. 2026 – Jul. 2026",
    role: "Product & Go-to-Market Lead",
    duties: [
      "Co-developed eSMR automation that maps laboratory results from LIMS into CIWQS-ready reports, reducing an error-prone process from up to 40 hours per month to approximately 10 minutes (~99.6% reduction).",
      "Fine-tuned a Multivariate Time-Series Graph Neural Network (MTGNN) on BSM2-generated wastewater data to detect anomalies across multivariate SCADA and plant-historian streams.",
      "Led Bay Area go-to-market efforts by organizing 17 wastewater-facility tours and translating operator feedback into product requirements, pilots, and customer opportunities.",
    ]
  },
  {
    company: "Aspiring Scientists Summer Internship Program (George Mason University)",
    period: "Jun. 2024 – Aug. 2024",
    role: "Data Analyst",
    duties: [
      "Built a BigQuery (GCP) SQL analytics pipeline on GH Archive to extract GitHub interaction telemetry for 660 blockchain OSS organizations (2013–2024), producing a longitudinal dataset for ecosystem-scale evaluation.",
      "Defined and computed a normalized success KPI (Activity Valuation) by filtering bot activity and calculating avg((sum (non-bot interactions) / (years active))); segmented results by Project Type, Funding Model, and Governance Mode to identify the most consistently high-performing organizational profiles.",
    ]
  },
  {
    company: "Emerging Diagnostic and Investigative Technologies (Dartmouth Hitchcock Medical Center)",
    period: "Jun. 2023 – Aug. 2023",
    role: "Machine Learning Engineer",
    duties: [
      "Trained a self-supervised whole-slide-image encoder in PyTorch and Lightly using SimCLR on 780K+ unlabeled tissue patches across 78 tar shards, applying dual-view augmentation and NT-Xent loss.",
      "Built a multimodal case-retrieval system combining CNN–GNN slide embeddings with a fine-tuned BERT report encoder and kNN cosine search, returning clinically similar cases validated by expert pathologists."
    ]
  }
];

const TwoColumnCard = () => {
 return (
  <>
  <motion.div
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true }}
   className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
  >
   {cardData.map((card, index) => (
    <motion.div
     key={index}
     variants={{
      offscreen: { y: index % 2 === 0 ? 150 : 300 },
      onscreen: {
       y: 0,
       transition: { type: "spring", bounce: 0.4, duration: index % 2 === 0 ? 1 : 1.5 },
      },
     }}
     whileHover={{ scale: 1.02 }}
     className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl filter shadow-md relative md:px-10 dark:bg-primary-500 h-full"
    >
     <h6 className="text-3xl text-primary mb-4 dark:text-white font-display">
      <a href={card.link ? card.link : "#"} target="_blank" className="hover:underline">
       {card.company}
      </a>
      <span className="mt-4 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.period}
      </span>
      <span className="mt-2 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.role}
      </span>
     </h6>
     {/* <div className="relative mb-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
       <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
       <span className="uppercase px-2 bg-gray-100 text-sm text-gray-500 dark:bg-primary-500">
        duties & responsibilities
       </span>
      </div>
     </div> */}
     <ul className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 list-disc list-outside pl-6 space-y-1">
      {card.duties.map((duty, idx) => (
       <li key={idx}>{duty}</li>
      ))}
     </ul>
    </motion.div>
   ))}

  </motion.div>
  <p className="text-center text-neutral-600 dark:text-neutral-300 text-md mt-8 w-full">
    For details on my experiences, please contact me for my official resume.
  </p>
  </>
 );
};

export default TwoColumnCard;
