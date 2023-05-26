import InfoMapping from './InfoMapping';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const Map = () => {
  return (
    <section className="DescubMap">
      <InfoMapping/>
      <MapContainer
        center={[-12.0433, -77.0217]}
        zoom={12}
        scrollWheelZoom={true}
        className="map-leaflet"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-12.0433, -77.0217]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};
export default Map;