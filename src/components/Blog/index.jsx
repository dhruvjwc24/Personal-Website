import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Getting Started with React Hooks",
    body: "React Hooks have revolutionized how we write functional components. Learn the basics of useState and useEffect, and how they can simplify your component logic while improving code readability and reusability.",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    body: "Explore best practices for designing RESTful APIs using Node.js and Express. We'll cover request validation, error handling, middleware patterns, and how to structure your code for long-term maintainability.",
    tags: ["Node.js", "Express", "Backend", "API Design"]
  },
  {
    title: "Deep Learning in Computer Vision: A Practical Guide",
    body: "An in-depth look at convolutional neural networks and their applications in computer vision. From image classification to object detection, discover how deep learning transforms visual data into actionable insights.",
    tags: ["Deep Learning", "Computer Vision", "PyTorch", "TensorFlow"]
  },
  {
    title: "Optimizing Database Queries for Performance",
    body: "Database performance is critical for scalable applications. Learn about indexing strategies, query optimization techniques, and how to identify and fix slow queries using modern profiling tools.",
    tags: ["Database", "SQL", "Performance", "Optimization"]
  }
];

const Blog = () => {
  return (
    <div className="flex flex-col gap-12 mt-8 md:gap-16 md:mx-6 lg:mx-32">
      {blogPosts.map((post, index) => (
        <motion.article
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className="blog-card border-l-4 border-secondary pl-6 py-4 bg-gradient-to-r from-primary-50 to-white dark:from-neutral-800 dark:to-neutral-900 rounded-r-lg dark:border-secondary-500 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-primary text-2xl font-display mb-3 dark:text-white">
            {post.title}
          </h3>
          <p className="text-primary-400 text-base dark:text-neutral-300 font-light leading-relaxed mb-4">
            {post.body}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-block px-3 py-1 text-sm font-medium text-secondary bg-secondary-50 dark:bg-secondary-900 dark:text-secondary-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Blog;
