import React from 'react'
import './testimonial.css'
const Testimonial = () => {
  return (
    <section className='testimonial'>
        <h5>See what our users' <br/> say about us</h5>
        <p>This testimonies and much more join us so we can hear<br/>
         your testimonies too</p>
        <div className='testimonial_box'>
            <div className='testimonial_box-card'>
                <img src='' alt=''/>
                <h6>Femi Jupit</h6>
                <h5>All your crypto in one place</h5>
                <p>We make sure that every crytocurrency payment <br/>
                     and transaction are processed seamslessly and <br/>
                    qucikly so that you could enjoy the result without <br/> any stress
                </p>
            </div>
            <div className='testimonial_box-card'>
                <img src='' alt=''/>
                <h6>Femi Jupit</h6>
                <h5>All your crypto in one place</h5>
                <p>We make sure that every crytocurrency payment <br/>
                     and transaction are processed seamslessly and 
                    qucikly so that you could enjoy the result without <br/> any stress
                </p>
            </div>
        </div>
    </section>
  )
}

export default Testimonial