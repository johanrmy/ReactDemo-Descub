import { Carousel } from "react-bootstrap";
const DescubCarousel = (props) => {
    return (
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
          height={450}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
          height={450}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
          height={450}
        />
      </Carousel.Item>
    </Carousel>
    );
  };
export default DescubCarousel
