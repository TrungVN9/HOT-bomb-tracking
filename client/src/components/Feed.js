import React, { useMemo, useState } from 'react';
import '../styles/Feed.css';


const geocode_token = "pk.eyJ1IjoianNoZW4xMiIsImEiOiJjbDA0YmxkN2owOHUxM2RudHF1dTBkZjFmIn0.Sp0jaOXuPrWRgIwM-5ut9Q";


function Post(props) {

  return (
    <div className="post">
      <h4>Location: {props.location}</h4>
      <h4 className='time'>Time: {props.timestamp}</h4>
      <h4>{props.dangertype}</h4>
      <p>{props.content}</p>
    </div>
    
  );
}

function Feed(props) {


  
  const [post, setPost] = useState([
    {
      "location": "5",
      "dangertype": "missle",
      "timestamp": "0500",
      "content": "hi"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },{
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
    {
      "location": "russia",
      "dangertype": "nuke",
      "timestamp": "0500",
      "content": "bye"
    },
  ]);

  const convertToAddress = async (query) => {
    const geocode_uri = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+query[0]+","+query[1]+".json?limit=1&access_token="+geocode_token;
    const data = await fetch(geocode_uri);
    const object = await data.json();
    return object.features.place_name;
    
  }

  const dataToPost = Array.from(post).map((e) => {
    return(
      <Post
        location={e.location}
        timestamp={e.timestamp}
        dangertype={e.dangertype}
        content={e.content}
      />
    )
  });

  return (
    <div className="feed">
      <h2>Live Feed</h2>
      {dataToPost}
      
    </div>
    
  );
}

export default Feed;
