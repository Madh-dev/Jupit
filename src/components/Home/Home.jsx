import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
        <article className='home_front'>
            <div>
                <h3>Make easy digital assets<br/>
                transactions anywhere,<br/>
                anytime with Jupit.</h3>
                <p>A place for everyone who wants to simply buy and<br/>
                 sell digital assets, it just takes 120 seconds!</p>
                 <button className='btn'>Get started</button>
            </div>
            <img src='me.png' alt=''  height='200px'/>
        </article>
        <article className='home_box'>
            <div className='home_card'>
                <img src='wa.png' alt='icon'width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Invest in crypto anytime, anywhere<br/>
                with our safe,secure and easy to
                <br/> use online platflorm</p>
                <a href='###'>Get Started <i>icon arrow</i></a>
            </div>
            <div className='home_card'>
                <img src='wa.png' alt='icon'width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Invest in crypto anytime, anywhere<br/>
                with our safe,secure and easy to
                <br/> use online platflorm</p>
                <a href='###'>Get Started <i>icon arrow</i></a>
            </div>
            <div className='home_card'>
                <img src='wa.png' alt='icon'width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Invest in crypto anytime, anywhere<br/>
                with our safe,secure and easy to
                <br/> use online platflorm</p>
                <a href='###'>Get Started <i>icon arrow</i></a>
            </div>
            <div className='home_card'>
                <img src='wa.png' alt='icon'width='20px'/>
                <h5>Fast Transaction</h5>
                <p>Invest in crypto anytime, anywhere<br/>
                with our safe,secure and easy to
                <br/> use online platflorm</p>
                <a href='###'>Get Started <i>icon arrow</i></a>
            </div>
        </article>
    </section>
  )
}

export default Home