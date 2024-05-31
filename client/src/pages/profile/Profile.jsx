import React, { useContext } from "react";
import "./profile.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apirequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Profile() {
  const {currentUser,updateUser}=useContext(AuthContext)
  const navigate=useNavigate();

  const handlelogout=async()=>{
    try {
      await apirequest.post("/auth/logout")
      updateUser(null)
      navigate('/')
    } catch (error) {
      
    }
  }
  return (
      <div className="profilepage">
      <div className="detail">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar : 
              <img
                src={currentUser.avatar || "images/noavatar.jpg"}
                alt=""
              />
            </span>
            <span>Username : <b>{currentUser.name}</b></span>
            <span>email : <b>{currentUser.email}</b></span>
            <button onClick={handlelogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
            <button>Create New Post
              </button>
              </Link>
          </div>
          <List/>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>

        </div>
      </div>
      <div className="chatcontainer">
        <div className="wrapper"><Chat/></div>
      </div>
    </div>
  
  );
}

export default Profile;
