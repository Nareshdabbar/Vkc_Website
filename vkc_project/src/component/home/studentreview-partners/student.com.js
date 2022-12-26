import React from 'react';
import Logo from "./partners";
import { TfiStar } from 'react-icons/tfi';
import { info } from "./info.com";
import Slider from 'react-slick';


function Student() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="overflow-hidden">
      <div >
        <h2 className='text-center p-4 '>What Our Students Say</h2>
        <Slider {...settings}  >
          {
            info.map((obj, index) => {
              return (
                <div key={index} className="d-flex justify-content-center p-3">
                  <div className="border" style={{ width: "20rem" }}>
                    <div className="d-flex align-items-center mt-1 p-1">
                      <img width="60px" height="60px" className=" m-2 rounded-circle" src={obj.avatar}></img>
                      <h3 className='text-info'>{obj.name}</h3>
                    </div>

                    <div className="m-1 p-2">
                      {obj.review}
                    </div>
                    <div className="text-danger m-1">
                      < TfiStar className='m-1' />
                      < TfiStar className='m-1' />
                      < TfiStar className='m-1' />
                      < TfiStar className='m-1' />
                      < TfiStar className='m-1' />
                    </div>
                  </div>

                </div>

              )
            })

          }
        </Slider>
      </div>
      <div>
        <Logo></Logo>
      </div>
    </div>

  )
}

export default Student