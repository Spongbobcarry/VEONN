import React from "react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "Classic Black Suit",
    price: "$350",
    image: "/classicblacksuit.jpg",
    link: "#"
  },
  {
    name: "Navy Blue Tuxedo",
    price: "$420",
    image: "/navybluetuxedo.jpg",
    link: "#"
  },
  {
    name: "Gray Wool Blazer",
    price: "$280",
    image: "/graywollblazer.jpg",
    link: "#"
  },
  {
    name: "Crisp White Shirt",
    price: "$80",
    image: "/crispwhiteitaliansuit.jpg",
    link: "#"
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12">
            Featured Pieces
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <ScrollReveal key={idx}>
              <a href={prod.link} className="group block">
                <div className="relative overflow-hidden rounded-lg shadow">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary">
                  {prod.name}
                </h3>
                <p className="mt-1 text-lg text-accent">{prod.price}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
