import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DescubCarousel = () => {
    return (
  <div class="container text-center">
    <div class="row align-items-center">
    <div class="col">
    <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
        autoPlay={true}
        interval={900}
        transitionTime={500}
        swipeable={true}
      >
        <div>
          <img src="../images/rosario.jpg"  class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" alt="Imagen 1" />
        </div>
        <div>
          <img src="../images/rosario.jpg"  class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" alt="Imagen 2" />
        </div>
        <div>
          <img src="../images/rosita.jpg"  class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" alt="Imagen 3" />
        </div>
      </Carousel>
    </div>
    <div class="col">
      <div class = "card" >
        <div class="card-body"></div>
        <h5 class="card-title">Detalles del Mural</h5>
          <p class="card-text">Herencia multicultural
    “El trabajo de la artista ecuatoriano-estadounidense María “TooFly” Castillo se
    caracteriza por retratar mujeres empoderadas, luchadoras –cuenta Wagner sobre la elección
    de los artistas participantes, que han trabajado el mural durante 4 días.
    </p>
          <p class="card-text mb-4">
    “Estoy muy orgullosa de este proyecto, porque ha sido una oportunidad de colaboración
    entre las mujeres muralistas Shipibo-konibo y Conrad, un estupendo artista urbano de Lima. Ha sido especial trabajar con los peruanos, conocer su cultura
    </p>
      
      </div> 
    </div>
  </div>
</div>

    );
  };

export default DescubCarousel
