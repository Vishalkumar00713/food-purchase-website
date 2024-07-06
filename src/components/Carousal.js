import React from 'react'

export default function Carousal() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="	https://cdn.pixabay.com/photo/2023/04/14/18/53/ai-generated-7925719_1280.jpg
" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="	https://www.easemytrip.com/travel/img/momo.jpg
" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="	https://i.pinimg.com/originals/27/28/81/272881de081461553db460449622840d.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>

  )
}
