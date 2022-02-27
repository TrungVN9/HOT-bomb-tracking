import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { getIcon } from './icon'

function ChangeView({center, zoom}) {
  console.log(center);
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


function Map(props) {
  return (
    <div className="map">
    <MapContainer center={[49, 32]} zoom={10} scrollWheelZoom={false}>
            <ChangeView center={props.currCoords} zoom={10} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            <Marker position={props.currCoords} icon={ getIcon } >
              <Popup>
                {props.currCoords}
              </Popup>
            </Marker>
    </MapContainer>
    </div>
  );
}

export default Map;