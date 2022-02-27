import * as L from "leaflet"

const getIcon = new L.Icon({
  iconUrl: require('../img/bombicon.jpeg'),
  iconRetinaUrl: require('../img/bombicon.jpeg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: 'leaflet-div-icon'
});

export { getIcon };