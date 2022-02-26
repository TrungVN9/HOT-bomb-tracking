import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Rectangle, Marker, Popup } from 'react-leaflet'

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
      
      <h2>Map goes here :)</h2>
      <MapContainer center={[-118.2439, 34.0544]} zoom={10} scrollWheelZoom={false}>
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