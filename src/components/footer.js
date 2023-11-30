import "../styles/footer.css";
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {BiLogoPinterestAlt} from "react-icons/bi"


const Footer = () => {
    return(
        <div className="footer_container">
            <div className="footerdiv1">
            <img className="footerlogo" src="https://ogami-react.vercel.app/assets/images/logo.png" alt=""/>
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p>Email: info.deercreative@gmail.com</p>
            <div className="fotter2_icons">
                    <BiLogoFacebook className="ioniconfooter_style"/>
                    <BiLogoTwitter className="ioniconfooter_style"/>
                    <BiLogoInstagramAlt className="ioniconfooter_style"/>
                    <BiLogoPinterestAlt className="ioniconfooter_style"/>
                </div>
            </div>
            <div className="footerdiv2">
                <h3>INFORMATION</h3>
                  <a href="">About us</a>
                  <a href="">Check out</a>
                  <a href="">Contact</a>
                  <a href="">Service</a>
            </div>
            <div className="footerdiv3">
                <h3>MY ACCOUNT</h3>
                  <a href="">My account</a>
                  <a href="">Check out</a>
                  <a href="">Contact</a>
                  <a href="">Service</a>
            </div>
            <div className="footerdiv4">
                <h3>QUICK SHOP</h3>
                <a href="">About us</a>
                  <a href="">Check out</a>
                  <a href="">Contact</a>
                  <a href="">Service</a>
            </div>
            <div className="footerdiv5">
                <h3>Join Our Newsletter Now</h3>
                <p>Get E-mail updates about our latest <br></br> shop and special offers.</p>
                <div className="footerdetails">
                   <input className="footerinp" type="text" placeholder="Enter your name" />
                   <button className="subbtn">SUBSCRIBe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;
