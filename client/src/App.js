import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import LocationInfo from './components/LocationInfo';

function App() {

  const [query, setQuery] = useState("");
  
  

  return (
    
    <div className="App">
      <SearchBar 
        query={query}
        setQuery={setQuery}
      />
      <h4>{query}</h4>
      <Map />
      <LocationInfo />
    </div>
  );
}

export default App;
