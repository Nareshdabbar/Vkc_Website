import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../slides/slides.json"
import "./slidess.css"
import {BiTimeFive} from "react-icons/bi";
import {FcCalendar} from "react-icons/fc"

function Slides() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className='overflow-hidden'>
            <div className=''>
            <Slider {...settings} className="mb-5 mt-5" >
                {image && image.images.map((item, index) => {
                    return (
                        <div key={index} >
                            <div className='slide-img'>
                                <img src={item.img} className=" main-slide-img" />
                      
                                <h3 className='child-title'>{item.title}</h3>
                                {/* <p className='duration'>Duration : {item.duration}</p> */}
                        <div className='batch'>
                            {/* <pre><b>Batch : </b>{item.batch}</pre> */}
                            <pre><b>  <FcCalendar/>  : </b>{item.date}</pre>
                        <pre className=''>  <BiTimeFive/>  : {item.time} </pre>
                        <pre className=''>Duration : {item.duration}</pre>
                        </div>
                             <pre className='trainer'><b>Krishna Chaitanya</b> <br/>
                             15years experince
                             </pre>
                            </div>
                         
                        </div>


                    )
                })}



            </Slider>
            </div>        </div>
    );
}

export default Slides
