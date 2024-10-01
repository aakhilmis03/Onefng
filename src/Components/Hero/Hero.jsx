import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Provide the best offices in India</h1>
        <p>Meets Modern Spaces With its iconic architecture, unwavering sustainability focus, and strategic placement, in the vibrant sector 142 of Noida, spread across 15 acres, ONE FNG stands as an emblematic architectural marvel poised to reshape the cityscape and elevate Noida’s essence to new heights. </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
