import React, { useEffect, useState } from "react";
import axios from 'axios';

import CheckoutForm from "./CheckoutForm";

import "./styles/SnackPreview.scss";
// import classNames from "classnames";


export default function SnackPreview(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products")
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.log(error))
  }, []);

  // console.log(products);

  const productList = products.map(item => {
    if (item.tier === props.tier) {
      return (
        <div className="product">
          <img src={item.img_url} alt={item.name} />
          <p>{item.name}</p>
        </div>
      );
    }
  });

  return (
    <section className="layout preview-layout">
      <div className="disclaimer">
        <h3>Preview</h3>
        <div>You will receive a <strong><em>random assortment</em></strong> of snacks from the list below based on the <strong><em>selected tier</em></strong>.</div>
      </div>
      <div className="product-scroller">
        {productList}
      </div>
      <CheckoutForm />
    </section>
  );
}