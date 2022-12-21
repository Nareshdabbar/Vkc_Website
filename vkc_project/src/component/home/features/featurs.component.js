import React from 'react';
import { features } from './data';
import { useEffect, useState } from "react";

function Featurs() {
  
    const [feature, setFeature] = useState([])
    useEffect(() => { setFeature(features) }, [])
    return (
        <>
        <div className="d-flex flex-wrap justify-content-lg-around">
            {feature && feature.map((item, index) => {
                return (
                    
                    <div key={index} className="card" style={{ width: "29rem", height:"max-content" }} >
                       <div className=' d-flex '>
                        <img src={item.img} className="col-4" height="150px" width="100%" />
                            <p class="card-text">{item.duration}</p>  
                        </div>
                    </div>
                
                )
            })}




</div>
        </>

  )
}

export default Featurs
