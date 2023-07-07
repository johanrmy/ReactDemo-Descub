import { Container,Row,Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function MuralCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`data:image/png;base64,${props.img}`} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Link
          to={`/mural/${props.id}`}
          className="DescubLinks d-flex align-items-center text-center justify-content-start"
        >
          <Button variant="danger">Descubre</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MuralCard