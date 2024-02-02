import about from "./../image/about.jpg";
import { BsArrowRight } from "react-icons/bs";
import { FaPlay} from "react-icons/fa6";

function About() {
    return (
        <div className="spacer">
            <div className="about">
                <div className='about1'>
                    <div className="about_shape">
                        <div className="container">
                            <div className='heading_about'>
                                <h5>------  ABOUT US</h5>
                            </div>
                            <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                            <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                            <div className="enroll_now">
                                <span>Enroll Now..!  <BsArrowRight></BsArrowRight></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about2'>
                    <img src={about}></img>
                    <div className="about2_layer">
                        <span><FaPlay></FaPlay></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;