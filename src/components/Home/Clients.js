import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Clients.css"
import { clients } from "../../constant";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="client">
      <div className=" first-cl">
        <h4>What Our Clients Are Saying</h4>
        <p>Let them do the talking about our services and quality of work.</p>
      </div>


      <div className="crsol">
        <div >
          <Slider {...settings}>
            {clients?.map(({ description, name, image, man }) => {
              return (
                <>
                  <div className="whole-card">

                    <div className="image">
                      <img src={image} height={33} width={46} />
                      <div>

                        <div className="description">
                          <p>{description}</p>
                        </div>

                        <div className="name">
                          <h4> {name}</h4>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="triangle-down"></div>
                  <div className="man">
                    <img src={man} height={135} width={135} />
                  </div>

                </>
              )
            })}
          </Slider>

        </div>
      </div>
    </div>
  );
}


document.querySelector('.demo-carousel');


export default Clients;