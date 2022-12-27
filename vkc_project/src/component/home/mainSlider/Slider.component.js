
import { sliderImg } from "./data"
import "./slider.css"
import { BsArrowRight } from 'react-icons/bs'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HomeFirstSlider() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    // autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <>
    <div className="">
      <Slider {...settings} className=" overflow-hidden mt-2">
        {sliderImg.map((item, id) => {
          return (
      <div key={id}>
            <div className="container-slider" >
            <div className="img-slider">
                <img src={item.img} />
              </div>
              <div className="slides-content">
                <h1 className="">{item.title}</h1>
                <p className="">{item.descrption}</p>
                <a href={item.link} target="_blank" type="button" className="btn btn-primary mb-3">Go <BsArrowRight /> </a>
              </div>
            
            </div>

            </div>  
          )
        })}
      </Slider>

    </div>
    </>
  )
}

export default HomeFirstSlider
