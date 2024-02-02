import place1 from "./../image/place1.png";
import place2 from "./../image/place2.png";
import place3 from "./../image/place3.png";
import place4 from "./../image/place4.png";
import place5 from "./../image/place5.png";
import place6 from "./../image/place6.png";
import place7 from "./../image/place7.jpg";
import place8 from "./../image/place8.png";
import place9 from "./../image/place9.png";

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const slider = [place1, place2, place3, place4, place5, place6, place7, place8, place9];
function Placement() {
    return (
        <div className='placement'>
            <div className='spacer'>
                <div className='container'>
                    <div className="heading1"></div>
                    <p>STUDENT PLACEMENT</p>
                    <h2>OUR RECRUITMENT PARTNERS</h2>
                    <div className="all_brand">
                        <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={6} autoplay={true} autoplayTimeout={3000} autoplaySpeed={2000}>
                            {slider.map((ele, ind) => {
                                return (
                                    <div class='item' key={ind}>
                                        <div className="single_brand">
                                        <img src={ele}></img>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Placement;