import React, {useState, useEffect } from 'react';

import { MapContainer, TileLayer, useMap, Rectangle, Marker, Popup } from 'react-leaflet'
import NewPost from './NewPost';
import { getIcon } from './icon'
// import * as parkData from "./data/skateboard-parks.json";

function ChangeView({center, zoom}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


function Map(props) {


  const dataToMarker = Array.from(props.posts).map((e) => {
    return(
      <Marker position={e.location} icon={ getIcon }>
        <Popup>
          {e.location}
        </Popup>
      </Marker>
    )
  });

  return (
    <div className="map">
        {props.showPopup ? <NewPost setPopupSeen={props.setPopupSeen} /> : null}
        <MapContainer center={[49, 32]} zoom={10} scrollWheelZoom={false}>
          
          <ChangeView center={props.currCoords} zoom={10} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
          <Marker position={props.currCoords} icon={ getIcon }>
            <Popup>
              {props.currCoords}
            </Popup>
          </Marker>
          {dataToMarker}
        
      </MapContainer>
    </div>
  );
}

export default Map;