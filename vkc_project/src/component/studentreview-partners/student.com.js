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
    <div >
    <div className='entirediv'>
 
      <h2 className='card-heading text-center p-4 text-muted'>What Our Students Say</h2>
    <Slider {...settings} >
   
        {
            info.map((obj,index)=>{
                return(
                    
                      <div key={index} className="sec-div d-flex justify-content-center p-3">
    
                           <div className="card " style={{width:"20rem"}}>
                              <div className="card-top">
                                <div className="img-name d-flex align-items-center mt-1 p-1">
                              <img  width="60px" height="60px"  className=" m-2 stdimg rounded-circle" src={obj.avatar}></img>
                                <h3 className='profile-name text-info'>{obj.name}</h3>
                                </div>
                                 </div>
                            <div className="card-body">
                            <span>"{obj.review}"</span>
                                </div>
                         <div className="card-bottom text-danger p-3">
                           
                         < TfiStar className='m-1'/>
                         < TfiStar className='m-1'/>
                         < TfiStar className='m-1'/>
                         < TfiStar className='m-1'/>
                         < TfiStar className='m-1'/>
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