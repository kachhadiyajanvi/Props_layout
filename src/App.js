import './App.css';
import { IoIosArrowUp } from "react-icons/io";
import Header from './component/Header';
import Course from './component/Course';
import About from './component/About';
import Counter from './component/Counter';
import Testimonial from './component/Testimonial';
import Choose from './component/Choose';
import Placement from './component/Placement';
import Demanded from './component/Demand';
import Footer from './component/Footer';
import choose1 from "./image/choose1.PNG";
import choose2 from "./image/choose2.PNG";
import choose3 from "./image/choose3.PNG";
import choose4 from "./image/choose4.PNG";
import choose5 from "./image/choose5.PNG";
import choose6 from "./image/choose6.PNG";
import { BsArrowRight } from "react-icons/bs";
import course1 from "./image/course1.webp";
import course2 from "./image/course2.webp";
import course3 from "./image/course3.webp";
import course4 from "./image/course4.webp";
import course5 from "./image/course5.webp";
import course6 from "./image/course6.webp";
const single_course = [
    { img: course1, info: 'Development Courses' },
    { img: course2, info: 'Design Courses' },
    { img: course3, info: 'Programming IT' },
    { img: course4, info: 'Trendy Courses' },
    { img: course5, info: 'Civil-Mech. Engineering' },
    { img: course6, info: 'Business Development' }
]

const choose = [
    { img: choose1, title: 'Industry Experts As Trainers', info: 'Our trainers have 5+ years of industry experience coupled with extensive research and analysis.' },
    { img: choose2, title: 'Latest Curriculum', info: 'We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.' },
    { img: choose3, title: 'Latest Technology', info: 'We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.' },
    { img: choose4, title: 'Interview Assistance', info: 'At the end of each training,our training instructor will go through the possible technical questions you may be asked.' },
    { img: choose5, title: 'Free Upgradation', info: 'We will be provided free upgradation for any newer version of the course you have.' },
    { img: choose6, title: 'Lifetime Support', info: 'We will provide you lifetime support on all the courses you learned from us.' },
]


function App() {
  return (
    <section className="body">
      <Header></Header>
      <div className="courses">
                <div className="spacer">
                    <div className="container">
                        <div className="heading"></div>
                        <p>CREATIVE COURSE</p>
                        <h2>OFFERED COURSES</h2>
                        <div className="all_courses">
                            {single_course.map((ele, ind) => {
                                return (
                                  <Course img={ele.img} info={ele.info}></Course>
                                )
                            })}
                        </div>
                    </div>
                    <div className="view_all_course">
                        <span>View All Course <BsArrowRight></BsArrowRight></span>
                    </div>
                </div>
            </div>
      
      <About></About>
      <Counter></Counter>
      <Testimonial></Testimonial>

      <div className="creative">
            <div className='bggraycolor'>
                <div className="spacer">
                    <div className="container">
                        <div className="heading1"></div>
                        <p>READ OUR DIFFERENCE</p>
                        <h2>WHY CHOOSE CREATIVE</h2>
                        <div className="all_why">
                            {choose.map((ele, ind) => {
                                return (
                                  <Choose img={ele.img} title={ele.title} info={ele.info}></Choose>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
      <Placement></Placement>
      <Demanded></Demanded>
      <Footer></Footer>
      
      {/* footer */}
      
      {/* angle up */}
      <div className='angle_up'>
        <a href='#angle'><IoIosArrowUp></IoIosArrowUp></a>
      </div>
    </section>
  )
}

export default App;
