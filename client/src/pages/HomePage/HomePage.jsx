import React, { useContext } from "react";
import "./HomePage.scss";
import SearchBar from "../../components/SearchBar";
import { AuthContext } from "../../context/AuthContext";
function HomePage() {
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser);
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            numquam rerum ipsum mollitia quae, consectetur ratione voluptatem,
            sed cumque ullam veniam assumenda totam hic nesciunt dolores, eaque
            dolorem cum aliquam?
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years Of Experience</h2>
            </div>
            <div className="box">
                <h1>200+</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="images/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
