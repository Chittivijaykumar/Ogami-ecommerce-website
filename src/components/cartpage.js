import "../styles/cartpage.css";
import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import { AiTwotoneHome } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { Addtocart, deleteCart, deleteProduct, removefromCart } from "../utils/cart";
import { ogamiReactBaseUrl } from "../utils/api";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";


export default function Cartpage(props) {
    return (
        <div className="cartpage_section">
            <Header />
            <Navbar />
            <div className="cartpage-containermain" >
                <div className="cartpage_links">
                    <Link to={"/"}><AiTwotoneHome />Home</Link>
                    <Link to={"/"}>Shop</Link>
                    <p>Shopping cart</p>
                </div>
                <div className="cartpage-container">
                    <div class="arrow1">shipping cart  <p className="para" >01</p></div>
                    <div class="arrow2"> checkout <p className="para" >02</p> </div>
                    <div class="arrow3"> order completed <p className="para" >03</p></div>
                </div>
                <div style={{ padding: "1rem 10rem" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <p>IMAGE</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>PRODUCT NAME</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>PRICE</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>QUANTITY</p>
                        </Grid>
                        <Grid item xs={2}>
                            <p>TOTAL</p>
                        </Grid>
                        <Grid item xs={1} onClick={(e) => props.setCart(deleteCart())}>
                            <button><AiFillDelete /></button>
                        </Grid>
                    </Grid>
                    {/*  */}
                    {props?.cart?.products?.map((e, index) => {
                        return (
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={index}>
                                <Grid item xs={3}>
                                    <img src={ogamiReactBaseUrl + "" + e.images[0]} />
                                </Grid>
                                <Grid item xs={2}>
                                    <p>{e.name}</p>
                                </Grid>
                                <Grid item xs={2}>
                                    {e?.discount && <h4>{e.price - e.discount}</h4>}
                                    {!e?.discount && <h4>{e.price}</h4>}
                                </Grid>
                                <Grid item xs={2}>
                                    {e.productQty}
                                    <div>
                                        <span style={{ padding: "0.3rem", border: "1px solid #000" }}
                                         onClick={() => props.setCart(removefromCart(props.cart,e ))} >-</span>
                                        <span style={{ padding: "0.3rem", border: "1px solid #000" }}
                                            onClick={() => props.setCart(Addtocart(props.cart, e))} >+</span>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    {e?.discount && (
                                        <p>
                                            {((e.price - e.discount) * e.productQty).toFixed(2)}
                                        </p>
                                    )}
                                    {!e?.discount && <p> {((e.price) * e.productQty).toFixed(2)}</p>}
                                </Grid>
                                <Grid item xs={1}  onClick={() => props.setCart(deleteProduct(props.cart, e))}>
                                    <button><AiFillDelete /></button> </Grid>
                            </Grid>

                        )
                    })}
                    {props?.cart?.totalPrice.toFixed(2)}
                  </div>


            </div>
        </div>
    )
}