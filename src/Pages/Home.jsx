import React, { useState, useRef, useEffect } from 'react'
import './Home.css'
import AwesomeSlider from 'react-awesome-slider';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import logo from "../Images/logo.png"
import cap from '../Images/cap.png'
import wheel from '../Images/wheel.png'
import revBoat from '../Images/revBoat.png'
import img1 from '../Images/img1.jpg'
import menuIcon from '../Images/menuIcon.png'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import bgvideo from '../Images/backgroundSec2.mp4'
import bgvideo3 from '../Images/vdo23.mp4'
import bgvideo2 from '../Images/bgvdoMobile.mp4'
import Carousole from '../Components/Carousole'
import gal1 from '../Images/gal1.JPG'
import gal7 from '../Images/DJI_0240.JPG'
import gal2 from '../Images/gal2.jpg'
import gal3 from '../Images/DJI_0258.JPG'
import gal4 from '../Images/DJI_0259.JPG'
import gal5 from '../Images/DJI_0268.JPG'
import gal8 from '../Images/DJI_0269.JPG'
import gal6 from '../Images/gal7.jpg'
import gal9 from '../Images/gal9.jpg'
import gal10 from '../Images/gal10.jpg'
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
    const [click, setClick] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='home'>
            <div className="topSec">
                <div className="logoMain">
                    <img src={logo} alt="VISTA COMM" />
                    <img onClick={() => setClick(!click)} src={menuIcon} alt="" /> {/* <h1>logo here</h1> */}
                </div>
            </div>
            <div className="midSec">
                <div className="videoLayer">
                    <video autoPlay loop muted id='bgVideo'>

                        {isMobile ? (
                            
                                <source src={bgvideo3} type='video/mp4' />
                        
                        ) : (
                           
                                <source src={bgvideo} type='video/mp4' />
                          
                        )}
                    </video>
                    <div className="layer1">
                        <div className={`nav ${click ? 'visibleji' : 'invisible'}`}>
                            <ul>
                                <li><a href="#ourBoat">Our Boat</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                                <li><a href="#contactus">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mid2Sec " id='ourBoat'>
                <div className="layer_mid2Sec">
                    {/* <img src={cap} alt="" /> */}
                    <div className="head1">
                        <span>Our Boat</span>
                        <span>Biuld and Get On Board Of Your Dream Silboat</span>
                    </div>
                    {/* <img src={wheel} alt="" /> */}
                </div>
                <div className='lineBar'></div>
                <div className="layer2_mid2Sec" id='gallery'>
                    <span>Gallery</span>
                    <div className="gallerySection">
                        <div className="gaal1">
                            <img src={gal1} alt="" />
                            <img src={gal2} alt="" />
                            <img src={gal10} alt="" />

                            <img src={gal6} alt="" />
                            <img className='bigImg2' src={gal7} alt="" />
                            <img src={gal9} alt="" />
                        </div>
                        {/*  </div>
                        {/* <div className="gal2">
                            <img src={gal3} alt="" />
                            <img src={gal5} alt="" />
                            <img src={gal4} alt="" />
                            <img src={gal8} alt="" />
                        </div> */}
                        <div className="gal3"></div>
                    </div>
                </div>
                <span className='galleryHeading' id='reviews'>Reviews</span>
                <div className='lineBar'></div>

            </div>
            <div className="reviewSection" >

                <div className="container_rev">
                    <img src={revBoat} alt="" />
                    <div className="caroSec">
                        <div className="revMenu">
                            <span>Connect with other members</span>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!</span>
                            <span>Connect now</span>
                        </div>
                        <div className="carosoulSec">
                            <   AutoplaySlider play={true}
                                transitionDelay={200}
                                interval={2000}
                                infinite
                                autoPlay


                            >
                                <div className='paage'><Carousole image={img1} name="Julie Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" /></div>
                                <div className='paage'>
                                    <Carousole image={img1} name="Anni Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />

                                </div>
                                <div className='paage'>
                                    <Carousole image={img1} name="Meniy Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />

                                </div>
                                <div className='paage'>
                                    <Carousole image={img1} name="Santie Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />

                                </div>
                                <div className='paage' >
                                    <Carousole image={img1} name="marry Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />

                                </div>
                            </AutoplaySlider>

                        </div>
                    </div>
                </div>

            </div>
            <div className='contactHead' id='contactus'> <span >Contact Us</span></div>
            <div className="bottomSec" >

                <div className="map">
                    <iframe loading="lazy" src="https://maps.google.com/maps?q=Achievers%20IAS%20Academy%20Patna&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Achievers IAS Academy Patna" aria-label="Achievers IAS Academy Patna" data-gtm-yt-inspected-7="true" data-gtm-yt-inspected-12="true"></iframe>

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