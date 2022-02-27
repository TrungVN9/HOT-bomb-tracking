import React, { useState } from 'react';
import '../styles/NewPost.css';

function NewPost(props) {
  
  const [userInput, setUserInput] = useState(
    {
      location: "USA",
      content: "",
      dangerType: "Bombing",
      time: "now"
    }
  )
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();

    props.setPopupSeen(false);
  }




  return (
    <div className="modal">
      <div className="modal-container">
        <h2>New Post</h2>
        <form onSubmit={e => handleSubmit(e)} className="modal_content">
          <label>Danger Type:
            <select 
              className="select"
              placeholder = "Choose danger type"
              onChange={e => setUserInput({...userInput, dangerType: e.target.value})}
              required
            >
              <option value="Explosion">Explosion</option>
              <option value="Soldiers">Soldiers</option>
              <option value="Bombings">Bombings</option>
            </select>
          </label>
          <label>Location
            <input 
              type="text"
              onChange={e => setUserInput({...userInput, location: e.target.value})}
              className="locationinput"
              placeholder=""
            />
          </label>
          <label>Comment
            <textarea
              onChange={e => setUserInput({...userInput, content: e.target.value})}
              className="newpostbox"
              placeholder="Write a comment here"
            />
          </label>
          <input type='submit' className='postbutton'></input>
        </form>
      </div>
    </div>
    
  );
}

export default NewPost;
