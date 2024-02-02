import { FaStar } from "react-icons/fa6";

function Course(props) {
    return (
        <>
            <div className="single_course">
                                        <div className="course_img">
                                            <img src={props.img}></img>
                                        </div>
                                        <h3>{props.info}</h3>
                                        <div className="ranking">
                                            <ul>
                                                <li><FaStar ></FaStar></li>
                                                <li><FaStar ></FaStar></li>
                                                <li><FaStar ></FaStar></li>
                                                <li><FaStar ></FaStar></li>
                                                <li><FaStar ></FaStar></li>
                                            </ul>
                                            <div className="know_more">
                                                <span>Know More..!</span>
                                            </div>
                                        </div>
                                    </div>
        </>
    )
}
export default Course;