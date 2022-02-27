import React, {useState, useEffect} from 'react';
import '../styles/SearchBar.css'; 


function SearchBar(props) {
  
  const [searchMessage, setSearchMessage] = useState("");

  const handleSubmit  = e => {
    e.preventDefault();

    if (searchMessage === "") return;

    // query api here
    
    props.setQuery(searchMessage);
    setSearchMessage("");
  };

  const handleChange = e => {
    setSearchMessage(e.target.value);
  }; 


  return (
    <div className="searchbar">
      <h2>Searchbar goes here :)</h2>
      <form onSubmit={e => handleSubmit(e)} className="search">
          <input
              type = "text"
              id = "header-search"
              className = "searchBox"
              placeholder = "Search location"
              onChange = {e => handleChange(e)}
          />
          <button type='submit' className='searchButton'>Search</button>
      </form>

      <div className="search" onClick={a => props.setPopupSeen(true)}>
        <button>Submit a Post</button>
      </div>
      
    </div>
    
  );
}

export default SearchBar;