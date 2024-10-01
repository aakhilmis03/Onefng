import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    const [formData, setFormData] = useState({
      name: '',
      number: '',
      message: ''

});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Submited");
      setFormData({ name: '', number: '', message: '' });
      // const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      // formData.append("access_key", "-----Enter your web3forms key----");
  
      // const res = await fetch("https://api.web3forms.com/submit", {
      //   method: "POST",
      //   body: formData
      // }).then((res) => res.json());
  
      // if (res.success) {
      //   console.log("Success", res);
      //   setResult(res.message);
      //   event.target.reset();
      // } else {
      //   console.log("Error", res);
      //   setResult(res.message);
      // }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@onefng.com</li>
            <li><img src={phone_icon} alt="" />+91 9070 108 108</li>
            <li><img src={location_icon} alt="" /><br/> Noida , India</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="Enter your mobile number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
