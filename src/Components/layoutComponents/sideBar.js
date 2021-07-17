import React from "react"


const VerticalBar = () => {


    return (

        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        < a className="nav-link" href="/e-commerce/dashboard">
                            Dashboard
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fa fa-tachometer" aria-hidden="true"/>
                            </div>

                        </a>

                        <div className="sb-sidenav-menu-heading">Products</div>

                        <a className="nav-link" href="/e-commerce/electronics"
                           aria-expanded="false">
                            {/*<div className="sb-nav-link-icon"><i className="fa fa-columns"/></div>*/}
                            Electronics
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fa fa-mobile"
                                  aria-hidden="true"/>
                            </div>
                        </a>

                        < a className="nav-link" href="/e-commerce/books"
                            data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            {/*<div className="sb-nav-link-icon"><i className="fas fa-book-open"/></div>*/}
                            Books
                            <div className="sb-sidenav-collapse-arrow"><i className="fa fa-book" aria-hidden="true"/>
                            </div>
                        </a>

                        <div className="sb-sidenav-menu-heading">Cart</div>
                        <a className="nav-link" href="/e-commerce/dashboard/checkout">
                            CheckOut
                            <div className="sb-sidenav-collapse-arrow">
                                <i class="fa fa-cart-plus" aria-hidden="true"/>
                            </div>

                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}


export default VerticalBar