import React from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../Store/cartSlice"
import { LazyLoadImage } from "react-lazy-load-image-component"



export const ProductCart = ({ id, cover, name, price, desc }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link >
            <LazyLoadImage src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <p>{desc}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}