import React, { useState } from "react";
import "./chat.scss";
function Chat() {
    const [chat,setChat]=useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
        <div className="message">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet... </p>
        </div>
      </div>
      {chat && (<div className="chatbox">
        <div className="top">
          <div className="user">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            John Doe
          </div>
          <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
          <div className="chatmessage">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessage own">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessage">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessage own">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessage">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
          <div className="chatmessage own">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
            <textarea ></textarea>
            <button>Send</button>
        </div>
      </div>)}
    </div>
  );
}

export default Chat;
