import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa6";
import testi_img from "./../image/testimonal_img.jpg";
import testi_img2 from "./../image/testimonial.jpg";
function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <div className="container">
                    <div className="spacer">
                        <div className="all_testi">
                            <div className="testimonial1">
                                <div className="heading_about">
                                    <p>----- HAPPY STUDENTS</p>
                                </div>
                                <h3>ALUMNI SPEAK</h3>
                                <div className='testimonial_quot'>
                                    <div className="testi_button_quot">
                                        <p><FaQuoteRight></FaQuoteRight></p>
                                    </div>
                                    <div >
                                        <div className="testimonial_button">
                                            <div className='testi_button1'><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></div>
                                            <div className="testi_button2"><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='testimoni_para'>
                                    <p>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>
                                </div>
                                <div className='testi_review'>
                                    <div className='testi_img'>
                                        <img src={testi_img}></img>
                                    </div>
                                    <div>
                                        <h6>KOLADIYA MANSI</h6>
                                        <p>UI/UX Designer</p><span> @ Patoliya Infotech</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial2">
                                <div>
                                    <img src={testi_img2}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;