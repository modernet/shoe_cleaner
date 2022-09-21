import React from "react";
// import ProductSection from "../components/ProductSection";
// import PackageSection from "../components/PackageSection";
// import ProductContainer from "../components/productContainer";
// import Product from '../components/Product';
// import Gallery from "../components/Carousel";
// import ProductDetails from "./product/[slug]";
import ReactFullpage from "@fullpage/react-fullpage";
import AboutUs from "../components/sections/aboutus/AboutUs";
import ContactUs from "../components/sections/contactus/ContactUs";
import Herosection from "../components/sections/herosection/Herosection";
import HowItWorks from "../components/sections/howItWorks/HowItWorks";

export default function Home() {
  return (
    <div>
      <ReactFullpage
        licenseKey={"Your_Key"}
        navigation
        navigationPosition={"right"}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Herosection />
              </div>
              <div className="section">
                <HowItWorks />
              </div>
              <div className="section">
                <AboutUs />
              </div>
              <div className="section">
                <ContactUs />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

  // export const getServerSideProps = async () => {
  //   const query = '*[_type == "product"]';
  //   const products = await client.fetch(query);

  //   return {
  //     props: { products }
  //   }

