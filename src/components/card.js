import React from "react";
import "../styles/card.css"
import { Link } from "react-router-dom";

export default function Card(props){
    return (
        <div className="card-container" >
            <Link to={"/"+props.product.slug}>
            <div className="card-list" >
             <img className="card-images"  src={"https://ogami-react.vercel.app/"+props.product.coverImage}/>
                <p className="card-category" >{props.product.category}</p>
                <p className="card-names">{props.product.name}</p>
                <p className="card-price">${props.product.price.toFixed(2)}</p>
            </div>
            </Link>
            {props.children}
         </div>
 )
}