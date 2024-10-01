import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>What is One Fng</h3>
        <h2>Constructing dreams, one brick at a time.</h2>
        <p>Strategically located and adjacent to FNG, Noida – Greater Noida Expressway and Corporate Hubs.
          IT/ITES Project with modern office and retail spaces, Sprawling over approx. 15 acres in the vibrant Sector 142.
          Boasts of one of the largest floor plates in Noida (approx. 53,000 square feet).
          The office layout is designed with a 62.5% efficiency, ensuring optimum utilization of space.</p>
        <p>The towers are equipped with 21 high speed elevators.
          Multilevel Car Parking facility.
          IGBC Platinum Pre- Certified for Design.
          Business Center backed by State-of-the-art technology & support services.
          Mesmerizing views of lush Green Landscape with pop up fountains, Cycle & jogging Tracks.
        </p>
        <p>Sports Wellness Center with Gym, indoor swimming pool, meditation center, Indoor games and much more.
          Convenient access to significant residential, commercial, and recreational amenities, enhancing your lifestyle with accessibility and convenience.
        </p>
      </div>
    </div>
  )
}

export default About
