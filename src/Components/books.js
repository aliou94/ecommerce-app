import React, {useEffect, useState} from "react"
import VerticalBar from "./layoutComponents/sideBar";
import NavBar from "./layoutComponents/navBar";
import Footer from "./layoutComponents/footer";
import bookOne from "../images/bookOne.jpg";
import bookTwo from "../images/bookTwo.jpg";
import bookThree  from "../images/book3.jpg";
import { FadeTransform,Fade} from 'react-animation-components';
import {Button} from "reactstrap";




const books = [

    {

        "product": {
            name : "Coding",
            subject: "Interview prep",
            icon : [<i className="fa fa-star"/>,<i className="fa fa-star"/>,<i className="fa fa-star"/>]

        },
        "price": "$20",
        "img":bookOne,
        "isSelected":false

    },

    {

        "product": {
            name : "My Hero",
            subject: "Mangas",
            icon : [<i className="fa fa-star"/>,<i className="fa fa-star"/>]


        },
        "price": "$15",
        "img":bookTwo,
        "isSelected":false
    },

    {

        "product": {
            name : "Bitcoin",
            subject: "Finance",
            icon :[ <i className="fa fa-star"/>,  <i className="fa fa-star"/>, <i className="fa fa-star"/>]

        },
        "price": "$20",
        "img": bookThree,
        "isSelected":false

    }


]

export const BooksProduct= () =>{

    const [flag, setFlag] = useState(false)

    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
        <>
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Books</h1>
                    <br/>
                    <div className="row">
                        {books.map((product)=>{
                            return(
                                <Fade in key={product.product.name} className="col-lg-4 col-md-4 col-sm-12 item" >
                                <div className="col-lg-4 col-md-4 col-sm-12 item ml-auto mr-auto" key={product.product.name}>
                                    <img  src={product.img}  width="200px" height="200px" alt={"item image"} />
                                    <div className="des">
                                        {product.product.name}
                                    </div>
                                    <span className="text-muted"><i>price : {product.price}</i></span>
                                    <br/>
                                    <span className="text-muted"><i>Review:
                                        {product.product.icon}
                                    </i>
                                    </span>
                                    <br/>
                                    <span><i>Ratings: {product.product.subject}</i></span>
                                    <br/>
                                    <br/>
                                    <Button
                                        color="success"
                                        onClick={()=>{
                                            setFlag(!product.isSelected)
                                              product.isSelected=!product.isSelected
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
        </>
        </FadeTransform>
    )
}




const Books = () => {

    return (
        <div>
            <NavBar />
            <div id="layoutSidenav">
                <VerticalBar />
                <div id="layoutSidenav_content" className="team">
                <BooksProduct/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}


export default Books