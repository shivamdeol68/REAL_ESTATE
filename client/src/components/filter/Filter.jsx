import React, { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";
function Filter() {

  const [searchParam,setSearchParam]=useSearchParams();
  console.log(searchParam.get("city"));
  const [query,setquery]=useState({
    type:searchParam.get("type")||"",
    city:searchParam.get("city")||"",
    property:searchParam.get("property")||"",
    minPrice:searchParam.get("minPrice")||0,
    maxPrice:searchParam.get("maxPrice")||1000000,
    bedroom:searchParam.get("bedroom")||1,
  });

const handlefilter=()=>{
  setSearchParam(query);
}
  const handlechange=(e)=>{
    setquery({
      ...query,
      [e.target.name]:e.target.value,
    })
  }
  return (
    <div className="filter">
      <h1>
        Search result for <b>{searchParam.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handlechange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
        <label htmlFor="type">Type</label>
        <select name="type" id="type"  onChange={handlechange} defaultValue={query.type}>
        <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
        </select>
        </div>
        <div className="item">
        <label htmlFor="property">Property</label>
        <select name="property" id="property"onChange={handlechange} defaultValue={query.property}>
        <option value="">any</option>
        <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
        </select> 
        </div>
        <div className="item">
        <label htmlFor="minprice">Min Price</label>
        <input type="number" id="minprice" name="minPrice" placeholder="any" onChange={handlechange} defaultValue={query.minPrice}/>
        </div>
        <div className="item">
        <label htmlFor="maxprice">Max Price</label>
        <input type="number" id="maxprice" name="maxPrice" placeholder="any" onChange={handlechange}defaultValue={query.maxPrice}/>
        </div>
        <div className="item">
        <label htmlFor="bedroom">Bedroom</label>
        <input type="text" id="bedroom" name="bedroom" placeholder="any" onChange={handlechange}defaultValue={query.bedroom}/>
        </div>
        <button onClick={handlefilter}>
          <img src="images/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
