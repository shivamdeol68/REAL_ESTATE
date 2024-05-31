import React, { useState } from 'react'
import "./slider.scss"
function Slider({images}) {
    const [Image,setImage]=useState(null)
    // const changeSlide = (direction)=>{
    //     if (direction==="left") {
    //         if (Image===0) {
    //             setImage(Image.lenght-1)
    //         }else{
    //             setImage(Image-1)
    //         }
            
    //     }else{
    //         if (Image===Image.lenght-1) {
    //             setImage(0)
    //         }else{
    //             setImage(Image.lenght+1)
    //         }
    //     }
    // }
    const changeSlide = (direction) => {
        if (direction === "left") {
            if (Image === 0) {
                setImage(images.length - 1);
            } else {
                setImage(Image - 1);
            }
        } else {
            if (Image === images.length - 1) {
                setImage(0);
            } else {
                setImage(Image + 1);
            }
        }
    }
    
  return (
    <div className='slider'>   
    {Image !== null && (<div className="fullslider">
        <div className="arrow" onClick={()=>changeSlide("left")}>
          <img src="images/arrow.png" alt="" />
        </div>
        <div className="imgcontainer">
          <img src={images[Image]} alt="" />
        </div>
        <div className="arrow" onClick={()=>changeSlide("right")}>
          <img src="images/arrow.png" className='right' alt="" />
        </div>
        <div className="close" onClick={()=>setImage(null)}>X</div>
      </div>)}
        <div className="bigimage">
            <img src={images[0]} alt="" onClick={()=>setImage(0)}/>
        </div>
        <div className="smallimage">
            {images.slice(1).map((image,index)=>{
                return <img key={index} src={image} alt=""  onClick={()=>setImage(index+1)}/>
            })}
        </div>
    </div>
  )
}

export default Slider