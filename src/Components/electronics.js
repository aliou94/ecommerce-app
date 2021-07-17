import React, {useState} from "react"
import VerticalBar from "./layoutComponents/sideBar";
import NavBar from "./layoutComponents/navBar";
import Footer from "./layoutComponents/footer";
import airPods from "../images/airPods.jpg";
import iphone from "../images/iphone.jpg";
import appleWatch from "../images/appleWatch.jpg";
import {Button} from "reactstrap";
import { FadeTransform,Fade} from 'react-animation-components';




const electronics = [

    {

        "product": {
            name : "iphone 12 pro max",
            review: "Best phone on earth",
            icon : [<i className="fa fa-star"/>, <i className="fa fa-star"/>, <i className="fa fa-star"/>]

        },
        "price": "$1200",
         "img":iphone

    },

    {

        "product": {
            name : "Apple watch",
            review: "Good quality , highly recommended",
            icon : [<i className="fa fa-star"/>, <i className="fa fa-star"/>, <i className="fa fa-star"/>]

        },
        "price": "$600",
         "img": appleWatch
    },

    {

        "product": {
            name : "Air pods",
            review: "Great sound quality",
            icon : [<i className="fa fa-star"/>, <i className="fa fa-star"/>, <i className="fa fa-star"/>]

        },
        "price": "$200",
        "img": airPods

    }


]

export const ElectronicProduct = () =>{
    const [flag, setFlag] = useState(false)
    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
        <React.Fragment>
            <main>

                <div className="container-fluid px-4">
                    <h1 className="mt-4">Electronics</h1>
                    <br/>
                    <div className="row">
                        {electronics.map((product)=>{
                            return(
                                <Fade in key={product.product.name} className=" col-lg-4 col-md-4 col-sm-12 item" >
                                <div key={product.product.price} className="col-lg-4 col-md-4 col-sm-12 item ml-auto mr-auto" >
                                    <img  src={product.img}  width="200px" height="200px" alt={"item image"}/>
                                    <div className="des">
                                        {product.product.name}
                                    </div>

                                    <span className="text-muted"><i>price : {product.price}</i></span>
                                    <br/>
                                    <span className="text-muted"><i>Ratings:
                                        {product.product.icon}
                                    </i>
                                    </span>
                                    <br/>
                                    <span><i>Review: {product.product.review}</i></span>
                                    <br/>
                                    <br/>
                                    <Button
                                        color="success"
                                        onClick={()=>{
                                            setFlag(!product.isSelected)
                                            product.isSelected=!product.isSelected
                                            // return  setFlag(!product.isSelected)
                                            // console.log(product.isSelected)
                                            // // product.isSelected ? setFlag(!product.isSelected): setFlag(!product.isSelected)

                                        }}
                                    > <i>{product.isSelected === true ? "Remove from Cart" : "Add to Cart"}</i></Button>
                                </div>
                                </Fade>
                            )
                        })}

                    </div>
                    <br/>
                    <br/>
                </div>
            </main>

        </React.Fragment>
        </FadeTransform>
    )
}






const Electronics = () => {

    return (
        <div>
            <NavBar />
            <div id="layoutSidenav">
                <VerticalBar />
                <div id="layoutSidenav_content" className="team">
                <ElectronicProduct />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}


export default Electronics