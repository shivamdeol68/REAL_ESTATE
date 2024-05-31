import React from 'react';
import './ListPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';

function ListPage() {
  const data = useLoaderData();
  console.log('Loaded data:', data);

  // Extract the post array from the data object



  return (
    <div className='listpage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          {data.post.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;
