import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
function SinglePage() {
  const post = useLoaderData();
  console.log(post);
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.singlepost.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.singlepost.title}</h1>
                <div className="address">
                  <img src="images/pin.png" alt="" />
                  <span>
                    {post.singlepost.address},{post.singlepost.city}
                  </span>
                </div>
                <div className="price">₹{post.singlepost.price}</div>
              </div>
              <div className="user">
                <img src={post.singlepost.User.avatar} alt="" />
                <span>{post.singlepost.User.name}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.singlepost.Postdetail.desc)}}></div>
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
                <p>{post.singlepost.Postdetail.utilities}</p>
              </div>
            </div>
            <div className="feature">
              <img src="images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.singlepost.Postdetail.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="images/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>₹{post.singlepost.Postdetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="images/size.png" alt="" />
              <span>{post.singlepost.Postdetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="images/bed.png" alt="" />
              <span>{post.singlepost.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="images/bath.png" alt="" />
              <span>{post.singlepost.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listhorizontal">
            <div className="feature">
              <img src="images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.singlepost.Postdetail.school > 999
                    ? post.singlepost.Postdetail.school / 1000 + "Km"
                    : post.singlepost.Postdetail.school + "m"}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="images/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post.singlepost.Postdetail.bus > 999
                    ? post.singlepost.Postdetail.bus / 1000 + "Km"
                    : post.singlepost.Postdetail.bus + "m"}{" "}
                  Away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="images/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>
                  {post.singlepost.Postdetail.restaurant > 999
                    ? post.singlepost.Postdetail.restaurant / 1000 + "Km"
                    : post.singlepost.Postdetail.restaurant + "m"}{" "}
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
            <button>
              <img src="images/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
