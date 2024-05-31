import React, { useState } from 'react'
import "./SearchBar.scss"
import { Link } from 'react-router-dom'

const types=["buy","rent"]
function SearchBar() {
    const [query,setQuery]=useState({
        type:"buy",
        city:"",
        minPrice:0,
        maxPrice:0
    })


    const switchType=(val)=>{
        setQuery(prev=>({...prev,type:val}))
    }
    const handlechange=e=>{
        setQuery(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
  return (
    <div className='searchbar'>
        <div className="type">
        {types.map((type) => {
    return (
        <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
            {type}
        </button>
    );
})}

        </div>
        <form >
            <input type="text" name='city' placeholder='City' onChange={handlechange}/>
            <input type="number" name='minPrice'min={0} max={10000000}  placeholder='Min Price'onChange={handlechange}/>
            <input type="number" name='maxPrice'min={0} max={10000000} placeholder='Max Price'onChange={handlechange}/>
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>

        <button>
            <img src="images/search.png" alt="" />
        </button>
        </Link>
        </form>
    </div>
  )
}

export default SearchBar