import React, { useState } from 'react'
import "./card.css"
import {cardContent} from "../../assets/util/constants"
import { PiHeartStraightBold, PiHeartStraightFill, PiStarFill } from 'react-icons/pi'
import { BsCartPlus } from "react-icons/bs";


const Card = () => {
  const [favourites, setFavourites] = useState([])

  const handleFavClick = (id) =>{
    setFavourites((prevState)=>
      prevState.includes(id) ? prevState.filter((favId)=> favId !== id) : [...prevState, id]
    )
  }

  return (
    <div className='card-wrapper'>
        {cardContent.map((item)=>(
            <div className="card" key={item.id}>
                <div className="card-img">
                    <img src={item.image} alt="" />
                </div> 
                <div className="card-content" >
                  <div className='card-fav'>
                    <p><strong>{item.name} </strong></p>
                    <span
                className="fav-button"
                onClick={() => handleFavClick(item.id)}
              >
                {favourites.includes(item.id) ? (
                  <PiHeartStraightFill style={{ color: 'red' }} />
                ) : (
                  <PiHeartStraightBold />
                )}
              </span> </div>
                    <p>
              {item.desc.length > 50
                ? `${item.desc.slice(0, 50)}...`
                : item.desc}</p>
                    <p>{item.cusine}</p>
                    <p><strong>₹{item.price}</strong></p>
                    <p className='rating-stars'><strong>{[...Array(parseInt(item.ratingCount))].map((_, i) => (
                        <PiStarFill key={i} className="filled-star" style={{ color: '#f39c12', marginRight: '5px', fontSize: '20px' }}/>))}</strong>
                    </p> 
                </div>
                <div className="card-btn">
                <button className='cart-button'>Add to cart</button>
                  <span className="cart-icon-btn"> <BsCartPlus /></span>
                </div>
            </div>
      ))            
    }
    </div>
  )
}

export default Card
