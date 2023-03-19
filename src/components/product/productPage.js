import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { products } from "../../resources/data/data";
import "./product.css";
import { ProductCart } from "./productCart";

export const ProductPage = () => {
  return (
    <>
      <section className="product">
        <h1>Products</h1>

        <div className="container grid3">
          { products.map(
            (item) => (
              console.log(item.cover),
              (
                <ProductCart
                  key={item.id}
                  id={item.id}
                  cover={require(`../../resources/images/products/${item.cover}`).default}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                />
              )
            )
          )}
        </div>
      </section>
    </>
  );
};
