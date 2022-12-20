
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
    speed: 2000,
    autoplaySpeed: 5000,
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
      <div className=" b">

        <Slider {...settings} className="">
          {sliderImg.map((item, id) => {
            return (

              <div key={id} className="bg-light" >
                <div className="row">
                  <div className="  col-sm-12 col-md-6   col-lg-5">
                    <div className="col-lg-10 m-4 p-4 text-center">
                      <h1 className="title" >{item.title}</h1>
                      <h3 className="s-title">{item.subTitle}</h3>
                      <p className="s-desc">{item.descrption}</p>
                      <a href={item.link} target="_blank" type="button" className="btn btn-primary a">Go <BsArrowRight /> </a>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center  col-sm-12 col-md-5 col-lg-6 ">
                    <img src={item.img} className="img-fluid img1"   ></img>
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
