import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building Scalable Web Applications with React",
    body: "In this post, I explore best practices for building scalable React applications. We'll cover component architecture, state management strategies, and performance optimization techniques that can help you build applications that grow with your users.",
    tags: ["React", "Web Development", "Performance"],
    date: "2024-03-15"
  },
  {
    title: "Deep Learning for Computer Vision: A Practical Guide",
    body: "A comprehensive guide to implementing deep learning models for computer vision tasks. This article covers CNN architectures, transfer learning techniques, and real-world applications including medical imaging and autonomous systems.",
    tags: ["Deep Learning", "Computer Vision", "PyTorch", "Python"],
    date: "2024-02-28"
  },
  {
    title: "Firmware Development for Embedded Systems",
    body: "Exploring the gaps in development tools for embedded software engineers. This post discusses firmware development challenges, debugging strategies, and toolchain optimization for resource-constrained environments.",
    tags: ["Embedded Systems", "Firmware", "C++", "Development Tools"],
    date: "2024-02-10"
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col gap-16 mt-12 md:gap-20 md:mx-12 lg:mx-32">
      {blogPosts.map((post, index) => (
        <motion.article
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className="border-l-4 border-primary dark:border-secondary pl-6 py-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary text-2xl md:text-3xl font-display dark:text-white">
                {post.title}
              </h3>
              <p className="text-primary-400 text-sm dark:text-neutral-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <p className="text-primary-400 text-base dark:text-neutral-300 font-light leading-relaxed">
              {post.body}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary dark:text-secondary-100 rounded-full font-medium"
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
