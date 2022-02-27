import React, { useMemo, useState } from 'react';
import '../styles/Feed.css';

function Post(props) {

  return (
    <div className="post">
      <div className="toprow">
        <h3>Location: {props.location}</h3>
        <h3> </h3>
        <h3 className='time'>Time: {props.timestamp}</h3>
      </div>
      <h3>{props.dangertype}</h3>
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
