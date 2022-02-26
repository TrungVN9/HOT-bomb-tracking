import './App.css';
import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import Feed from './components/Feed';


const geocode_token = "pk.eyJ1IjoianNoZW4xMiIsImEiOiJjbDA0YmxkN2owOHUxM2RudHF1dTBkZjFmIn0.Sp0jaOXuPrWRgIwM-5ut9Q";

function App() {

  const [query, setQuery] = useState("");
  const [currCoords, setCurrCoords] = useState([49, 32]);


  useEffect( () => {
    let isSubscribed = true;

    const fetchData = async () => {
      const geocode_uri = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+query+".json?limit=1&access_token="+geocode_token;
      const data = await fetch(geocode_uri);
      const object = await data.json();
      if (isSubscribed) {
        setCurrCoords([object.features[0].center[1], object.features[0].center[0]]);
      }
    }

    fetchData().catch(console.error);;
    return () => isSubscribed = false;
  }, [query]);

  return (
    
    <div className="App">
      <SearchBar 
        query={query}
        setQuery={setQuery}
      />
      <div className="main-content">
        <Map 
          currCoords={currCoords}
        />
        <Feed />
      </div>
    </div>
  );
}

export default App;
