import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ActivityTitle() {
  return (
    <div className="text-center mt-4">
      <h2 className="activity-title">Actividad</h2>
    </div>
  );
}

function ActivityGroup(props) {
  return (
    <>
      {props.murales.map((mural)=>(
      <Col lg={4} md={4} sm={6} xs={12} key={mural.id} >
      <Card className='mx-auto my-2'>
        <Card.Img variant="top" src={mural.imagen1} height={400}/>
        <Card.Body>
          <Card.Title>{mural.nombre}</Card.Title>
        </Card.Body>
      </Card>
    </Col>  
      ))}  
    </>
  );
}

function ActivitySection(props) {
  return (
    <section className="DescubActivity">
      <Container>
        <Row>
          <ActivityTitle />
        </Row>
        <Row>
          <ActivityGroup murales={props.infoMural}/>
        </Row>
      </Container>
    </section>
  );
}
export default ActivitySection;
