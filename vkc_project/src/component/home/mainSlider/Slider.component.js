
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
<<<<<<< HEAD:vkc_project/src/component/home/mainSlider/Slider.component.js
    speed: 3000,
    autoplaySpeed: 5000,
=======
    speed: 300,
    autoplaySpeed: 2000,
>>>>>>> 671a10e12784c177b957e64911fd6b1e1a80b0c7:vkc_project/src/component/home/slider/slider/Slider.component.js
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
      <Slider {...settings} className="d-flex overflow-hidden">
        {sliderImg.map((item, id) => {
          return (
            <>
            <div key={id} className="row container-slider" >
              <div className="col-sm-10 col-md-6  col-lg-5 text-center">
                <h1 className="title" >{item.title}</h1>
                <p className="s-desc text-start">{item.descrption}</p>
                <a href={item.link} target="_blank" type="button" className="btn btn-primary ">Go <BsArrowRight /> </a>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-6 d-flex justify-content-center align-items-center">
                <img src={item.img} className="img-slider" width="90%" ></img>
              </div>
            </div>

            </>
          )
        })}
      </Slider>

    </>
  )
}

export default HomeFirstSlider
