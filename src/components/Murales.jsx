import { Container,Row,Col } from "react-bootstrap"
import MuralCard from "./MuralCard";
import CeroMurales from "./CeroMurales";
function MuralesPicture(){
    return (
        <section className="estadisticas_picture">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="d-flex flex-column">
                  <h1 className="title-div-estadistica px-5 pt-5 text-center">Tus Murales</h1>
                  <div className="px-5 pb-5 subtitle-div-estadistica text-center">Explora tu lista de murales</div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
}
function MuralesListSection(props){
  return (
    <section>
      <Container>
        <Row>
          {props.mur.map((item) => (
            <Col lg={4} md={4} sm={6} xs={12} key={item.id} className="mt-2">
              <MuralCard titulo = {item.mural.nombre} img = {item.mural.imagen1} id = {item.mural.id}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

function MuralesSection(props){
    return(
        <>
        {props.muralesList.length == 0 ? (
          <CeroMurales/>
        ): 
        <>
          <MuralesPicture/>
          <MuralesListSection mur={props.muralesList}/>
        </>
        }
        </>
    )
}
export default MuralesSection