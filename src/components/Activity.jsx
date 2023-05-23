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

function ActivityGroup() {
  return (
    <>
      <Col lg={4} md={4} sm={6} xs={12} >
        <Card className='mx-auto my-2'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={4} sm={6} xs={12} >
        <Card className='mx-auto my-2'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} md={4} sm={6} xs={12} >
        <Card className='mx-auto my-2'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      
    </>
  );
}

function ActivitySection() {
  return (
    <section className="DescubActivity">
      <Container>
        <Row>
          <ActivityTitle />
        </Row>
        <Row>
          <ActivityGroup />
        </Row>
      </Container>
    </section>
  );
}
export default ActivitySection;
