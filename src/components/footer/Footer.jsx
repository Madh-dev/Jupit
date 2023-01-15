import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                <div className='footer_content-up'>
                    <ul>
                    <h4>Quick Links</h4>
                    <li>Company</li>
                    <li>About Jupit</li>
                    <li>Contact Us</li>
                    </ul>
                      <ul>
                    <h4>Product</h4>
                    <li>Bitcoin</li>
                    <li>USDT</li>
                    <li>Gift Card</li>
                    <li>OTC</li>
                    </ul>
                      <ul>
                    <h4>Legal</h4>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Anti-Money laundering Policy</li>
                    </ul>
                      <ul>
                    <h4>Resources</h4>
                    <li>Blog</li>
                    <li>FAQ</li>
                    </ul>
                    <ul className='support'>
                    <a href='mailto:support@jupitapp.co'>support@jupitapp.co</a>
                    <a href='+2348028651917'>+234 802 8651 917</a>
                    </ul>
                </div>
                <div className='footer_content-down'>
                    <h4>Jupit.</h4>
                    <ul>
                        <li>Quick Links</li>
                        <li>Legals</li>
                        <li>Product</li>
                        <li>Resources</li>
                        <li>FAQs</li>
                    </ul>
                    <ul className='social_media'>
                        <li>linkedln</li>
                        <li>facebook</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer