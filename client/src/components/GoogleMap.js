import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css"
import L from "leaflet";
var icon = L.icon({
  iconUrl: "https://img.icons8.com/plasticine/2x/marker.png",
  iconSize: [38, 45],
  iconAnchor: [19, 40],
  popupAnchor: [0, -30],
});

const GoogleMap = () => {
    return (
      <div>
        <MapContainer
          className="map__container"
          center={[33.8975867, 10.0900375]}
          zoom={10}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[33.8845867, 10.0800375]} icon={icon}>
            <Popup>
              <h1>La Jeunesse</h1>
              <img
                style={{width:"100%"}}
                src="https://lh5.googleusercontent.com/p/AF1QipND5wBCaeVaSFqLoWibmzWgzPZOuvNH6G0nIFiK=w408-h272-k-no"
                alt="hazem"
              />
              V4R3+8G5, Gabès <br /> V4R3+8G5، قابس
              <br />
              21161916
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
};

export default GoogleMap;
