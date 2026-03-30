import React, { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: "firmware-devtools",
    title: "The Invisible Gaps: Why Embedded Software Engineers Deserve Better DevTools",
    date: "March 29, 2026",
    readTime: "8 min read",
    excerpt:
      "Firmware development tools haven't evolved at the pace of web and backend tooling. Here's why embedded engineers deserve modern, ergonomic development experiences.",
    content: `
## The Problem No One Talks About

If you've worked in firmware or embedded systems development, you know the pain. Your desktop application gets hot-reloaded in milliseconds. Your web services deploy in seconds. But your embedded project? You're compiling for 10 minutes, programming for 2 more, and if something goes wrong, you're debugging with print statements and blinking LEDs.

This isn't a limitation of the domain—it's a failure of the tooling ecosystem to modernize alongside the rest of software engineering.

## Gap 1: Compilation and Build Optimization

Web developers benefit from incremental compilation, tree-shaking, and dead code elimination as standard features. Embedded developers often work with makefiles that recompile entire projects because the build system can't track granular dependencies.

Modern build systems like Gradle, Bazel, and Turbopack have solved this for application developers. Yet RTOS and firmware projects still rely on CMake, makefiles, and ad-hoc build scripts from the 2000s. The result:
- 10+ minute rebuild times for medium-sized projects
- Wasted developer time waiting instead of iterating
- Reduced testing frequency due to long feedback loops

What we need:
- **Fast incremental builds** that understand ARM/RISC-V/x86 object dependencies
- **Cross-platform build caching** that survives hardware changes
- **Integration with CI/CD** that doesn't require custom scripting

## Gap 2: Debugging and Introspection

JavaScript developers debug with DevTools that show live variable inspection, network requests, and performance profiles in real time. Embedded engineers debug with:
- GDB scripts that require you to know memory addresses
- Printf-based debugging that slows execution
- JTAG adapters that cost $500+ and require specialized knowledge

A firmware developer debugging a real-time system faces this paradox: the moment you attach a debugger and halt the CPU, your real-time deadlines break. The system you're debugging ceases to exist.

What we need:
- **Non-intrusive sampling-based profilers** that don't halt execution
- **High-speed data logging** to ring buffers with minimal overhead
- **IDE integration** that makes GDB commands discoverable, not mystical
- **Hardware-agnostic debuggers** that work across ARM Cortex-M, RISC-V, and x86 without recompiling your firmware

## Gap 3: Version Control and Change Management

Backend teams use sophisticated dependency management (npm, Maven, Cargo) with semantic versioning and automated updates. Embedded teams often manage versioning through:
- Submodule hell
- Manual header file copies
- Monorepo structures that duplicate code across projects

Worse, there's no standardized package management for hardware drivers, HALs (Hardware Abstraction Layers), and middleware. Each manufacturer maintains proprietary ecosystems—STM32CubeMX, NXP MCUXpresso, TI Code Composer—and they rarely interoperate.

What we need:
- **Unified HAL package managers** (think npm for firmware)
- **Semantic versioning for RTOS and middleware**
- **Automated compatibility checking** between firmware versions and hardware revisions

## Gap 4: Testing and Quality Assurance

Web teams test with Jest, Vitest, and Playwright. Mobile teams use XCTest and Espresso. Embedded teams? They often test by burning firmware to hardware, crossing fingers, and hoping the integration test passes.

Unit testing in embedded spaces exists (Google Test, CppUTest) but rarely integrates with:
- Hardware-in-loop testing
- CI/CD pipelines (hardware is physical, expensive, and requires special runners)
- Coverage analysis that accounts for interrupt handlers and concurrent execution

What we need:
- **Accessible hardware simulation** (QEMU integration, not proprietary emulators)
- **CI/CD-friendly testing frameworks** that don't require physical hardware
- **Coverage tools that understand RTOS context switching**
- **Deterministic replay for timing-dependent bugs**

## Gap 5: Performance Profiling and Analytics

React developers get DevTools that show exactly which components re-render and why. Python developers get cProfile and py-spy. Embedded engineers get... scope shots.

Real-time systems have unique constraints: you can't just profile the whole application. You need:
- Per-task CPU usage
- Interrupt latency measurements
- Memory fragmentation analysis
- Power consumption per component

Modern profilers exist (Segger SystemView, Percepio Tracealyzer) but they're expensive ($2,000+), hardware-specific, and often require proprietary integration.

What we need:
- **Open-source, standardized tracing protocols** (beyond ELF and DWARF)
- **Affordable (or free) visualization tools**
- **Automatic anomaly detection** in real-time metrics
- **Power profiling built into toolchains**

## Gap 6: The Development Environment Experience

A web developer's setup: npm install, npm run dev. Full IDE with hot reload, linting, type-checking, formatting.

An embedded developer's setup:
1. Download the vendor's IDE (often bloated, slow, closed-source)
2. Install 3 different toolchains for 3 different architectures
3. Hope your shell environment variables are correct
4. Use makefiles to automate a fragile build process
5. Pray that debugging works

There's no equivalent of VS Code + extensions for embedded development. The closest options (STM32CubeIDE, Code Composer Studio) feel like relics from 2010.

What we need:
- **Vendor-agnostic IDE support** (VSCode extensions that actually work)
- **One-click environment setup** (devcontainers for firmware)
- **Built-in package management** for toolchains and SDKs
- **Cross-vendor project templates** to reduce boilerplate

## Why This Matters

Every hour a firmware engineer wastes waiting for builds or struggling with tools is an hour not spent:
- Building safety-critical systems
- Optimizing power consumption for IoT devices
- Innovating in robotics, medical devices, and autonomous systems

The embedded systems market is worth $400+ billion annually. Yet the tools haven't evolved as fast as web, mobile, or backend tooling. This isn't a hardware limitation—it's an ecosystem problem.

## What Can Change

1. **Vendors should prioritize open toolchains** over proprietary IDEs
2. **The open-source community should build cross-platform solutions** (embedded.com already tries; it needs more support)
3. **Frameworks should own the developer experience** (Zephyr, FreeRTOS should have modern CLI tools)
4. **Tool creators should learn from web/mobile** (hot reload, language servers, test frameworks)

Embedded systems development is too important to be left in the 2000s. We have the technology to modernize it. We just need the will.

The next generation of firmware engineers shouldn't have to choose between powerful tools and shipping real products. They deserve both.
    `,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="flex flex-col gap-20 mt-32 md:gap-24 md:mx-24 lg:mx-48">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          className="blog-card flex flex-col gap-6 items-start relative md:gap-8 text-left cursor-pointer group"
          onClick={() => setSelectedPost(post.id)}
        >
          <span className="blog-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden xl:block">
            0{index + 1}
          </span>

          <div className="w-full z-10 relative">
            <h2 className="text-primary text-4xl font-display dark:text-white group-hover:text-secondary-500 dark:group-hover:text-secondary-400 transition-colors">
              {post.title}
            </h2>
            <div className="flex gap-4 mt-4 text-primary-400 dark:text-neutral-300 text-sm font-light">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-primary-400 dark:text-neutral-300 text-lg font-light mt-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-8">
              <button className="relative inline-block text-sm font-medium text-black dark:text-white group/btn focus:outline-none focus:ring">
                <span className="absolute inset-0 border border-black dark:border-white"></span>
                <span className="flex items-center gap-3 px-4 py-3 transition-transform bg-222831 border border-black dark:border-white group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1">
                  Read Article
                </span>
              </button>
            </div>
          </div>

          {selectedPost === post.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedPost(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-primary max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-8 md:p-12"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="float-right text-primary dark:text-white hover:text-secondary-500 text-2xl font-bold"
                >
                  ✕
                </button>
                <article className="prose dark:prose-invert max-w-none">
                  <h1 className="text-primary dark:text-white text-4xl font-display mb-4">
                    {post.title}
                  </h1>
                  <div className="flex gap-4 mb-8 text-primary-400 dark:text-neutral-300 text-sm font-light">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-primary-600 dark:text-neutral-200 leading-relaxed whitespace-pre-wrap text-lg">
                    {post.content.trim()}
                  </div>
                </article>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Blog;
