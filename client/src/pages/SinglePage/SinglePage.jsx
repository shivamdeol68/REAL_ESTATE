import React, { useContext, useState } from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { AuthContext } from "../../context/AuthContext";
import apirequest from "../../lib/apiRequest";
function SinglePage() {
  const post = useLoaderData();
  console.log("SinglePost-Data",post);
  const navigate=useNavigate();
  const [saved,setSaved]=useState(post.isSaved)

  const {currentUser}=useContext(AuthContext)
  const handleSubmit=async()=>{
    setSaved((prev)=>!prev);
    if(!currentUser){
      navigate('/login')
    }
    try {
      await apirequest.post("/user/save",{postId:post.id})
    } catch (error) {
    setSaved((prev)=>!prev);
      console.log(error);
    }
  }
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="images/pin.png" alt="" />
                  <span>
                    {post.address},{post.city}
                  </span>
                </div>
                <div className="price">₹{post.price}</div>
              </div>
              <div className="user">
                <img src={post.User.avatar} alt="" />
                <span>{post.User.name}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.Postdetail.desc)}}></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listvertical">
            <div className="feature">
              <img src="images/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{post.Postdetail.utilities}</p>
              </div>
            </div>
            <div className="feature">
              <img src="images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.Postdetail.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="images/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>₹{post.Postdetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="images/size.png" alt="" />
              <span>{post.Postdetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="images/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="images/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listhorizontal">
            <div className="feature">
              <img src="images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.Postdetail.school > 999
                    ? post.Postdetail.school / 1000 + "Km"
                    : post.Postdetail.school + "m"} away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="images/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post.Postdetail.bus > 999
                    ? post.Postdetail.bus / 1000 + "Km"
                    : post.Postdetail.bus + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="images/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>
                  {post.Postdetail.restaurant > 999
                    ? post.Postdetail.restaurant / 1000 + "Km"
                    : post.Postdetail.restaurant + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapcontainer">
            {/* items={[singleDataData]} */}
            <Map />
          </div>
          <div className="buttons">
            <button>
              <img src="images/chat.png" alt="" />
              Send a Message
            </button>
            <button onClick={handleSubmit} style={
              {backgroundColor:saved? "#fece51" : "#fff"}

            }>
              <img src="images/save.png" alt="" />
              {saved?"place Saved":"Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
