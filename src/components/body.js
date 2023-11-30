import "../styles/body.css";

const Body = () => {
    return(
        <div className="body_container">
            <div className="section3">
                  <div className="s3d1">
                    <div className="s3d1d1">Fruit Fresh</div>
                    <div className="s3d1d2">Orange Lemon</div>
                    <div className="s3d1d3"><span className="dolar">$14.00</span>/pakage</div>
                    <div className="s3d1d4"><button type="button" className="btn1">Shop Now</button></div>
                  </div>
                  <div className="s3d2"><img className="img3" src="https://ogami-react.vercel.app/assets/images/hero-slider/one/1.png"></img></div>
            </div>
            <div className="imggrid">
                <div className="griddiv"><img className="img4" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/1.png"></img></div>
                <div className="griddiv"><img className="img4" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/2.png"></img></div>
                 <div className="griddiv"><img className="img4" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/3.png"></img></div>
            </div>


        </div>
        
    )
}




export default Body;
