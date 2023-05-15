import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function ActivityTitle(){
    return(
        <div className='text-center mt-4'><h2 className='activity-title'>Actividad</h2></div>
    )
}

function ActivityGroup(){
    return(
        <CardGroup className='mt-4'>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            
            <Card.Title className='activity-card-tittle'><Card.Link className='activity-card-link' href="#">Card Title</Card.Link></Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            
            <Card.Title className='activity-card-tittle'><Card.Link className='activity-card-link' href="#">Card Title</Card.Link></Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            
            <Card.Title className='activity-card-tittle'><Card.Link className='activity-card-link' href="#">Card Title</Card.Link></Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
}


function ActivitySection(){
    return (
      <section className="DescubActivity mb-4">
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
export default ActivitySection