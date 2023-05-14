import { render } from "react-dom"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

function ProfilePicture(props){
    return(
        <div className="mt-4">
                <Image className="mx-auto d-block square border border-4 border-dark" src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="profile_img" roundedCircle width={281} height={281}/>
                <h2 className="text-center profile-seudonimo">{props.seudonimo}</h2>
        </div>
    )
}

function ProfileInfo(props){
    return(
        <Card className="ProfileInfo mx-auto" border="light" style={{ width: '18rem'}}>
        <Card.Body>
            <ul className="socialnetwork-list">
                <li className="socialnetwork-info socialnetwork-email"><a href="#">{props.email}</a></li>
                <li className="socialnetwork-info socialnetwork-ig"><a href="">{props.instagram}</a></li>
                <li className="socialnetwork-info socialnetwork-fb"><a href="">{props.facebook}</a></li>
            </ul>
        </Card.Body>
      </Card>
    )
}

function ProfileStatistics(props){
    return(
        <div className="ProfileStatistics d-flex flex-column mb-4">
            <div className="statistics-text text-center mb-4"><span className="statistics-d">{props.murales}</span> murales registrados</div>
            <div className="statistics-text text-center mb-4"><span className="statistics-d">{props.escaneos}</span> escaneos</div>
        </div>
    )
}

function ProfileBadges(){
    return(
        <Card className="ProfileInfo mx-auto mt-4" border="light" style={{ width: '18rem'}}>
        <Card.Header className="text-center badge-title">Insignias</Card.Header>
        <Card.Body>
          <Card.Text>
            <img className="mx-auto d-block" src="#" alt="badgex" width={96} height={96}/>
            <img className="mx-auto d-block" src="#" alt="badgex" width={96} height={96}/>
            <img className="mx-auto d-block" src="#" alt="badgex" width={96} height={96}/>
          </Card.Text>
        </Card.Body>
      </Card>   
    )
}

function ProfileSection(){
    return (
      <section className="DescubProfile">
        <Container>
          <Row>
            <Col sm={4} className="mb-4">
              <ProfilePicture seudonimo="Gabokaso" />
              <ProfileInfo
                email="gabope@gmail.com"
                instagram="gabokaso"
                facebook="GABO KASO"
              />
            </Col>
            <Col sm={5} className="d-flex align-items-center">
              <ProfileStatistics murales={17} escaneos={225} />
            </Col>
            <Col sm={3}>
              <ProfileBadges />
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default ProfileSection