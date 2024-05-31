import React from 'react'
import "./List.scss"
import Card from "../card/Card"
import { products } from '../../lib/DummyData'
function List() {
    
  return (
    <div className='list'>
        {products.map(item=>{
            return <Card key={item.id} item={item}/>
        })}
    </div>
  )
}

export default List