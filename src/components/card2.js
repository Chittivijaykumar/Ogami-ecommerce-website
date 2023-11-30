import React from "react";
import "../styles/card2.css"

export default function Cards(props){
    return (
        <div className="card2-container" >
          <div className="card2-list">
             <div className="card2-imgdiv">
              <img className="card2-images"  src={"https://ogami-react.vercel.app/"+props.product.coverImage}/>
             </div>
             <div className="card2-details">
             <p className="card2-names">{props.product.name}</p>
             <p>${props.product.price.toFixed(2)}</p>
             </div>
             {props.children}
         </div>
         </div>
 )
}