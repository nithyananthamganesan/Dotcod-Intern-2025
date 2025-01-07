import React from 'react'
import "./card.css"
import {cardContent} from "../../assets/util/constants"
import { PiStarFill, PiStarLight } from 'react-icons/pi'

const Card = () => {
  return (
    <div className='card-wrapper'>
        { cardContent.map((item)=>(
            <div className="card" key={item.id}>
                <div className="card-img">
                    <img src={item.image} alt="" />
                </div> 
                <div className="card-content" >
                    <p><strong>{item.name}</strong></p>
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
                <button className='cart-button'>Add to cart</button>
            </div>
      ))            
    }
    </div>
  )
}

export default Card
