import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Customization from "./components/Customization";
import HowItWorks from "./components/HowItWorks";
import DemoProject from "./components/DemoProject";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Customization />
        <HowItWorks />
        <DemoProject />
        <CTA />
      </main>

      <Footer />
    </>
  );
}