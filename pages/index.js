import React from "react";
// import ProductSection from "../components/ProductSection";
// import PackageSection from "../components/PackageSection";
// import ProductContainer from "../components/productContainer";
// import Product from '../components/Product';
// import Gallery from "../components/Carousel";
// import ProductDetails from "./product/[slug]";
import ReactFullpage from "@fullpage/react-fullpage";
import Herosection from "../components/sections/herosection/Herosection";

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
              <div className="section">Another Section</div>
              <div className="section">Another Section</div>
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

