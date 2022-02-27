import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Rectangle, Marker, Popup } from 'react-leaflet'
import NewPost from './NewPost';
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

function ChangeView({center, zoom}) {
  console.log(center);
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


function Map(props) {



  return (
    
    <div className="map">
        {props.showPopup ? <NewPost setPopupSeen={props.setPopupSeen} /> : null}
        <MapContainer center={[49, 32]} zoom={10} scrollWheelZoom={false}>
          
          <ChangeView center={props.currCoords} zoom={10} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
          <Marker position={props.currCoords}>
            <Popup>
              {props.currCoords}
            </Popup>
          </Marker>
        
      </MapContainer>
    </div>
    
  );
}

export default Map;