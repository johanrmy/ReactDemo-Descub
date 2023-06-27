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
                <div className="px-5 pb-5 subtitle-div-estadistica text-center">Mira un recuento de tus escaneos</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

const data = [
    {
      name: 'Fecha 1',
      escaneos: 4,
      amt: 1400,
    },
    {
      name: 'Fecha 2',
      escaneos: 1,
      amt: 1506,
    },
    {
      name: 'Fecha 3',
      escaneos: 3,
      amt: 989,
    },
    {
      name: 'Fecha 4',
      escaneos: 1,
      amt: 1228,
    },
    {
      name: 'Fecha 5',
      escaneos: 6,
      amt: 1100,
    },
    {
      name: 'Fecha 6',
      escaneos: 7,
      amt: 1700,
    },
  ];
  
const RenderComposedChart = () => {
    return(
    <ResponsiveContainer>
    <ComposedChart
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="escaneos" barSize={50} fill="#1C7C54" />
      <Line type="monotone" dataKey="escaneos" stroke="#FEA82F" />
    </ComposedChart>
    </ResponsiveContainer>
  )
  };

function EstadisticaInfo(){
    return(
        <section className="estadisticas_info">
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h1 className="text-center mt-2 title-estadisticas">Recuento de escaneos</h1>
                        <div className="graph mx-auto">
                            <RenderComposedChart/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

function EstadisticaSection(){
    return(
        <>
            <EstadisticaPicture/>
            <EstadisticaInfo/>
        </>
    )
}
export default EstadisticaSection