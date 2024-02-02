function Choose(props) {
    return (
        <div className='single_why'>
            <div className="why_image">
                <div className='why_img'>
                    <img src={props.img}></img>
                </div>
            </div>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
        </div>
    )
}
export default Choose;