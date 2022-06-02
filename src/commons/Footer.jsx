import React from 'react';
import {Svg} from "./Svg";


const Footer = () => {
    return (

        <footer className="border-top">
            <div className="container">
                {/*privacy policy*/}
                {/*<div className="row align-items-sm-center content-space-1">*/}
                {/*    <div className="col-sm">*/}
                {/*    </div>*/}
                {/*    <div className="col-sm-auto">*/}
                {/*        /!* List  *!/*/}
                {/*        <ul className="list-inline list-separator">*/}
                {/*            <li className="list-inline-item">*/}
                {/*                <a className="link-sm link-secondary"*/}
                {/*                   href="../page-terms.html">License</a>*/}
                {/*            </li>*/}
                {/*            <li className="list-inline-item">*/}
                {/*                <a className="link-sm link-secondary" href="../page-careers.html">Privacy Policy</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        /!* End List  *!/*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="row justify-content-lg-between content-space-t-2 content-space-b-lg-1">
                    <div className="col-lg-3 mb-5">
                        <div className="d-flex align-items-start flex-column h-100">
                            {/* Logo  */}
                            <a className="w-100 mb-3 mb-lg-auto" href="../demo-shop/index.html" aria-label="Front">
                                <Svg type='logo'/>
                            </a>
                            {/* End Logo  */}
                        </div>
                    </div>
                    <div className="w-md-75 w-lg-50 text-center mx-md-auto">
                        <div className="row justify-content-lg-between">
                            <form>
                                {/* Input Card */}
                                <div className="input-card input-card-pill input-card-sm border mb-3">
                                    <div className="input-card-form">
                                        <label htmlFor="subscribeForm" className="form-label visually-hidden">Enter
                                            email</label>
                                        <input type="text" className="form-control form-control-lg"
                                               id="subscribeForm" placeholder="Enter email"
                                               aria-label="Enter email"/>
                                    </div>
                                    <button type="button"
                                            className="btn btn-primary btn-lg rounded-pill">Subscribe
                                    </button>
                                </div>
                                {/* End Input Card */}
                            </form>
                        </div>
                    </div>

                </div>

                <hr className="my-0"/>

                <div className="row align-items-sm-center content-space-1">
                    <div className="col-sm mb-4 mb-sm-0">
                        {/* Socials  */}
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                    <i className="bi-facebook"/>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                    <i className="bi-google"/>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                    <i className="bi-twitter"/>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                                    <i className="bi-github"/>
                                </a>
                            </li>
                        </ul>
                        {/* End Socials  */}
                    </div>

                    <div className="col-sm-auto">
                        {/* List  */}
                        <ul className="list-inline list-separator">
                            <li className="list-inline-item">
                                <a className="link-sm link-secondary"
                                   href="#">xxxx@gmail.com</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="link-sm link-secondary"
                                   href="#">+994 XXX XX XX</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="link-sm link-secondary" href="#">Azerbaijan,
                                    Baku</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="link-sm link-secondary" href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="link-sm link-secondary" href="#">License</a>
                            </li>
                        </ul>
                        {/* End List  */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;