import React from 'react'
import HomePage from './header_glow/glow.component';
import Navbar1 from './navbar/Navbar';
import HomeFirstSlider from './mainSlider/Slider.component';
import Slides from './mainSlider/slides/slides.component';
import Courses from './courses/courses.component'
import Featurs from './features/featurs.component'
import Student from "./studentreview-partners/student.com"
import Footer from './footer/footer.component';

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
