"use client"

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Toolkits from "./components/Toolkits";
import Ability from "./components/Ability";
import Casestudy from "./components/Casestudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import Carousel from "./components/Carousel";


export default function Home() {
  const top = () => {window.scrollTo(0,0)};

  return (
    <main>
      <Navbar />
      <Hero />
      <Toolkits />
      <Ability />
      <Casestudy />
      <Carousel />
      <Contact />
      <Footer />
      <TopButton />

    </main>
  );
}
