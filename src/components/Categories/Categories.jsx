import React, {useEffect, useState} from 'react';
import {getCategories, getFilterData} from "../../api";
import {Link} from "react-router-dom";

export const Categories = () => {

    const [categories, setCategories] = useState([])
    const [fourCategories, setFourCategories] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data)
            console.log(res.data);
        })

        getCategories(4).then(res => {
            setFourCategories(res.data)
            console.log(res.data);
        })

        getFilterData([], []).then(res => {
            setItems(res.data)
            console.log(items);
        })

    }, [])

    return (
        <main id="content" role="main">
            {/* Breadcrumb */}
            {/*Breadcrumb*/}
            <div className="bg-light">
                <div className="container py-4">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">Shop</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Categories</li>
                        </ol>
                    </nav>
                    {/* End Breadcrumb */}
                </div>
            </div>
            {/* End Breadcrumb */}

            {/* Categories Section */}
            <div className="container content-space-t-1 content-space-t-md-2 content-space-b-2">
                <div className="row">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                        {/* Navbar */}
                        <div className="navbar-expand-lg">
                            {/* Navbar Toggle */}
                            <div className="d-grid">
                                <button type="button" className="navbar-toggler btn btn-white mb-3"
                                        data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu"
                                        aria-label="Toggle navigation" aria-expanded="false"
                                        aria-controls="navbarVerticalNavMenu">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="text-dark">Menu</span>

                  <span className="navbar-toggler-default">
                    <i className="bi-list"/>
                  </span>

                  <span className="navbar-toggler-toggled">
                    <i className="bi-x"/>
                  </span>
                </span>
                                </button>
                            </div>
                            {/* End Navbar Toggle */}

                            {/* Navbar Collapse */}
                            <div id="navbarVerticalNavMenu" className="collapse navbar-collapse">
                                <div id="shopNavCategories" className="nav nav-pills nav-vertical">

                                    {
                                        categories?.map(({attributes}) => {
                                            if (attributes?.subcategories?.data.length !== 0) {
                                                return (
                                                    <>
                                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                                           data-bs-toggle="collapse" data-bs-target="#shopCategoriesTwo"
                                                           aria-expanded="true" aria-controls="shopCategoriesTwo">
                                                            {attributes?.name}
                                                        </a>
                                                        <div id="shopCategoriesTwo"
                                                             className="nav-collapse collapse show"
                                                             data-bs-parent="#shopNavCategories">
                                                            <div id="shopNavCategoriesTwo">
                                                                {
                                                                    attributes?.subcategories?.data.map((subcategory) => (
                                                                        <Link className="nav-link"
                                                                              to={`/listings/${subcategory.attributes.Name}`}
                                                                        >{subcategory.attributes.Name}
                                                                        </Link>
                                                                    ))
                                                                }
                                                                {/*<a className="nav-link dropdown-toggle collapsed"*/}
                                                                {/*   href="#" role="button"*/}
                                                                {/*   data-bs-toggle="collapse"*/}
                                                                {/*   data-bs-target="#shopCategoriesTwoSubOne"*/}
                                                                {/*   aria-expanded="true"*/}
                                                                {/*   aria-controls="shopCategoriesTwoSubOne">*/}
                                                                {/*    TV &amp; video devices*/}
                                                                {/*</a>*/}

                                                                {/*<div id="shopCategoriesTwoSubOne"*/}
                                                                {/*     className="nav-collapse collapse show"*/}
                                                                {/*     data-bs-parent="#shopNavCategoriesTwo">*/}
                                                                {/*    <a className="nav-link active"*/}
                                                                {/*       href="#">Accessories</a>*/}
                                                                {/*    <a className="nav-link" href="#">Kitchen</a>*/}
                                                                {/*    <a className="nav-link" href="#">Living*/}
                                                                {/*        room</a>*/}
                                                                {/*</div>*/}
                                                                {/* End Collapse */}

                                                                {/*<a className="nav-link"*/}
                                                                {/*   href="#">Cooling &amp; air treatment</a>*/}
                                                                {/*<a className="nav-link"*/}
                                                                {/*   href="#">Vacuums &amp; floor care</a>*/}
                                                            </div>
                                                        </div>
                                                    </>

                                                )
                                            } else {
                                                return (
                                                    <a className="nav-link" href="#">
                                                        <i className="bi-shop nav-icon"/> Clothing
                                                    </a>
                                                )
                                            }
                                        })

                                    }
                                </div>
                            </div>
                            {/* End Navbar Collapse */}
                        </div>
                        {/* End Navbar */}
                    </div>
                    {/* End Col */}

                    <div className="col-lg-9">

                        {/* Banner */}
                        <div className="bg-img-start rounded-2 p-5 mb-5">
                            <div className="row align-items-md-center">
                                <div className="col-sm mb-3 mb-md-0">
                                    {/*<h1 className="h4 mb-0">Save up to 30% with orders above $50</h1>*/}
                                </div>
                                {/* End Col */}

                                <div className="col-sm-auto">
                                    <a className="btn btn-primary btn-sm btn-transition rounded-pill"
                                       href="#">Купить</a>
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Row */}
                        </div>
                        {/* End Banner */}

                        {/*------------TWO TOP CATEGORIES-----------*/}
                        <div className="row">
                            {
                                fourCategories?.slice(0, 2).map(({attributes}) => (
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-bordered shadow-none overflow-hidden">
                                            <div className="card-body d-flex align-items-center border-bottom p-0">
                                                <div className="w-65 border-end">
                                                    <img className="img-fluid"
                                                         src={"http://funde.fund:1339" + attributes?.items?.data[0]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                         alt="Image Description"/>
                                                </div>
                                                <div className="w-35">
                                                    <div className="border-bottom">
                                                        <img className="img-fluid"
                                                             src={"http://funde.fund:1339" + attributes?.items?.data[1]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                             alt="Image Description"/>
                                                    </div>
                                                    <img className="img-fluid"
                                                         src={"http://funde.fund:1339" + attributes?.items?.data[2]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                         alt="Image Description"/>
                                                </div>
                                            </div>

                                            <div className="card-footer text-center">
                                                <h3 className="card-title">{attributes.name}</h3>
                                                <p className="card-text text-muted small">Starting from $29.99</p>
                                                <a className="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6"
                                                   href="#">View all</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* End Col */}
                        </div>

                        {/*-----ITEMS------*/}
                        {/* What's trending */}
                        <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {
                                items?.slice(4, 8).map(({attributes, id}) => (
                                    <div className="col mb-4">
                                        {/* Card */}
                                        <div className="card card-bordered shadow-none text-center h-100">
                                            <div className="card-pinned">
                                                <img className="card-img-top"
                                                     src={"http://funde.fund:1339" + attributes.images.data[0].attributes?.formats?.small?.url}
                                                     alt="Image Description"/>
                                            </div>

                                            <div className="card-body">
                                                <div className="mb-1">
                                                    <a className="link-sm link-secondary">{attributes?.category?.data?.attributes?.name}</a>
                                                </div>
                                                <Link className="text-body"
                                                      to={`/single-page/${id}`}>
                                                    {attributes.name}
                                                </Link>
                                                <p className="card-text text-dark">{attributes.price} azn</p>
                                            </div>

                                            <div className="card-footer pt-0">
                                                <button type="button"
                                                        className="btn btn-outline-primary btn-sm rounded-pill">Add
                                                    to
                                                    cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* End Card */}
                                    </div>
                                ))
                            }
                        </div>

                        {/*------------TWO END CATEGORIES-----------*/}
                        <div className="row">
                            {
                                fourCategories?.slice(2, 4).map(({attributes}) => (
                                    <div className="col-sm-6 mb-4">
                                        <div className="card card-bordered shadow-none overflow-hidden">
                                            <div className="card-body d-flex align-items-center border-bottom p-0">
                                                <div className="w-65 border-end">
                                                    <img className="img-fluid"
                                                         src={"http://funde.fund:1339" + attributes?.items?.data[0]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                         alt="Image Description"/>
                                                </div>
                                                <div className="w-35">
                                                    <div className="border-bottom">
                                                        <img className="img-fluid"
                                                             src={"http://funde.fund:1339" + attributes?.items?.data[1]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                             alt="Image Description"/>
                                                    </div>
                                                    <img className="img-fluid"
                                                         src={"http://funde.fund:1339" + attributes?.items?.data[2]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                         alt="Image Description"/>
                                                </div>
                                            </div>

                                            <div className="card-footer text-center">
                                                <h3 className="card-title">{attributes.name}</h3>
                                                <p className="card-text text-muted small">Starting from $29.99</p>
                                                <a className="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6"
                                                   href="#">View all</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* End Col */}
                        </div>

                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Categories Section */}

            {/* Wear your pride */}
            <div className="bg-img-center">
                <div className="container content-space-2 content-space-lg-3">
                    <div className="w-md-65 w-lg-35">
                        <div className="mb-4">
                            <h2 className="h1 text-white">Wear your pride</h2>
                            <p className="text-white">Outdo the sun and refresh your workout with greys, whites and
                                dark
                                brights.</p>
                        </div>
                        <a className="btn btn-light btn-transition rounded-pill" href="#">Shop the collection</a>
                    </div>
                </div>
            </div>
        </main>
    );
};