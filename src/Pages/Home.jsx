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
import MenuCard from '../Components/MenuCard';
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Home = () => {
    const [click, setClick] = useState(false);
    const [vd1, setVd] = useState('vehicleDetails');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const images = [
        gal1,
        gal2,
        gal3,
        gal4


    ];
    const menuItems1 = [
        { ques1: 'Vessel type', ans1: 'Sports Yacht' },
        { ques1: 'Main Engines', ans1: 'OBM Mercury 150 HP x 2 Nos' },
        { ques1: 'Genset', ans1: 'Mitsubishi 8 KVA' },
        { ques1: 'Navigation Aid', ans1: 'GPS + VHF + AIS' },
        { ques1: 'Mooring', ans1: '20 kg SS anchor with winch' },
        { ques1: 'G.S. Pump', ans1: 'Submersible DC' },
        { ques1: 'Lighting', ans1: 'AC/DC' },
        { ques1: 'Steering', ans1: 'Hydraulic' },
        { ques1: 'Fresh Water tank', ans1: '450 Ltr Approx x 1 Nos' },
        { ques1: 'Fuel Tank Petrol', ans1: '216 Ltr x 2 Nos' },
        { ques1: 'Fuel Tank Diesel', ans1: '150 Ltr x 1 Nos' },
        { ques1: 'Sewage Holding Taank', ans1: '75 Ltrs' },
        { ques1: 'Speed', ans1: '22 knots' }
    ];
    const menuItems2 = [
        { ques1: 'Port of Registry', ans1: 'Goa' },
        { ques1: 'Service Notation', ans1: 'IW Zone 1' },
    ];
    const menuItems3 = [
        { ques1: 'Length (O.A.)', ans1: '13.10 M' },
        { ques1: 'Breadth (MLD)', ans1: '3.10 M' },
        { ques1: 'Depth (MLD)', ans1: '1.47 M' },
        { ques1: 'Draft', ans1: '0.55 M' },
        { ques1: 'Fresh Water tank', ans1: '450 Ltr Approx x 1 Nos' },
        { ques1: 'Fuel Tank Petrol', ans1: '216 Ltr x 2 Nos' },
        { ques1: 'Fuel Tank Diesel', ans1: '150 Ltr x 1 Nos' },
        { ques1: 'Sewage Holding Taank', ans1: '75 Ltrs' },
        { ques1: 'Speed', ans1: '22 knots' }
    ];
    const menuItems4 = [
        { ques1: 'Cabin Space', ans1: 'Twin sofa + 1 double bed' },
        { ques1: 'Navigation Aid', ans1: 'GPS + VHF + AIS' },
        { ques1: 'Lighting', ans1: 'AC/DC' },
        { ques1: 'Remote', ans1: 'Push - Pull' },
        { ques1: 'Pantry', ans1: 'Single induction plate + Mini Fridge + Cofee machine' },

    ];
    const [selectedMenuItem, setSelectedMenuItem] = useState('vehicleDetails');
    const [menuCardVisible, setMenuCardVisible] = useState(true);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
        setMenuCardVisible(true);
    };


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

            </div>
            <div className="mid2Sec " id='ourBoat' ref={ourBoatRef}>
                <div className="layer_mid2Sec">
                    <div className="head1">
                        <span>Our Boat</span>
                        <span>Biuld and Get On Board Of Your Dream Silboat</span>
                    </div>
                    <div className="boatSection">
                        <div className="boatSectionContent">
                            <div className="boatP1">
                                <div className="headBoat">
                                    <span>SPECIFICATIONS</span>
                                </div>
                                <div className="bodyPart">
                                    <span>ENGINE</span>
                                    <div className="linemenu"></div>
                                    <ul>
                                        <li onClick={() => handleMenuItemClick('vehicleDetails')}>VEHICLES DETAILS</li>
                                        <li onClick={() => handleMenuItemClick('registrationDetails')}>REGISTRATION DETAILS</li>
                                        <li onClick={() => handleMenuItemClick('measure')}>MEASUREMENTS</li>
                                        <li onClick={() => handleMenuItemClick('ammen')}>VEHICLES AMMENMENTS</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`boatP2 ${menuCardVisible ? '' : 'hide'}`}>
                                {selectedMenuItem === 'vehicleDetails' && (
                                    <MenuCard menuItems={menuItems1} heading='VEHICLE DETAILS' />
                                )}
                                {selectedMenuItem === 'registrationDetails' && (
                                    <MenuCard menuItems={menuItems2} heading='REGISTRATION DETAILS' />
                                )}
                                {selectedMenuItem === 'measure' && (
                                    <MenuCard menuItems={menuItems3} heading='MEASUREMENTS' />
                                )}
                                {selectedMenuItem === 'ammen' && (
                                    <MenuCard menuItems={menuItems4} heading='VEHICLES AMMENMENTS' />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lineBar'></div>
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