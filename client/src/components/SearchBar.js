import React, {useState, useEffect} from 'react';


function SearchBar(props) {
  
  const [searchMessage, setSearchMessage] = useState("");
  
  const handleSubmit  = e => {
    e.preventDefault();

    if (searchMessage === "") return;

    // query api here
    console.log(searchMessage);
    props.setQuery(searchMessage);
    setSearchMessage("");
  };

  const handleChange = e => {
    setSearchMessage(e.target.value);
  };

  

  return (
    <div className="searchbar">
      <h2>Searchbar goes here :)</h2>
      <form onSubmit={e => handleSubmit(e)}>
          <input
              type = "text"
              id = "header-search"
              className = "searchBox"
              placeholder = "Search location"
              onChange = {e => handleChange(e)}
          />
          <button type='submit' class='searchButton'>Search</button>
      </form>
      
    </div>
    
  );
}

export default SearchBar;