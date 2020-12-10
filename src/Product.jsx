import React from 'react'
import "./Product.css"
import { useStateValue } from './Stateprovider'

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket >>>", basket)

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p>🔥</p>))}
        </div>
      </div>
      <img src={image} alt="book"/>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
