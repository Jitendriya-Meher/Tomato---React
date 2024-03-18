import React, { useContext, useState } from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({item}) => {

    const { cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>

        <div className="food-item-image-container">
            <img src={item.image} alt="" className='food-item-image' />
            {
                !cartItems[item._id] ? (
                    <img src={assets.add_icon_white} className='add'
                    onClick={()=>{
                        addToCart(item._id)
                    }}></img>
                ):(
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} alt="" 
                            onClick={()=>{
                                removeFromCart(item._id);
                            }}
                        />
                        <p>
                            {cartItems[item._id]}
                        </p>
                        <img src={assets.add_icon_green} alt="" 
                        onClick={()=>{
                            addToCart(item._id)
                        }} />
                    </div>
                )
            }
        </div>

        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>
                    {item.name}
                </p>
                <img src={assets.rating_starts} alt="" />
            </div>
                <p className="food-item-desc">
                    {item.description}
                </p>
                <p className='food-item-price'>
                    ${item.price}
                </p>
        </div>

    </div>
  )
}

export default FoodItem