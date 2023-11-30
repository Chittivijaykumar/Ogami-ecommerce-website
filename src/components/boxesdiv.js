import "../styles/boxesdiv.css";
const Boxesdiv = () => {
    return(
        <div className="boxesdiv">
            <div className="box1div">
                <div className="divboximg"><img className="boximg" src="https://ogami-react.vercel.app/assets/images/sections/banner/one/1.png"></img></div>
                <div className="boxdetails">
                    <p className="boxheading">Strawberry Jam <br></br> 100% Natural <br></br> Fruit Juice <b> Sale Off <br></br>  65%</b> </p>
                    <button className="boxbutton">Show now</button>
                </div>
            </div>
            <div className="box2div">
                <div className="divboximg"><img className="boximg" src="https://ogami-react.vercel.app/assets/images/sections/banner/one/2.png"></img></div>
                <div className="boxdetails">
                <p className="boxheading">Strawberry Jam <br></br> 100% Natural <br></br> Fruit Juice  <b>Sale Off  <br></br> 65%</b> </p>
                    <button className="boxbutton">Show now</button>
                </div>
            </div>
            
        </div>
    )
}

export default Boxesdiv;

