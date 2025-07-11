import React from "react";
import ScrollReveal from "./ScrollReveal";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/hero.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Semi-transparent overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <ScrollReveal>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Veonn &mdash; The Future of Minimalist Fashion
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl">
            Discover a curated selection of artisanal garments designed with
            precision &amp; purpose. Effortless style, unmatched quality.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <a
            href="#categories"
            className="inline-block bg-accent text-black font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            Explore Collections
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
