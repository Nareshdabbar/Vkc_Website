import { useEffect, useState } from "react";
import { courses } from "./data";
import {MdPreview } from 'react-icons/md'

function Courses() {
    const [course, setCourse] = useState([])
    useEffect(() => { setCourse(courses) }, [])
    return (
        <>
        <div className="d-flex flex-wrap justify-content-md-around justify-content-lg-center justify-content-center">
            {course && course.map((item, index) => {
                return (
                    
                    <div key={index} className="card m-2 col-12" style={{ width: "18rem", height:"350px" }} >
                        <img src={item.img} className="" height="150px" width="100%" />
                        <div class="card-body">
                            <p class="card-text">{item.duration}</p>
                            <p>{item.price}</p>
                            <a href="#" class="btn btn-primary"><MdPreview/> Preview</a>
                        </div>
                    </div>
                
                )
            })}




</div>
        </>
    )
}

export default Courses
