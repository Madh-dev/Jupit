import React from 'react'
import './install.css'

const Install = () => {
  return (
   <section className='container install'>
    <div className='install_img'>
        <img src='me.jpg' alt='install' width='20%'></img>
        <h3>Install the App today</h3>
        <p>The Progressive Web App works just like your regular App, it's super easy and <br/>
            convenient. To install, please follow the process below
        </p>
    </div>
    <div className='install_process'>
        <ul>
            <li>Launch <a href='www.jupitapp.com/signin'>www.jupitapp.com/signin</a> from your
             mobile device or tablet</li>
            <li>Select Add Page to Home Screen</li>
            <li>Navigate to the browser option on<br/> your android device or tap the share<br/>
             button on your IOS device</li>
             <li>Return to home menu to launch<br/> the application shortcut.</li>
        </ul>
        </div>
    <div className='install_join'>
        <h5>Join our 3,620 and counting user today <br/>
        and start transacting seamlessly
        </h5>
        <button className='btn'>Get Started</button>
        </div>
   </section>
  )
}

export default Install