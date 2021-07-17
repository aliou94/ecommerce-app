import React from "react"
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import profile from "../../images/IMG_0369.JPG"
const NavBar = ()=>{

    return(
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/*Navbar Brand*/}

            <p className="navbar-brand ps-3" href="">E-commerce App</p>
            <button
                className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                id="sidebarToggle" href="#!"
                onClick={()=>console.log("hello")}
            ><i
    className="fa fa-bars"/></button>
            {/*Sidebar Toggle*/}


            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"/>


            {/*Navbar-*/}
            <ul className="navbar-dark ms-auto ms-md-0 me-3 me-lg-4">

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <i className="fa fa-user fa-fw"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <a className="nav-link" href="/e-commerce/profile"> Profile</a>
                        </DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>
                           <a className="nav-link" href="/e-commerce/login/">
                               logout
                           </a>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ul>
        </nav>
    )
}

export default  NavBar