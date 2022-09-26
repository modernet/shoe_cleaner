import React from "react";
// import ProductSection from "../components/ProductSection";
// import PackageSection from "../components/PackageSection";
// import ProductContainer from "../components/productContainer";
// import Product from '../components/Product';
// import Gallery from "../components/Carousel";
// import ProductDetails from "./product/[slug]";
// import ReactFullpage from "@fullpage/react-fullpage";
import AboutUs from "../components/sections/aboutus/AboutUs";
import ContactUs from "../components/sections/contactus/ContactUs";
import Herosection from "../components/sections/herosection/Herosection";
import HowItWorks from "../components/sections/howitworks/Howitworks";
import { Element, Link as ScrollLink } from "react-scroll";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import RightBullets from "../components/utils/RightBullets";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <>
      <RightBullets />
      <div ref={scrollRef}>
        <Element name="section-herosection">
          <Herosection />
        </Element>
        <Element name="section-howitworks">
          <HowItWorks />
        </Element>
        <Element name="section-aboutus">
          <AboutUs />
        </Element>
        <Element name="section-contactus">
          <ContactUs />
        </Element>
      </div>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products }
//   }
