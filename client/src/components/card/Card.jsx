import {Link} from "react-router-dom"
import React from 'react'
import "./card.scss"
function Card(item) {
    console.log("prop data",item);
  return (
    <div className='card'>
        <Link to={`/${item.item.id}`} className='imagecontainer'>
            <img src={item.item.images[0]} alt="" />
        </Link>
        <div className="textcontainer">
            <h2 className="title">
                <Link to={`/${item.item.id}`}>{item.item.title}</Link>
            </h2>
            <p className="adress">
                <img src="images/pin.png" alt="" />
                <span>{item.item.address},{item.item.city}</span>
            </p>
            <p className="price">₹{item.item.price}</p>
            <div className="bottom">
                <div className="features">
                    <div className="feature">
                        <img src="images/bed.png" alt="" />
                        <span>{item.item.bedroom} Bedrooms</span>
                    </div>
                </div>
                <div className="features">
                    <div className="feature">
                        <img src="images/bath.png" alt="" />
                        <span>{item.item.bathroom} Bathrooms</span>
                    </div>
                </div>
                <div className="icons">
                    <div className="icon">
                        <img src="images/save.png" alt="" />
                    </div>
                    <div className="icon">
                        <img src="images/chat.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card