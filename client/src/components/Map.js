import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Rectangle } from 'react-leaflet'

import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";


function Map(props) {
  return (
    
    <div className="map">
      
      <h2>Map goes here :)</h2>
      <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
      </MapContainer>
    </div>
    
  );
}

export default Map;