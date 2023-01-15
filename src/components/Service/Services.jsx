import React from 'react'
import './services.css';
const Services = () => {
  return (
    <section className='services'>
        <div>
            <h4>Best services that works<br/> for you</h4>
            <p>We provide a wide range of services to our users. Take a look at few of the<br/>
             solutions to expect from us.</p>
        </div>
        <div className='services-offer'>
            <div className='service'>
                <img src='wa.png' alt='icon' width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Fast and easy to use trading<br/>
                services in one intergrated platflorm</p>
            </div>
            <div className='service'>
                <img src='wa.png' alt='icon' width='20px'/>
                <h5>Secure Wallet</h5>
                <p>You can rest knowing that your<br/>
                asset is sage with us anytime</p>
            </div>
            <div className='service'>
                <img src='wa.png' alt='icon' width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Fast and easy to use trading<br/>
                services in one intergrated platflorm</p>
            </div>
            <div className='service'>
                <img src='wa.png' alt='icon' width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Fast and easy to use trading<br/>
                services in one intergrated platflorm</p>
            </div>
        </div>
    </section>
  )
}

export default Services