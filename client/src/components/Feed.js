import React, { useMemo, useState } from 'react';

function Post(props) {

  return (
    <div className="post">
      <div className="toprow">
        <h3>Location: {props.location}</h3>
      </div>
      <p>{props.content}</p>
    </div>
    
  );
}

function Feed(props) {


  
  const [post, setPost] = useState([
    {
      "location": "5",
      "content": "hi"
    },
    {
      "location": "russia",
      "content": "bye"
    }
  ]);

  const dataToPost = Array.from(post).map((e) => {
    return(
      <Post
        location={e.location}
        content={e.content}
      />
    )
  });

  return (
    <div className="feed">
      <h2>Feed goes here :)</h2>
      {dataToPost}
      
    </div>
    
  );
}

export default Feed;
