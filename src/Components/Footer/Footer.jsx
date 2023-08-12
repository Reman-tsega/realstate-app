import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" />
                <span  className='secondaryText'>Our vision is to make all people<br/>
the best place to live for them.</span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText infoText'>Information</span>
                <span className='secondaryText'>145 New York, FL 5467, USA</span>
                <ul className='f-list '>
                    <li>property</li>
                    <li>product</li>
                    <li>service</li>
                    <li>about us</li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Footer