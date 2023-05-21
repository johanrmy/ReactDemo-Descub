import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import React,{useEffect,useState} from "react";
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { IconContext } from "react-icons";

function ProfilePicture(props){
    return(
        <div className="mt-2">
                <Image className="mx-auto d-block square border border-4 border-dark" src={props.foto_perfil} alt="profile_img" roundedCircle width={281} height={281}/>
                <h2 className="text-center profile-seudonimo">{props.seudonimo}</h2>
        </div>
    )
}

function ProfileInfo(props){
    return (
      <Card
        className="ProfileInfo mx-auto"
        border="light"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <ul className="socialnetwork-list">
            <li className="socialnetwork-info socialnetwork-info-email">
              <a href={`mailto:${props.email}`}>
                <IconContext.Provider
                  value={{ className: "icon-scnw icon-scnw-email" }}
                >
                  <MdEmail />
                </IconContext.Provider>
                {props.email}
              </a>
            </li>
            <li className="socialnetwork-info socialnetwork-info-ig">
              <a href={`https://www.instagram.com/${props.instagram}`} target="_blank">
                <IconContext.Provider
                  value={{ className: "icon-scnw icon-scnw-ig" }}
                >
                  <AiFillInstagram />
                </IconContext.Provider>
                {props.instagram}
              </a>
            </li>
            <li className="socialnetwork-info socialnetwork-info-fb">
              <a href={`https://www.facebook.com/${props.facebook}`} target="_blank">
                <IconContext.Provider
                  value={{ className: "icon-scnw icon-scnw-fb" }}
                >
                  <BsFacebook />
                  {props.facebook}
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    );
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
        <Card className="ProfileInfo mx-auto mt-2" border="light" style={{ width: '18rem'}}>
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


function ProfileSection(props){
    return (
      <section className="DescubProfile">
        <Container>
          <Row>
            <Col sm={4} className="mb-4">
              <ProfilePicture seudonimo={props.seudonimo} foto_perfil={props.foto}/>
              <ProfileInfo
                email={props.email}
                instagram={props.user_instagram}
                facebook={props.user_facebook}
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