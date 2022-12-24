import React from 'react'
import Courses from './courses/courses.component'
import Featurs from './features/featurs.component'
import Footer from './footer/footer.component';
import HomePage from './homepage/homepage.component';
import HomeFirstSlider from './mainSlider/Slider.component';
import Student from "./studentreview-partners/student.com"

function Home() {
  return (
    <div>
      <HomePage/>
      <HomeFirstSlider/>
      <Courses/>
      <Featurs/>
     <Student/>
     <Footer/>
    </div>
  )
}

export default Home
