import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
const Map = (props) => {
  const mapRef = useRef();
  const handleZoomToLocation = (location,zoom=19) => {
    const map = mapRef.current;
    if (map) {
      map.setView(location, zoom);
    }
  };
  return (
    <section className="DescubMap">
      <Container>
        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <div className="div-infoMap">
              <Card className="card-infoMap mt-5" style={{ width: "18rem" }}>
                <Button
                  className="infoMap-head text-dark btn-lg mb-2"
                  onClick={() =>
                    handleZoomToLocation([
                      -12.0433,
                      -77.0217
                    ],12)
                  }
                >
                  {props.muralScan.length} murales escaneados
                </Button>
                <ListGroup
                  variant="flush"
                  style={{ overflowY: "scroll", maxHeight: "200px" }}
                >
                  {props.muralScan.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() =>
                        handleZoomToLocation([
                          item.mural.latitud,
                          item.mural.altitud,
                        ])
                      }
                      className="infoMap p-3"
                    >
                      {item.mural.nombre}
                    </Button>
                  ))}
                </ListGroup>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <MapContainer
        center={[-12.0433, -77.0217]}
        zoom={12}
        scrollWheelZoom={true}
        className="map-leaflet"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.muralScan.map((item) => (
          <Marker
            key={item.id}
            position={[item.mural.latitud, item.mural.altitud]}
          >
            <Popup>{item.mural.direccion}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};
export default Map;