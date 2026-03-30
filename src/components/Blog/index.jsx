import React, { useState } from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Getting Started with React Hooks",
    body: "React Hooks have revolutionized the way we write functional components. In this post, we explore the fundamentals of useState, useEffect, and custom hooks, and how they simplify state management and side effects in modern React applications.",
    tags: ["React", "JavaScript", "Web Development"],
    date: "2025-03-15"
  },
  {
    title: "Deep Learning for Real-Time Applications",
    body: "Deploying deep learning models in production requires careful consideration of latency and resource constraints. This article discusses optimization techniques, quantization, and edge computing strategies for running neural networks in real-time environments.",
    tags: ["Deep Learning", "Python", "ML Ops"],
    date: "2025-02-28"
  },
  {
    title: "Building Scalable APIs with Node.js",
    body: "Learn how to architect scalable REST APIs using Node.js and Express. We cover database design, caching strategies, rate limiting, and best practices for handling concurrent requests in production environments.",
    tags: ["Node.js", "Backend", "API Design"],
    date: "2025-02-10"
  },
  {
    title: "The Art of Data Visualization",
    body: "Effective data visualization is key to communicating insights. Discover techniques for choosing the right chart types, color schemes, and interactive tools to tell compelling stories with your data.",
    tags: ["Data Science", "Visualization", "Analytics"],
    date: "2025-01-25"
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col gap-12 mt-8 md:gap-16">
      {blogPosts.map((post, index) => (
        <motion.article
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className="border-l-4 border-secondary pl-6 py-4 hover:border-secondary-300 transition-colors"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-display text-primary dark:text-white">
                {post.title}
              </h3>
              <time className="text-sm text-primary-400 dark:text-neutral-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </time>
            </div>
            <p className="text-primary-400 dark:text-neutral-300 font-light leading-relaxed">
              {post.body}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block px-3 py-1 text-sm bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-100 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Blog;
