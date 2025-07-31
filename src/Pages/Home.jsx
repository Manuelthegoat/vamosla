import React from 'react'
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Destination from "../Components/Destination";
import Packages from "../Components/Packages";
import Travel from "../Components/Travel";
import Counter from "../Components/Counter";
import Special from "../Components/Special";
import Discount from "../Components/Discount";
import CTA from "../Components/CTA";

const Home = () => {
  return (
    <>
        <Hero />
          <Banner />
          <Destination />
          <Packages />
          <Travel />
          <Counter />
          <Special />
          <Discount />
          <CTA />
    </>
  )
}

export default Home
