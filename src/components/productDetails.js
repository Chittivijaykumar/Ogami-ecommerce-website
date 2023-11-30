import Header from  "./header";
import Navbar from  "./navbar";
import "../styles/productDetails.css";
import React  , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import {ogamiBaseUrl , ogamiReactBaseUrl} from "../utils/api"
import axios from "axios";
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {BiLogoPinterestAlt} from "react-icons/bi"



export default function ProductDetails() {
    const params = useParams();
    const [pDetails , setPDetails] = useState();
    const[img,setImg]=useState(null);
    const[tab,setTab]=useState(0);
    // const[pReviews,setReviews]=useState();
    const fetchData = async() => {
        const {data} = await axios.get(ogamiBaseUrl+"/api/product?&slug=" +params.productId);
        setPDetails(data[0]);
    }
    useEffect(()=>{
        fetchData()

    }, [])
    console.log(params)
    
    return (
        
        <div className="">
             <Header/>
             <Navbar/>
            <h1>PRODUCT DETAILS</h1>
            <div className="Products-details">
            <div className="productimggdivv">
          {pDetails?.images?.map((e,index) => {
               return(
            <div className="productsimgdiv" key={index} onClick={()=>setImg(e)}>
                <img className="productsimggg" src={ogamiReactBaseUrl + e} ></img>
            </div>
                 )
             })} 
            </div>
                {/*  */}
                <div className="product-detail-img-box">
                <img className="product-detail-img" 
                src={img ? ogamiReactBaseUrl + img : ogamiReactBaseUrl+ pDetails?.coverImage}></img>
                </div>
            {/*  */}
            <div className="product-summery-box">
            <p className="product-detail-category">{pDetails?.category}</p>
            <p className="product-detail-name">{pDetails?.name}</p>
                <p className="product-summery">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>

                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum. <br></br>

                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor.<br></br>

                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                  <div className="product-details-footer">
                    <div className="footerdet"> <span className="footer-terms">SKU:</span><span className="footer-terms2"> A1359</span></div>
                    <div className="footerdet"><span className="footer-terms">Categories:</span><span className="footer-terms2"> Fastfood</span></div>
                    <div className="footerdet1">  <span className="footer-terms">FastfoodTag:</span><span className="footer-terms2"> Food, Organic</span> </div>
                </div>
                <div className="share-linkdiv"> 
                 <span className="share_link">Share link:</span>
                    <BiLogoFacebook className="ionicon_style_footer"/>
                    <BiLogoTwitter className="ionicon_style_footer"/>
                    <BiLogoInstagramAlt className="ionicon_style_footer"/>
                    <BiLogoPinterestAlt className="ionicon_style_footer"/>
                 </div>

            </div>
            {/*  */}
            <div className="product-details-box3">
                <p className="free_delivery"> Free delivery</p>
                <p className={`pd-price ${pDetails?.discount ? "pd-gray-price":"pd-green-price"}`}> ${pDetails?.price}</p>
                {pDetails?.discount && (
                    <p className="pd-discountPrice pd-green-price">
                  ${pDetails?.price-pDetails?.discount}
              </p>
)}
                <div  className="product_quantity">
                   <input className="quantity_input" type="text"/>
                    <div className="quantity_measure">
                      <button className="quantity_value">-</button>
                      <button className="quantity_value">+</button>
                    </div>
                </div>
              <button className="product_detail_btns" >ADD TO CART</button>
              <button className="product_detail_btns" >ADD TO COMPARE</button>
              <div className="box3_lastdetails">
              <p className="box3_details" ><b className="tick_icon">&#10003;</b> Satisfaction 100%  <br></br> Guaranteed</p>
              <p className="box3_details" ><b className="tick_icon">&#10003;</b> Free shipping on orders <br></br>over $99</p>
              <p className="box3_details" ><b className="tick_icon">&#10003;</b> 14 day easy Return </p>
              </div>
            </div>
        </div>
        {/*  */}
        <div className="heading_list">
            <h4 className="head4_detail" onClick={()=> setTab(0)} >DESCRIPTION</h4>
            <h4 className="head4_detail" onClick={()=> setTab(1)} >SPECIFICATIONS</h4>
            <h4 className="head4_detail" onClick={()=> setTab(2)} >REVIEWS</h4>
        </div>
        {tab == 0 && <div className="description_head">{pDetails?.fullDescription}</div> }
        {tab == 1 && <div className="specifications_head">
            <table className="pd_table">
                <tr className="pb_tr">
                    <td className="pd_quantities">WEIGHT</td>
                    <td>{pDetails?.specifications?.weight}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">SIZE</td>
                    <td>{pDetails?.specifications?.size}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">COLOR</td>
                    <td>{pDetails?.specifications?.color}</td>
                </tr>
                <tr className="pb_tr">
                    <td className="pd_quantities">DIMENSIONS</td>
                    <td>{pDetails?.specifications?.dimensions?.long}x{pDetails?.specifications?.dimensions?.width}x{pDetails?.specifications?.dimensions?.long}</td>
                </tr>
            </table>
            </div>}
            {tab==2 && 
            
                <div className="reviews_head" >
                {pDetails?.reviews?.map((e,i)=>{
                  return(
                      <div className="reviewcontainer">
                      <div className="reviewsubdiv">
                      <span><img className="personimg" src={e?.user?.avatar} /></span>
                      <span>star</span>
                      </div>

                      <div className="reviewdetails" >
                      <span>{e?.commentDate}</span>
                       <span>{e?.user?.name}</span>
                    <p>{e?.review}</p>
                   </div>
                        </div>
                  )
                })}
                 </div>
            }
        

        </div>
    )

    
    
    
}