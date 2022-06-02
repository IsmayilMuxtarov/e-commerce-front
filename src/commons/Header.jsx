import React from 'react';
import {Svg} from "./Svg";
import '../styles/docs.min.css'
import '../styles/snippets.min.css'
import '../styles/theme.min.css'
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-end navbar-light">
            <div className="container">
                <nav className="js-mega-menu navbar-nav-wrap">
                    {/* Default Logo  */}
                    <Link className="navbar-brand" to="/" aria-label="Front">
                        <Svg type='logo'/>
                    </Link>
                    {/* End Default Logo  */}

                    {/* Toggler  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-default"><i className="bi-list"/></span>
                        <span className="navbar-toggler-toggled"><i className="bi-x"/></span>
                    </button>
                    {/* End Toggler  */}

                    {/* Collapse  */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/categories">Categories</Link>
                            </li>

                            {/*<li className="nav-item">*/}
                            {/*    <Link className="nav-link " to="/listings">Listings</Link>*/}
                            {/*</li>*/}

                            <li className="nav-item">
                                <Link className="nav-link " to="/about-us">About Us</Link>
                            </li>

                            <li className="nav-item">
                                {/* Shopping Checkout  */}
                                <Link to='/cart'>
                                    <button type="button" className="btn btn-ghost-secondary btn-sm btn-icon"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasNavbarEmptyShoppingCart"
                                            aria-controls="offcanvasNavbarEmptyShoppingCart">
                                        <i className="bi-basket"/>
                                    </button>
                                </Link>
                                {/* End Shopping Checkout   */}
                            </li>
                        </ul>
                    </div>
                    {/* End Collapse  */}
                </nav>
            </div>
        </header>
    );
};

export default Footer;