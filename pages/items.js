import { CssBaseline } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import { client } from '../lib/client';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';

export default function Items({products}) {
  return (
    <div>
        <CssBaseline>
        <Navbar />
        <Grid container spacing={2} xs={{
          marginTop : '40px',
        }} >
        <div className="package">
        {products?.map((product) => <Product item xs={3} key={product._id} product={product} />)}
        </div>
        </Grid>
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