import { Container,Row,Col } from "react-bootstrap"
import {ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";

function EstadisticaPicture(){
    return (
      <section className="estadisticas_picture">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="d-flex flex-column">
                <h1 className="title-div-estadistica px-5 pt-5 text-center">Estadísticas</h1>
                <div className="px-5 pb-5 subtitle-div-estadistica text-center">Mira un recuento los escaneos de Descub</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

const RenderComposedChart = (props) => {
  console.log(props.estadisticas)
    return(
    <ResponsiveContainer>
    <ComposedChart
      data={props.estadisticas}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="mes" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="scans" barSize={50} fill="#1C7C54" />
      <Line type="monotone" dataKey="scans" stroke="#FEA82F" />
    </ComposedChart>
    </ResponsiveContainer>
  )
  };

function EstadisticaInfo(props){
    return(
        <section className="estadisticas_info">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h1 className="text-center mt-2 title-estadisticas">Recuento de escaneo por Mes</h1>
                        <div className="graph mx-auto">
                            <RenderComposedChart estadisticas={props.data}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

function EstadisticaSection(props){
    return(
        <>
            <EstadisticaPicture/>
            <EstadisticaInfo data={props.estadisticaScan}/>
        </>
    )
}
export default EstadisticaSection