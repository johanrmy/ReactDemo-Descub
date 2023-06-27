import React from 'react'

function DescubCarousel(){
  return(

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div className="carousel-item active" data-bs-interval="50">
          <img src="./images/rosa.jpg" class="d-block w-50" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="50">
          <img src="./images/rosario.jpg" class="d-block w-50" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./images/rosita.jpg" class="d-block w-50" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}   
export default DescubCarousel