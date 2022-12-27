import React from 'react';
import "./featurs.css"
import { features } from './data';
import { useEffect, useState } from "react";

function Featurs() {
  
    const [feature, setFeature] = useState([])
    useEffect(() => { setFeature(features) }, [])
    return (
        <>
        <h1 className='text-center mb-2 mt-5 text-primary'>Service Highlights</h1>
        {/* <div className="d-flex flex-wrap  justify-content-center justify-content-lg-around"> */}
           <div className='services'>
            {feature && feature.map((item, index) => {
                return (
                    
                    <div key={index} className="card m-2 mb-4" style={{ width: "30rem", height:"max-content" }} >
                       <div className='courses-realtime'>
                            <h5 className="text-center">{item.title}</h5> 
                        <img src={item.img} className="d-none d-sm-block" height="150px" width="" />
                            <p className='text-white'>{item.desc}</p> 
                        </div>
                    </div>
                
                )
            })}




</div>
        </>

  )
}

export default Featurs
