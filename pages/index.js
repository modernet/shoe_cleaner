import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { CssBaseline } from '@mui/material';
import PackageSection from '../components/PackageSection';


export default function Home() {
  return (
    <>
      <CssBaseline />

      <Navbar />
      <Hero />
      <ProductSection />
      <PackageSection />
    </>
  )
}


