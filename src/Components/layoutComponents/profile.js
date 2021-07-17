import React from "react"
import NavBar from "./navBar";
import VerticalBar from "./sideBar";
import Footer from "./footer";


const ProfilePage = () => {

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header">
                                        <h1 className="text-center font-weight-light my-4">
                                            <i className="fa fa-user" aria-hidden="true"/>
                                        </h1>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text"
                                                               placeholder="Enter your first name"/>
                                                        <label htmlFor="inputFirstName">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text"
                                                               placeholder="Enter your last name"/>
                                                        <label htmlFor="inputLastName">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email"
                                                       placeholder="name@example.com"/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="paymentMethod" type="number"
                                                       placeholder="card number"/>
                                                <label htmlFor="paymentMethod">Payment method</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="shippingAdress" type="text"
                                                       placeholder="shipping address"/>
                                                <label htmlFor="paymentMethod">Shipping Address</label>
                                            </div>

                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" id="inputPassword"
                                                       type="password" placeholder="Create a password"/>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>

                                            <div className="mt-4 mb-0">
                                                <div className="d-grid">
                                                    <a
                                                        className="btn btn-success btn-block"
                                                        href="#"

                                                    >
                                                       Update Info
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

const Profile = () => {

    return (
        <div>
            <NavBar />
            <div id="layoutSidenav">
                <VerticalBar />
                <div id="layoutSidenav_content">
                 <ProfilePage/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Profile