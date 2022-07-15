import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { CssBaseline } from '@mui/material';
import PackageSection from '../components/PackageSection';
import { client } from '../lib/client';
import Footer from '../components/Footer';


export default function Home({products}) {
  return (
    <div>
      <CssBaseline />

      <Navbar />
      <Hero />
      <ProductSection />
      <PackageSection />
      {/* <div className="package">
      {products?.map((product) => <Product key={product._id} product={product} />)}
      </div> */}
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
};
