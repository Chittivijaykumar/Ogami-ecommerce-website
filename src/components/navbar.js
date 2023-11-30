import "../styles/navbar.css";
import {BiSearch} from "react-icons/bi"
import {BiHeart} from "react-icons/bi"
import {BsFillCartFill} from "react-icons/bs"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar_container">
            <div className="navbar_logo">
               <img src="https://ogami-react.vercel.app/assets/images/logo.png" alt=""/>
            </div>
            <div  className="navbar_search">
            <select name="" id="" className="navbar_select1">
                <option value="">All Categories</option>
                <option value="">Bread</option>
                <option value="">Fastfood</option>
                <option value="">Fresh Meat</option>
                <option value="">Fresh Meat</option>
                <option value="">Ocean Foods</option>
                <option value="">Organic Drinks</option>
                <option value="">Oranges</option>
                <option value="">Vegetables</option>
           </select>
           <input className="navbar_inp1" type="text" placeholder="What do you need"/>
           <BiSearch className="searchicon"/>
           </div>
           <div  className="navbar_list">
           <select name="" id=""  className="navbar_selectlist">
                <option value="">HOME</option>
                <option value="">Home Page1</option>
                <option value="">Home Page2</option>
                <option value="">Home Page3</option>
                <option value="">Home Page4</option>
            </select>
           </div>
           <div  className="navbar_list" >
           <select name="" id="" className="navbar_selectlist">
                <option value="">SHOP</option>
                <option value="">SHOP 1</option>
                <option value="">SHOP 2</option>
                <option value="">SHOP 3</option>
                <option value="">SHOP 4</option>
            </select>
           </div>
           <div  className="navbar_list" >
           <select name="" id="" className="navbar_selectlist">
                <option value="">BLOG</option>
                <option value="">SHOP 1</option>
                <option value="">SHOP 2</option>
                <option value="">SHOP 3</option>
                <option value="">SHOP 4</option>
            </select>
           </div>
           <div className="navbar_link">Pages</div>
           <div className="navbar_link">About us</div>
           <div className="navbar_icon"><BiHeart/></div>
           <Link to={"/cart"}>
           <div className="navbar_icon"><BsFillCartFill/>
           </div>
           </Link>
           
           <div className="navbar_"><p>$ 0.00</p></div>
        </div>
    )
}

export default Navbar;
