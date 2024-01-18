import "./product.css";
import React, { useEffect } from 'react';
const Products = ({ result,cartVisible }) => {
  useEffect(() => {
    console.log('Products component re-rendered');
  }, [result, cartVisible]);
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;