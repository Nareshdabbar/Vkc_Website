import { logo } from "./info.com";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "./partners.css"


export function Logo(){
    var settings = {
        className:"logo-mar-pad",
       autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              autoplay:true,
            }
          },
         
          {
            breakpoint: 992,
            settings: {
             
             
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
             
             
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              className:"logo-smsn",
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      };
    return(
        <div className="row">
            <h2 className="heading">our partners</h2>
            <div className="col">
          <Slider {...settings}>
          {logo.map((item, index)=>{
    return(
        <div key={index}>
      <div className="logo-card1"> 
          <img className="logoscroll" src={item.logo}></img>
        </div> 
   
         </div>
         )

        })}

       </Slider>

       </div>
        </div>
    )
}
export default Logo