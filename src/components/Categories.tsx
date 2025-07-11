// src/components/Categories.tsx

import React from "react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    name: "Men’s Formal",
    image: "/category1.jpg",
    link: "#"
  },
  {
    name: "Women’s Luxury",
    image: "/category2.jpg",
    link: "#"
  },
  {
    name: "Accessories",
    image: "/category3.jpg",
    link: "#"
  }
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12">
            Shop by Category
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx}>
              <a
                href={cat.link}
                className="relative block overflow-hidden rounded-lg shadow-lg group"
              >
                {/* Category image (served from public/categoryX.jpg) */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category name */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {cat.name}
                  </h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
