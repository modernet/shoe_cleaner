import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { CssBaseline } from '@mui/material';


export default function Home() {
  return (
    <>
      <CssBaseline />

      <Navbar />
      <Hero />
      <ProductSection />
    </>
  )
}
