import { useEffect, useState } from "react";
import { courses } from "./data";
import {MdPreview } from 'react-icons/md'

function Courses() {
    const [course, setCourse] = useState([])
    useEffect(() => { setCourse(courses) }, [])
    return (
        <div className="bg-light">
        <h1 className="text-center">Explore Our Courses</h1>
        <div className=" d-flex flex-wrap justify-content-md-around justify-content-lg-center justify-content-center justify-content-xl-around">
            
            {course && course.map((item, index) => {
                return (
                    
                    <div key={index} className="card m-2 col-12" style={{ width: "18rem", height:"350px" }} >
                        <img src={item.img} className="" height="150px" width="100%" />
                        <div className="card-body">
                            <p className="card-text">{item.duration}</p>
                            <p>{item.price}</p>
                            <a href="#" className="btn btn-primary bg-dark"><MdPreview/> Preview</a>
                        </div>
                    </div>
                
                )
            })}




</div>
        </div>
    )
}

export default Courses
