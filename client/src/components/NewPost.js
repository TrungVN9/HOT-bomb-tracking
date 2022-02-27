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
        <form onSubmit={e => handleSubmit(e)} className="modal_content">
          <select 
            className="select"
            placeholder = "choose type"
            onChange={e => setUserInput({...userInput, dangerType: e.target.value})}
            required
          >
            <option value="Explosion">Explosion</option>
            <option value="Soldiers">Soldiers</option>
            <option value="Bombings">Bombings</option>
          </select>
          <textarea
            onChange={e => setUserInput({...userInput, content: e.target.value})}
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
