import React, { Suspense } from 'react';
import './ListPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router-dom';

function ListPage() {
  const data = useLoaderData();
  console.log('Loaded data:', data.postResponse.data.post);

  // Extract the post array from the data object



  return (
    <div className='listpage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading post!</p>}
            >
              {(postResponse)=>postResponse.data.post.map(post=>{
               return <Card key={post.id} item={post}></Card>
              })}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapcontainer">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;
