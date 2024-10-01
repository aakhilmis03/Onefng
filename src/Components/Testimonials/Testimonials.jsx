import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Akasa Coworking Spaces</h3>
                            <span>5th Floor</span>
                        </div>
                    </div>
                    <p>ONE FNG,’ draws inspiration from the transformative ‘FNG’ expressway, a testament to progress and connectivity in the National Capital Region (NCR). The ‘FNG’ expressway, standing for Faridabad-Noida-Ghaziabad, is an ambitious 56-kilometer infrastructure project, strategically designed to enhance regional road connectivity, drastically reducing travel time. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Retail Spaces</h3>
                            <span> Tower A(South  Wing): G+37 Floor</span>
                        </div>
                    </div>
                    <p>As a symbol of assurance, ‘ONE FNG’ embodies our commitment to providing modern and well-connected spaces that bring people closer to the heart of the NCR. Much like the ‘FNG’ expressway’s mission to streamline travel, our project aims to simplify and elevate the way you work, ensuring that convenience, connectivity, and community remain at its core</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Super Innova</h3>
                            <span> Working Space <br /> Tower B : 36Floor</span>
                        </div>
                    </div>
                    <p>Nestled within ONE FNG is a vibrant Hi-Street retail where you can explore, indulge, and savor a multifaceted experience. Here, shopping, dining, and entertainment seamlessly come together to create a dynamic and inviting space. Whether you are hunting for the latest fashion, enjoying a delectable meal, or simply unwinding with friends, our retail area is designed to cater to your diverse desires, ensuring a delightful and memorable visit.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Artistic Ingenuity</h3>
                            <span>Meet Modern Spaces</span>
                        </div>
                    </div>
                    <p>ONE FNG stands as an emblematic architectural marvel poised to reshape the cityscape and elevate Noida’s essence to new heights. This remarkable endeavor seamlessly unites artistic creativity with state-of-the-art workspaces and contemporary retail, crafting an environment where work and leisure seamlessly converge in perfect harmony.

</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
