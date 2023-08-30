import React, { useState, useRef, useEffect } from 'react'
import './Home.css'
import AwesomeSlider from 'react-awesome-slider';
import HoverCarousel from "hover-carousel";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import logo from "../Images/logo.png"
import cap from '../Images/cap.png'
import wheel from '../Images/wheel.png'
import revBoat from '../Images/revBoat.png'
import img1 from '../Images/img1.jpg'
import wave from '../Images/wave.png'
import menuIcon from '../Images/menuIcon.png'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import bgvideo from '../Images/backgroundSec2.mp4'
import bgvideo3 from '../Images/vdo23_1.mp4'
import bgvideo2 from '../Images/bgvdoMobile.mp4'
import Carousole from '../Components/Carousole'
import gal1 from '../Images/gal1.JPG'
import gal7 from '../Images/DJI_0240.JPG'
import gal2 from '../Images/gal2.JPG'
import gal3 from '../Images/gal3.JPG'
import gal4 from '../Images/gal4.JPG'
import gal5 from '../Images/DJI_0268.JPG'
import gal8 from '../Images/DJI_0269.JPG'
import gal6 from '../Images/gal7.jpg'
import gal9 from '../Images/gal9.jpg'
import gal10 from '../Images/gal10.jpg'
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Home = () => {
    const [click, setClick] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const images = [
        gal1,
        gal2,
        gal3,
        gal4


    ];
    const ourBoatRef = useRef(null);
    const galleryRef = useRef(null);
    const reviewRef = useRef(null);
    const contactRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToOurBoat = () => {
        ourBoatRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGallery = () => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToReview = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='home'>
            <div className="topSec">
                <div className="logoMain">
                    <img src={logo} alt="VISTA COMM" />
                    <img onClick={() => setClick(!click)} src={menuIcon} alt="" /> {/* <h1>logo here</h1> */}
                </div>
            </div>
            <div className="layer1">
                <div className={`nav ${click ? 'visibleji' : 'invisible'}`}>
                    <ul>
                        <li><a href="#ourBoat" onClick={scrollToOurBoat}>Our Boat</a></li>
                        <li><a href="#gallery" onClick={scrollToGallery}>Gallery</a></li>
                        <li><a href="#reviews" onClick={scrollToReview}>Reviews</a></li>
                        <li><a href="#contactus" onCanPlay={scrollToContact}>Contact Us</a></li>
                    </ul>
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

                </div>
                <div className='lineBar' style={{marginTop:'0px'}}></div>


            </div>
            <div className="mid2Sec " id='ourBoat' ref={ourBoatRef}>
                 <div className="layer_mid2Sec">
                    <div className="head1">
                        <span>Our Boat</span>
                        <span>Biuld and Get On Board Of Your Dream Silboat</span>
                    </div>
                <div className='lineBar' style={{marginBottom:'-20px'}}></div>

                    <div className="boatSection">
                        <div className="boat1">
                            <div className="boxBoat1">
                                <span>Go-Star</span>
                                <div className="nextPartBoat">
                                    <div className="nextPart1">
                                        <span>Your Luxurious Boat Rental Experience</span>
                                        <span>3D PRODUCT</span>
                                        <span>Discover the ultimate in luxury and comfort with Go-Star, where your dreams of an unforgettable boat adventure come true. Our exceptional boat rental service is dedicated to providing you with a one-of-a-kind experience that blends the excitement of cruising with the comforts of home. Step aboard and embark on a journey of indulgence and relaxation.</span>
                                        <span>Discover the Advantages</span>
                                    </div>
                                    <img src={gal2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="boat2">
                            <div className="boxBoat1">
                                <span>Go-Star</span>
                                <div className="nextPartBoat">
                                    <div className="nextPart1">
                                        <span>Unparalleled Comfort on the Water</span>
                                        <span>3D PRODUCT</span>
                                        <span>At Go-Star, we redefine the concept of boat rentals. Imagine a vessel where every detail is meticulously designed to ensure your comfort and convenience. Our boats feature spacious and elegantly furnished living areas, complete with plush sofas, cozy beds, and dining spaces that provide the perfect atmosphere for relaxation, socializing, and fine dining.</span>
                                        <span>Discover the Advantages</span>
                                    </div>
                                    <img src={gal3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="boat3">
                            <div className="boxBoat1">
                                <span>Go-Star</span>
                                <div className="nextPartBoat">
                                    <div className="nextPart1">
                                        <span>Adventure and Exploration Await</span>
                                        <span>3D PRODUCT</span>
                                        <span>Step out onto the deck and be greeted by breathtaking vistas that change with every passing moment. Feel the wind in your hair as you cruise along stunning coastlines, discovering hidden coves and pristine beaches. Whether you're seeking tranquility or adventure, Go-Star offers the ideal setting for both.</span>
                                        <span>Discover the Advantages</span>
                                    </div>
                                    <img src={gal4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="boat4">
                            <div className="boxBoat1">
                                <span>Go-Star</span>
                                <div className="nextPartBoat">
                                    <div className="nextPart1">
                                        <span>Book Your Voyage</span>
                                        <span>VISUALIZATION in 2023</span>
                                        <span>Don't miss out on the opportunity to sail with Go-Star and experience the epitome of luxury on the water. Contact us today to reserve your spot and embark on a journey that promises relaxation, beauty, and the thrill of the sea. Your voyage with Go-Star awaits – a voyage that promises to be everything you've ever dreamed of and more.</span>
                                        <span>Discover the Advantages</span>
                                    </div>
                                    <img src={gal4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lineBar' style={{marginTop:'-20px'}}></div>
                <div className="layer2_mid2Sec" id='gallery' ref={galleryRef}>
                    <span>Gallery</span>
                    <div className="gallerySection">
                        <HoverCarousel images={images} />
                    </div>
                </div>
                <div className='lineBar'></div>

            </div>
            <div className="reviewSection" >
                <div>
                    <span className='galleryHeading' id='reviews' ref={reviewRef}>Reviews</span>

                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '-webkit-fill-available' }}>
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


            </div>
            <div className='contactHead' id='contactus' ref={contactRef}> <span >Contact Us</span></div>
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