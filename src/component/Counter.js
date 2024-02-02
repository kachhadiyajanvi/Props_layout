import counter1 from "./../image/counter1.png";
import counter2 from "./../image/counter2.png";
import counter3 from "./../image/counter3.png";
import counter4 from "./../image/counter4.png";
const counter = [
    { img: counter1, info: '18000+', name: 'HAPPY STUDENTS' },
    { img: counter2, info: '10+', name: 'CERTIFICATION APPROVAL' },
    { img: counter3, info: '100+', name: 'CERTIFIED TEACHERS' },
    { img: counter4, info: '12000+', name: 'STUDENTS PLACED' }
]
function Counter() {
    return (
        <div className='row'>
            <div className='counter spacer'>
                <div className='cnt_img'>
                    <div className='cnt_2 container'>

                        {counter.map((ele, ind) => {
                            return (
                                <div key={ind} className='cnt1'>
                                    <div className='cnt'>
                                        <img src={ele.img}></img>
                                    </div>
                                    <div className='cnt_content'>
                                        <h3 className='cnt_text'>
                                            <span>{ele.info}</span>
                                            <p>{ele.name}</p>
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;