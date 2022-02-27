import './App.css';
import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import Feed from './components/Feed';
import { lightTheme, darkTheme, Theme_Global } from './components/theme';

import styled, { ThemeProvider } from 'styled-components';
import NewPost from './components/NewPost';


const geocode_token = "pk.eyJ1IjoianNoZW4xMiIsImEiOiJjbDA0YmxkN2owOHUxM2RudHF1dTBkZjFmIn0.Sp0jaOXuPrWRgIwM-5ut9Q";

const styledApp = styled.div`
  color: ${(props) => props.theme.fontColor};  
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [query, setQuery] = useState("");
  const [currCoords, setCurrCoords] = useState([49, 32]);
  const [popupSeen, setPopupSeen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [posts, setPosts] = useState({});

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

  useEffect( () => {
    setShowPopup(popupSeen);
  }, [popupSeen]);

  /*
  useEffect( () => {
    let isSubscribed = true;

    const fetchData = async () => {
      const geocode_uri = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+query+".json?limit=1&access_token="+geocode_token;
      const data = await fetch(geocode_uri);
      const object = await data.json();
      if (isSubscribed) {
        setPosts(object);
      }
    }

    fetchData().catch(console.error);;
    return () => isSubscribed = false;
  }, []);
*/
  return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Theme_Global />
        <styledApp>
        <div className="App">
        <button className="button" onClick={() => themeToggler ()}>Change Theme</button>
          <SearchBar 
            query={query}
            setQuery={setQuery}
            setPopupSeen={setPopupSeen}
          />
          <div className="main-content">
            <Map 
              currCoords={currCoords}
              showPopup={showPopup}
              setPopupSeen={setPopupSeen}
              posts={posts}
            />
            <Feed />  
          </div>
          </div>
        </styledApp>
      </ThemeProvider>

  );
}

export default App;
