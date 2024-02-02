import footer_logo from "./../image/whitelogo.svg";
import { BsPlayBtn} from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp, FaGooglePlusG } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaHandPointRight, FaUniversity } from "react-icons/fa";
const footer_icon=[<FaFacebookF></FaFacebookF>,<FaTwitter></FaTwitter>,<FaGooglePlusG></FaGooglePlusG>,<FaLinkedin></FaLinkedin>,<ImInstagram></ImInstagram>,<BsPlayBtn></BsPlayBtn>,<FaWhatsapp></FaWhatsapp>]
const footer_menu=[
    {icon:<FaHandPointRight/>,info:' About Us'},
    {icon:<FaHandPointRight/>,info:' Blogs'},
    {icon:<FaHandPointRight/>,info:' Join Us'},
    {icon:<FaHandPointRight/>,info:' Company Login'},
    {icon:<FaHandPointRight/>,info:' Certificate Verification'},
]
const branch=[
    {icon:<FaUniversity/>,info:' Katargam'},
    {icon:<FaUniversity/>,info:' Mota Varchha'},
    {icon:<FaUniversity/>,info:' Adajan'},
    {icon:<FaUniversity/>,info:' Navsari'},
]
function Footer(){
    return(
        <>
            <footer>
        <div className='bgbluecolor'>
          <div className='spacer'>
            <div className='container'>
              <div className='footer_all'>
                <div className='footer1'>
                  <div className='footer_img'>
                    <a href='./app.js'><img src={footer_logo}></img></a>
                  </div>
                  <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                  <h4>FOLLOW US ON</h4>
                  <ul className='footer_icon'>
                    {footer_icon.map((ele,ind)=>{
                        return(
                            <li><a href="#" target="_blank" key={ind}>{ele}</a></li>
                        )
                    })}
                  </ul>
                </div>
                <div className='footer2'>
                  <h3>FEATURE LINKS</h3>
                  <ul className='footer2_links'>
                    {footer_menu.map((ele,ind)=>{
                        return(
                            <li><a href='#'>{ele.icon}{ele.info}</a></li>
                        )
                    })}
                  </ul>
                </div>
                <div className='footer3'>
                  <h3>CONTACT US</h3>
                  <h4>HEAD OFFICE - YOGICHOWK</h4>
                  <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                  <p>Mo :<span> +91 90333 16003</span></p>
                  <h4 className='branch'>OTHER BRANCHES</h4>
                  <ul className='footer3_links'>
                    {branch.map((ele,ind)=>{
                        return(
                            <li><a href='#'>{ele.icon}{ele.info}</a></li>
                        )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='end_footer'>
          <div className='container'>
            <p>&#169; 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer;