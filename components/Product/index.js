import React,{useState} from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'


import { urlFor } from '../../lib/client';

const Product = ({ product: { image, name, slug, price }}) => {
  const [qty, setqty] = useState(0);

  const inc = (e) => {
    setqty(qty + 1)
  }

  const dec = () => {
    if(qty > 0) setqty(qty - 1);
  }

  return (
    <>
    <div className="product-wrapper">
      {/* <Link href={`/product/${slug.current}`}> */}
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width='250px'
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <p>
            <span onClick={dec}><Button><RemoveIcon /></Button></span>
            <span>{qty}</span>
            <span onClick={inc}><Button><AddIcon /></Button></span>
          </p>
        </div>
      {/* </Link> */}
    </div>
    </>
  )
}

export default Product