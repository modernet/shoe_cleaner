import { CssBaseline } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar/itemsNav';
import { client } from '../lib/client';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';

import Footer from '../components/Footer';

export default function Items({products}) {
  

  return (
    <div>
        <CssBaseline>
        <Navbar />
        <div className="items">
        <Grid container spacing={2} >
        <Grid item sx={3}>
        {products?.map((product) => <Product item xs={3} key={product._id} product={product} />)}
        </Grid>
        </Grid>
        
        </div>
        <Footer />
        </CssBaseline>
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