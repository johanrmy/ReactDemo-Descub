import { Container,Row,Col } from "react-bootstrap"
import DescubCarousel from "./Carousel";
import DescubPaleta from "./Paleta";
import { Link } from "react-router-dom";
function MuralPicture(props){
    return (
        <section className="DescubProfile">
          <Container>
            <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
                <div className="d-flex flex-column mt-4">
                  <DescubCarousel img1={props.mural.imagen1} img2={props.mural.imagen2} img3={props.mural.imagen3}/>
                </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
                <div className="d-flex flex-column mt-2">
                  <div><h1 className="title-div-mural px-5 pt-5 text-center">{props.mural.nombre}</h1></div>
                  <div className="px-5 pb-5 text-div-mural text-justify">{props.mural.descripcion}</div>
                </div>
                <div className="d-flex flex-column">
                    <div className="px-5">
                        <ul>
                            <li className="mural-li">Creado el <span className="mural-li-fecha">{props.mural.fecha_creacion}</span></li>
                            <li className="mural-li">Ubicado en <span className="mural-li-ubi">{props.mural.direccion}</span></li>
                            <li className="mural-li">Hecho por <Link to={`/muralista/${props.mural.muralista.id}`} className="mural-li-muralista">@{props.mural.muralista.seudonimo}</Link></li>
                        </ul>
                    </div>
                </div>
            </Col>
            </Row>
            <Row>
                <div className="d-flex justify-content-center my-4">
                    {props.paleta.map((item) =>(
                        <div className="mx-1" key={item.id}>     
                            <Col lg={3} md={3} sm={6} xs={6}>
                                <DescubPaleta color={item.color.codigo}/>
                            </Col>
                        </div>
                        ))}              
                </div>
            </Row>
          </Container>
        </section>
      );
}
function MuralSection(props){
    return(
        <MuralPicture mural = {props.infoMural} paleta= {props.infoPaleta}/>
    )
}
export default MuralSection