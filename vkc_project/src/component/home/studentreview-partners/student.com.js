import React from 'react';
import Logo from "./partners";
import "./student.css";
import {   TfiStar } from 'react-icons/tfi';
import {info} from "./info.com";
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
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              className:"smallscreen",
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='overflow-hidden'>
    <div className='entirediv'>
 
      <h2 className='card-heading'>What Our Students Say</h2>
    <Slider {...settings}>
   
        {
            info.map((obj)=>{
                return(
                    

                      <div className="sec-div">
    
                           <div className="card">
                              <div className="card-top">
                                <div className="img-name">
                              <img  className="stdimg" src={obj.avatar}></img>
                                <h3 className='profile-name'>{obj.name}</h3>
                                </div>
                                 </div>
                            <div className="card-body">
                            <span>"{obj.review}"</span>
                                </div>
                         <div className="card-bottom">
                           
                         < TfiStar className="icon"/>
                         < TfiStar className="icon"/>
                         < TfiStar className="icon"/>
                         < TfiStar className="icon"/>
                         < TfiStar className="icon"/>
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