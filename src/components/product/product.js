import React from "react";
import { products } from "../../resources/data/data";
import "./product.css";
import { ProductCart } from "./productCart";

export const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          { products.map(
            (item) => (
              console.log(item.cover),
              (
                <ProductCart
                  key={item.id}
                  id={item.id}
                  cover={require(`../../resources/images/products/${item.cover}`)}
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
