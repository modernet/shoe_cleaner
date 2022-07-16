import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import { CssBaseline } from '@mui/material';
import PackageSection from '../components/PackageSection';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div>
      <CssBaseline>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <ProductSection />
      <PackageSection />
      <Footer />

      </CssBaseline>
    </div>
  )
}


