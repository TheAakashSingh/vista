import React from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from "../Images/logo.png"
import cap from '../Images/cap.png'
import wheel from '../Images/wheel.png'
import revBoat from '../Images/revBoat.png'
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import bgvideo from '../Images/backgroundSec2.mp4'
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
                        <span>Our Boat</span>
                        <span>Biuld and Get On Board Of Your Dream Silboat</span>
                    </div>
                    <img src={wheel} alt="" />
                </div>
                <div className='lineBar'></div>
                <div className="layer2_mid2Sec" id='gallery'>
                    <span>Gallery</span>
                    <div className="gallerySection">
                        <div className="gaal1">
                            <img src={gal1} alt="" />
                            <img src={gal2} alt="" />
                            <img src={gal10} alt="" />
                        </div>
                        <div className="gal2">
                            <img src={gal3} alt="" />
                            <img src={gal5} alt="" />
                            <img src={gal4} alt="" />
                            <img src={gal8} alt="" />
                        </div>
                        <div className="gal3">
                            <img src={gal6} alt="" />
                            <img src={gal7} alt="" />
                            <img src={gal9} alt="" />
                        </div>
                    </div>
                </div>
                <div className='lineBar'></div>


            </div>
            <div className="reviewSection" id='reviews'>
                <div className="container_rev">
                    <img src={revBoat} alt="" />
                    <div className="caroSec">
                        <div className="revMenu">
                            <span>Connect with other members</span>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!</span>
                            <span>Connect now</span>
                        </div>
                        <div className="carosoulSec">
                            <Carousel autoPlay interval={3000} infiniteLoop centerMode centerSlidePercentage={35} showArrows>
                                <Carousole image={img1} name="Julie Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />
                                <Carousole image={img1} name="Anni Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />
                                <Carousole image={img1} name="Meniy Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />
                                <Carousole image={img1} name="Santie Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />
                                <Carousole image={img1} name="marry Williams" reviews="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor numquam praesentium expedita? Ipsa voluptatibus consectetur eveniet. Ipsum!" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottomSec" id='contactus'>
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