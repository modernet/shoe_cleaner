import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { CssBaseline } from '@mui/material';
import PackageSection from '../components/PackageSection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <CssBaseline>

      <Navbar />
      <Hero />
      <ProductSection />
      <PackageSection />
      <Footer />

      </CssBaseline>
    </div>
  )
}


