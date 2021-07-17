import React from "react"
import {ElectronicProduct} from "../electronics";
import {BooksProduct}from "../books";
import NavBar from "./navBar";
import VerticalBar from "./sideBar";
import Footer from "./footer";
import {CSSTransition } from 'react-transition-group';



const MainContent = () => {
    let style = { textAlign: 'center'}
    return (
        // <CSSTransition
        //     transitionName="page"
        // >
            <div id="layoutSidenav_content">
                <h1 className="mt-4" style={style}>Products</h1>
                <ElectronicProduct/>
                <BooksProduct/>
                <Footer/>
            </div>
        // </CSSTransition>
    )
}


const Dashboard = () => {

    return (
        <div>

            <NavBar/>
            <div id="layoutSidenav">
                <VerticalBar/>
                <MainContent/>
            </div>
        </div>
    )
}

export default Dashboard