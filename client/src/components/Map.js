import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'

import { getIcon } from './icon'
//import * as cityData from "./ua.json"

function LocationMarker(){
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(){
      map.locate()
    },
    locationfound(e){
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position} icon={ getIcon }>
      <Popup> Bomb is Here </Popup>
    </Marker>
  )
}

function Map() {
  const position = [50.450001, 30.523333 ]
  //const [activeBomb, setactiveBomb] = useState(null);
  return (
    <div className="map">
      <h2>Map goes here :)</h2>
      <MapContainer 
      center={position} 
      zoom={13}
      style={{ height: 500, width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
    
  );
}

export default Map;