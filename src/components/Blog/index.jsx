import React, { useState } from "react";
import { motion } from "framer-motion";
import RichText from "../RichText";

const blogPosts = [
  {
    title: "How Embedder is Bridging Critical Gaps in DevTools for Embedded Software",
    date: "March 29, 2026",
    readTime: "8 min read",
    excerpt: "Embedded systems are everywhere—from medical devices to automotive controllers. Yet the tooling for embedded software engineers remains fragmented and manual-heavy. Embedder is changing that.",
    content: `Embedded systems power critical devices across healthcare, automotive, industrial automation, and IoT. Yet despite the stakes, embedded software engineers face outdated development workflows that haven't fundamentally changed in decades.

The Problem: Manual Register Mapping and Hardware Fragmentation

Every embedded project starts the same way: engineers receive hardware datasheets—often 500+ pages of dense technical specifications—and must manually transcribe register definitions, bit fields, and memory addresses into code. This isn't optional; it's foundational. A single transcription error can cause hardware faults, timing violations, or compliance failures.

This process is brutally inefficient:
- **Days of manual work**: Engineers spend days reading datasheets, cross-referencing timing diagrams, and manually entering register addresses
- **AI hallucination risk**: Generic AI assistants like ChatGPT generate plausible-looking register definitions that don't match your actual hardware, leading to silent failures in production
- **Fragmented documentation**: Critical constraints are scattered across reference manuals, errata sheets, and application notes—never in one place
- **No hardware validation**: Most IDEs lack built-in hardware verification, so you don't know if your generated code actually works until you have silicon in hand

The Embedded DevTools Gap

While high-level software development has benefited from intelligent tooling (GitHub Copilot, VSCode, modern linters), embedded development still relies on:
- **Vendor tools** like STM32CubeMX that generate bloated, inflexible code
- **Manual datasheet parsing** with no automation
- **Generic AI assistants** that don't understand hardware constraints
- **Disconnected debugging workflows** without root cause analysis

How Embedder Bridges the Gap

Embedder is an AI-powered coding agent purpose-built for embedded engineers. Instead of generic code generation, it does something far more valuable: **it converts hardware datasheets into verified, production-ready firmware**.

Here's what makes it different:

**1. Datasheet-Driven Code Generation**
Embedder's LINUS agent reads your specific hardware documentation—datasheets, timing diagrams, and schematics—and extracts exact register definitions with inline citations. No hallucinations. No guessing. Just hardware-accurate code.

**2. Register Mapping Automation**
Manually transcribing register definitions is error-prone and time-consuming. Embedder extracts bit-field definitions directly from PDFs, reducing what takes days to minutes. The generated code maps exactly to your hardware's actual specifications.

**3. Hardware-in-the-Loop Verification**
Unlike traditional IDEs, Embedder provides Hardware-in-the-Loop (HIL) testing on real silicon and Software-in-the-Loop (SIL) simulation before you have physical hardware. You verify correctness before deployment.

**4. Multi-Document Intelligence**
Embedder automatically connects information scattered across reference manuals, errata sheets, and application notes—something no vendor tool does. If a newer revision of your datasheet contains critical corrections, Embedder incorporates them.

**5. Compliance & Traceability**
For safety-critical applications (medical devices, automotive, aviation), Embedder generates MISRA C:2012, ISO 26262, and IEC 62304 compliant firmware with full documentation traceability. Every line of code can be traced back to its source specification.

**6. Intelligent Debugging**
Embedder's WOZ agent provides read-only debugging and root cause analysis without modifying code, helping engineers understand failures faster.

Impact: 50-80% Code Size Reduction

Embedder generates firmware that's 50-80% smaller and more maintainable than vendor tools like STM32CubeMX. This matters because embedded systems operate under strict constraints:
- **Memory pressure**: Smaller code means more room for application logic and future features
- **Power efficiency**: Less code often means lower power consumption
- **Faster development**: Days of manual work reduced to minutes
- **Higher confidence**: Hardware-verified code with full traceability

The Larger Shift

Embedder represents a fundamental shift in how embedded development should work. Rather than engineers manually translating hardware specifications into code, AI handles the deterministic, rule-based work while engineers focus on architecture and optimization.

This is what intelligent tooling looks like for embedded systems—not generic code completion, but domain-specific automation that understands your hardware constraints and generates provably correct firmware.

For embedded software engineers tired of manual datasheet parsing and vendor tool bloat, Embedder isn't just a tool. It's a glimpse of what modern embedded development could be.

**Want to learn more?** Visit [Embedder's website](https://embedder.com) to see how they're rebuilding embedded development from the ground up.`,
    tags: ["embedded systems", "devtools", "firmware", "AI engineering"],
    link: "https://embedder.com"
  }
];

const BlogGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="flex flex-col gap-12 mt-8 md:gap-16 md:mx-24 lg:mx-48 mb-32">
      {blogPosts.map((post, index) => (
        <motion.article
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className="flex flex-col gap-4 p-6 md:p-8 rounded-lg border border-primary-200 dark:border-neutral-700 hover:border-primary-400 dark:hover:border-neutral-600 transition-colors"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-primary text-2xl md:text-3xl font-display dark:text-white">
              {post.title}
            </h3>
            <div className="flex items-center gap-4 text-sm text-primary-400 dark:text-neutral-400">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <p className="text-primary-400 dark:text-neutral-300 text-base leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-primary-100 dark:bg-neutral-800 text-primary-600 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {expandedIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-primary-200 dark:border-neutral-700"
            >
              <div className="text-primary-400 dark:text-neutral-300 text-base leading-relaxed space-y-4 prose dark:prose-invert max-w-none">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          )}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="relative inline-block text-sm font-medium text-black dark:text-white group focus:outline-none focus:ring"
            >
              <span className="absolute inset-0 border border-black dark:border-white dark:group-active:border-white group-active:border-black"></span>
              <span className="flex items-center gap-2 px-4 py-3 transition-transform bg-white dark:bg-primary-950 border border-black dark:border-white black:active:border-white active:border-black active:bg-primary-100 group-hover:-translate-x-1 group-hover:-translate-y-1">
                {expandedIndex === index ? "Close" : "Read More"}
              </span>
            </button>
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-sm font-medium text-black dark:text-white group focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 border border-black dark:border-white dark:group-active:border-white group-active:border-black"></span>
                <span className="flex items-center gap-2 px-4 py-3 transition-transform bg-white dark:bg-primary-950 border border-black dark:border-white black:active:border-white active:border-black active:bg-primary-100 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Visit →
                </span>
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogGrid;
