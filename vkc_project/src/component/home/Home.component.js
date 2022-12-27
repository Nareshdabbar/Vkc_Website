import React from 'react'
import Slides from '../slides/slides.component';
import Courses from './courses/courses.component'
import Featurs from './features/featurs.component'
import Footer from './footer/footer.component';
import HomePage from './homepage/homepage.component';
import HomeFirstSlider from './mainSlider/Slider.component';
import Navbar1 from './navbar/Navbar';
import Student from "./studentreview-partners/student.com"

function Home() {
  return (
    <div>
      <HomePage/>
      <div className='navbar-fixed'>
      <Navbar1/>
      </div>
      <HomeFirstSlider/>
      <Slides/>
      <Courses/>
      <Featurs/>
     <Student/>
     <Footer/>
 
    </div>
  )
}

export default Home
