import React from 'react'
import Courses from './courses/courses.component'
import Featurs from './features/featurs.component'
import HomeFirstSlider from './mainSlider/Slider.component';
import Student from "./studentreview-partners/student.com"

function Home() {
  return (
    <div>
      <HomeFirstSlider/>
      <Courses/>
      <Featurs/>
     <Student/>
    </div>
  )
}

export default Home
