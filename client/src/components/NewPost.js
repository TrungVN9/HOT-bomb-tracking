import React, { useState } from 'react';
import '../styles/NewPost.css';

function NewPost(props) {
  
  const [userInput, setUserInput] = useState(
    {
      location: "USA",
      content: ""
    }
  )
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    props.setPopupSeen(false);
  }
  console.log("here");
  return (
    <div className="modal">
      <div className="modal-container">
        <form onSubmit={e => handleSubmit(e)} className="modal_content">
          <textarea
            onChange={e => setUserInput({location: "Ukraine", content: e.target.value})}
            className="newpostbox"
            placeholder="Write your post here"
          />
          <input type='submit' className='postbutton'></input>
        </form>
      </div>
    </div>
    
  );
}

export default NewPost;
