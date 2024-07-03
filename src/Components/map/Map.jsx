import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ details }) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      className="h-100 w-100 rounded"
      center={position}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {details?.map((item) => (
        <Pin data={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
