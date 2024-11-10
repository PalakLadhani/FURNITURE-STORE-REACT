import React from "react";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Counter from "../components/Counter";
import CEOSection from "../components/CEOSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <Counter />
      <CEOSection />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
