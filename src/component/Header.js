import banner1 from "./../image/1.webp";
import banner2 from "./../image/slider1.jpg";
import banner3 from "./../image/slider2.webp";
import banner4 from "./../image/slider3.webp";
import banner5 from "./../image/slider4.webp";
import banner6 from "./../image/slider5.webp";
import banner7 from "./../image/slider6.webp";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BsEnvelope, BsPlayBtn } from "react-icons/bs";
import { FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaGooglePlusG } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import logo from "./../image/logo.svg";
const header_obj = [
    { icon: <BsEnvelope></BsEnvelope>, info: " info@gmail.in" },
    { icon: <FaCertificate></FaCertificate>, info: " Verify Certificate" },
]
const header_icon = [<FaFacebookF></FaFacebookF>, <FaTwitter></FaTwitter>, <FaGooglePlusG></FaGooglePlusG>, <FaLinkedin></FaLinkedin>, <ImInstagram></ImInstagram>, <BsPlayBtn></BsPlayBtn>, <FaWhatsapp></FaWhatsapp>]
const header_menu = ['HOME', 'COURSE', 'ACTIVITIES', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'STUDENT ZONE'];
const slider = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

function Header() {
    return (
        <>
            {/* top header */}
            <div className="header" id="angle">
                <div className="bgbluecolor">
                    <div className="container">
                        <div className="main">
                            <div className="info">
                                <ul>
                                    {
                                        header_obj.map((ele, ind) => {
                                            return (
                                                <li key={ind}><i>{ele.icon}</i>{ele.info}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="letter">
                                <ul>
                                    <li>HAVE ANY QUESTION? +91 90333 16003</li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul>
                                    {
                                        header_icon.map((ele, ind) => {
                                            return (
                                                <li key={ind}><a href="#" target="_blank">{ele}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* logo header */}
            <div className="logo_header">
                <div className="logo_header">
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <a href="header1.html"><img src={logo}></img></a>
                            </div>
                            <div className="navbar">
                                <ul className="main_menu">
                                    {
                                        header_menu.map((ele, ind) => {
                                            return (
                                                <li key={ind}><a href="#">{ele}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="banner">
                <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} autoplay={true} autoplayTimeout={3000} autoplaySpeed={2000}>
                    {slider.map((ele, ind) => {
                        return (
                            <div class='item' key={ind}>
                                <img src={ele}></img>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}
export default Header;