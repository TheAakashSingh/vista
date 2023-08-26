import React from 'react'
import './Home.css'
import logo from "../Images/logo.png"
import cap from '../Images/cap.png'
import wheel from '../Images/wheel.png'
import bgvideo from '../Images/backgroundSec2.mp4'

const Home = () => {
    return (
        <div className='home'>
            <div className="topSec">
                <div className="logoMain">
                    <img src={logo} alt="VISTA COMM" />
                    {/* <h1>logo here</h1> */}
                </div>
            </div>
            <div className="midSec">
                <div className="videoLayer">
                    <video autoPlay loop muted id='bgVideo'>
                        <source src={bgvideo} type='video/mp4' />
                    </video>
                    <div className="layer1">
                        <div className="nav">
                            <ul>
                                <li><a href="#ourBoat">Our Boat</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#contactus">Contact Us</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mid2Sec " id='ourBoat'>
                <div className="layer_mid2Sec">
                    <img src={cap} alt="" />
                    <div className="head1">
                        <span>Find The Right</span>
                        <span> Boat For You</span>
                        <span>Biuld and Get On Board Of Your Dream Silboat</span>
                    </div>
                    <img src={wheel} alt="" />
                </div>

            </div>
            <div className="bottomSec" id='contactus'>
                <div className="map">
                    <iframe loading="lazy"  src="https://maps.google.com/maps?q=Achievers%20IAS%20Academy%20Patna&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Achievers IAS Academy Patna" aria-label="Achievers IAS Academy Patna" data-gtm-yt-inspected-7="true" data-gtm-yt-inspected-12="true"></iframe>

                </div>
                <div className="contactUsForm">
                    <span>Get In Touch</span>
                    <form action="">
                        <input type="text" name='fullName' placeholder='Full Name' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="number" name='number' placeholder='Number' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home