import React from "react";
import Nav from "../components/Nav";
import HeroContent from "../components/HeroContent";
import AllProperties from "../components/AllProperties";
import Pagination from "../components/Pagination";
import SliderProperty from "../components/SliderProperty";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="hero-section w-full min-h-[680px]">
        <Nav />
        <HeroContent />
      </div>
      <AllProperties />
      {/* pagination */}
      <Pagination />
      <SliderProperty />
      <Footer />
    </>
  );
};

export default Home;
