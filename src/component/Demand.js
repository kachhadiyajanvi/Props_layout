const button=['best web development training instiute','advance angular js training institute in surat','graphics design training in varachha','Google sketchup training institute in surat','spoken english class in adajan','tally accounting training institute in varachha','wordpress training institute in varachha','best python training institute','autocad mechanical training course','android training institute in katargam','adobe xd design training institute in surat','multimedia training institute in mota varchha','web development training institute in surat']
function Demanded(){
    return(
        <>
        <div className='our_course'>
        <div className='container'>
          <p>Our Demanded Course</p><div className='line'></div>
          <div className='course_name'>
            {button.map((ele,ind)=>{
                return(
                    <button key={ind}>{ele}</button>
                )
            })}
          </div>
          <span className='show_more'>Show More</span>
        </div>
      </div>
        </>
    )
}
export default Demanded;