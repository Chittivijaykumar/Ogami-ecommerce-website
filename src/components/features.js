import Card from "./card";
import {AiOutlineHeart,AiOutlineEye,AiFillHeart} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/features.css";
import {Addtocart} from "../utils/cart";

const Features=(props)=>{
    function handleWishlist(product){
        const findIndex = props.wishlist.findIndex((e) => e.id == product.id);
        if(findIndex == -1){
            return[...props.wishlist,product]
        }else{
            return props.wishlist.filter(e => e.id !== product.id)
        }
       }
        return (
        <div className="featured_productlist">
            <h1 className="featureproduct_head1">Featured Product</h1>
            <div className="feature_producttags">
                <span className="listtagname">All</span>
                <span className="listtagname">Bread</span>
                <span className="listtagname">Fastfood</span>
                <span className="listtagname">Fresh Meat</span>
                <span className="listtagname">Ocean Foods</span>
                <span className="listtagname">Oranges</span>
            </div>
        <div className="features-list" >
            
        {props?.data?.map((e, index)=>{
                    const productIndex = props.wishlist.findIndex(
                        (product)=> e.id == product.id
                    );
               return (
                    <Card key={index}product={e}>
                        <div className="productcard-container" >
                        {productIndex == -1 ? (
                        <AiOutlineHeart className="card-actions" 
                        onClick={() => props.setWishlist(handleWishlist(e))} 
                        />)
                            :<AiFillHeart style={{color: "red"}}
                             className="card-actions" 
                             onClick={() => props.setWishlist(handleWishlist(e))} />}
                            <BsBag   className="card-actions" onClick={()=>props.setcount(Addtocart(props.cart,e))}/>
                            <BiShuffle   className="card-actions"/>
                            <AiOutlineEye   className="card-actions"/>
                        </div>
                    </Card>
                );
            })}
        </div>
        </div>
    );
}; 
 export default Features;


