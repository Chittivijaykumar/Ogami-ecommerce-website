import Card from "./card";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/bestseller.css";
const Bestseller=(props)=>{
    console.log(props);
    return (
        <div className="prducts_division">
        <div className="bestseller_productlist">
            <div className="bestseller_header">
            <h1 className="bestseller_head1">Best Seller</h1>
            <div className="bestseller_producttags">
                <span className="listtagname">All</span>
                <span className="listtagname">Bread</span>
                <span className="listtagname">Fastfood</span>
                <span className="listtagname">Fresh Meat</span>
                <span className="listtagname">Ocean Foods</span>
                <span className="listtagname">Oranges</span>
            </div>
        </div>            
        <div className="bestproducts-list" >
            {props?.data?.slice(0,6).map((e,index)=>{
                return (
                                             
                    <Card key={index}product={e}>
                        <div className="productcard-container" >
                            <AiOutlineHeart   className="card-actions"/>
                            <BsBag   className="card-actions"/>
                            <BiShuffle   className="card-actions"/>
                            <AiOutlineEye   className="card-actions"/>
                        </div>
                    </Card>
                );
            })}
        </div>
        </div>
        {/* featured products */}
        <div className="bestseller_productlist">
            <div className="bestseller_header">
            <h1 className="bestseller_head1">Featured products</h1>
            <div className="bestseller_producttags">
                <span className="listtagname">All</span>
                <span className="listtagname">Bread</span>
                <span className="listtagname">Fastfood</span>
                <span className="listtagname">Fresh Meat</span>
                <span className="listtagname">Ocean Foods</span>
                <span className="listtagname">Oranges</span>
            </div>
        </div>            
        <div className="bestproducts-list" >
            {props?.data?.slice(0,6).map((e,index)=>{
                return (
                                             
                    <Card key={index}product={e}>
                        <div className="productcard-container" >
                            <AiOutlineHeart   className="card-actions"/>
                            <BsBag   className="card-actions"/>
                            <BiShuffle   className="card-actions"/>
                            <AiOutlineEye   className="card-actions"/>
                        </div>
                    </Card>
                );
            })}
        </div>
        </div>
    </div>
    );
};
 export default Bestseller;