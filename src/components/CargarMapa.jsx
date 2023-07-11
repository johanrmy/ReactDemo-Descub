import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React, { useRef } from 'react';
const CargarMapa = () => {
  const mapRef = useRef();
  return (
    <section className="DescubMap">
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
      </MapContainer>
    </section>
  );
};
export default CargarMapa;