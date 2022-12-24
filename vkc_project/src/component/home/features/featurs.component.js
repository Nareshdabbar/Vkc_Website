import React from 'react';
import { features } from './data';
import { useEffect, useState } from "react";

function Featurs() {
  
    const [feature, setFeature] = useState([])
    useEffect(() => { setFeature(features) }, [])
    return (
        <>
        <h1 className='text-center mb-2 mt-5 text-primary'>Training Features</h1>
        <div className="d-flex flex-wrap justify-content-sm-center justify-content-lg-around">
            {feature && feature.map((item, index) => {
                return (
                    
                    <div key={index} className="card " style={{ width: "29rem", height:"max-content" }} >
                       <div className=' d-flex '>
                        <img src={item.img} className="col-5" height="150px" width="150px" />
                            <p className="card-text p-1">{item.duration}</p>  
                        </div>
                    </div>
                
                )
            })}




</div>
        </>

  )
}

export default Featurs
