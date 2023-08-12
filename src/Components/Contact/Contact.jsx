import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'

function Contact() {
  return (
    <section className="c-wrapper">

    <div className='paddings innerWidth flexCenter c-container'>
        {/* ______________ left image section ____________ */}
        <div className="flexColStart c-left">
        <span className='orangeText'>Our Contact Us</span>
          <span className='primaryText'> Easy to contact us</span>
          <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good <br/>blace to live can make your life better</span>
          
          {/* _____________________ modes ____________________________________________ */}
          <div className="flexColStart c-Models">
            <div className="flexStart row">
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>+251947731212</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call now</div>
                </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>+251947731212</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat now</div>
                </div>
            </div>
                {/* second row */}
            <div className="flexStart row">

                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>Video Call</span>
                            <span className='secondaryText'>+251947731212</span>
                        </div>
                    </div>
                    <div className="flexCenter button">video Call now</div>
                </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className='primaryText'>message</span>
                            <span className='secondaryText'>+251947731212</span>
                        </div>
                    </div>
                    <div className="flexCenter button">message now</div>
                </div>
            </div>
          </div>
        </div>
          {/* _______________________--________ left ends ________________________________ */}

          <div className="c-right flexColStart">
          <div className="image-container">
                <img src="./contact.jpg" alt="" />
            </div>
          
        </div>
        </div>
    </section>
  )
}

export default Contact