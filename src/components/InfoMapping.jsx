import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const InfoMapping = () => {
    return(
    <Container>
    <Row>
      <Col lg={4} className="d-flex justify-content-center">
        <div className="div-infoMap">
          <Card className="card-infoMap mt-5" style={{ width: "18rem" }}>
            <Card.Header className="cardheader-infomap mb-2">
              Featured
            </Card.Header>
            <ListGroup className="cardlist-infoMap" variant="flush">
              <ListGroup.Item className="infoMap p-3">
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item className="infoMap p-3">
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="infoMap p-3">
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
export default InfoMapping