import React from "react";
import Navbar from "./components/Navnar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
