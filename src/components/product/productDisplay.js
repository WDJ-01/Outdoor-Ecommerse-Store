import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { products } from "../../resources/data/data";

export const ProductDisplay = () => {
  const { id } = useParams();
  const product = products.find((product) => String(product.id) === id);
  const {name, price, cover} = product
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log(`yes and ${id},  ${name},  ${price}`)
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };
  return (
    <>
      <div className="product_display">
        <div className="subdiv">
          <div className="product_display_img_div">
            <LazyLoadImage
              className="product_display_img"
              src={
                require(`../../resources/images/products/${product.cover}`)
                  .default
              }
              alt="cover"
            />
          </div>
          <div className="product_display_details">
            <h3>${product.price}</h3>
            <p>{product.name}</p>
            <p>{product.desc}</p>
            <button onClick={addToCart}>
              <AiOutlinePlusCircle style={{fontSize: '1rem'}} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
