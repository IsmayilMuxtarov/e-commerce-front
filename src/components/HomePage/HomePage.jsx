import React, {useEffect, useState} from 'react';
import {getCategories, getFilterData} from "../../api";
import {Link, NavLink} from "react-router-dom";

export const HomePage = () => {

    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        getCategories(3).then(res => {
            setCategories(res.data)
            console.log(res.data)
        })

        getFilterData([], []).then(res => {
            setItems(res.data)
        })

    }, [])


    return (
        <main id="content" role="main">
            {/*Alert*/}
            <div className="alert alert-primary text-center rounded-0 mb-0" role="alert">
                {/*<span className="fw-semi-bold">30% OFF</span> orders above $50 - Use code FRONT30OFF at checkout.*/}
            </div>
            {/* End Alert */}

            {/* Slider */}
            <div className="bg-img-start">
                <div className="container content-space-2 content-space-lg-3">
                    <div className="w-md-65 w-lg-35">
                        <div className="mb-4">
                            <h1>Никогда не поздно</h1>
                            <p className="text-dark">Покупать правильные товары.
                                Магазин полезной канцелярии.
                                Совершить покупку - стало легко и просто</p>
                        </div>
                        <Link className="btn btn-primary btn-transition rounded-pill" to='/listings'>Купить</Link>
                    </div>
                </div>
            </div>
            {/* End Slider */}

            {/* Card Grid */}
            <div className="container content-space-2 content-space-lg-3">
                {/* Heading */}
                <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                    <h2>Лучший способ делать покупки с Kancelario</h2>
                </div>
                {/* End Heading */}

                {/*The better way*/}
                <div className="row">
                    {/* Card */}
                    {
                        categories?.slice(0, 3).map(({attributes}) => (
                            <div className="col-sm-6 col-md-4 mb-4">
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
                                            {<img className="img-fluid"
                                                  src={"http://funde.fund:1339" + attributes?.items?.data[2]?.attributes?.images?.data[0]?.attributes?.formats?.small?.url}

                                                  alt="Image Description"/>}
                                        </div>
                                    </div>
                                    {/*style={{maxHeight: "500px"}}*/}

                                    <div className="card-footer text-center">
                                        <h3 className="card-title">{attributes.name}</h3>
                                        <p className="card-text text-muted small">Starting from $29.99</p>
                                        <a className="btn btn-outline-primary btn-sm btn-transition rounded-pill px-6"
                                           href="#">View
                                            all</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* End Row */}
            </div>

            {/* What's trending */}
            <div className="container content-space-b-2 content-space-b-lg-3">
                {/* Title */}
                <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                    <h2>Популярные</h2>
                </div>
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {
                        console.log(items)
                    }
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
                                            <a className="link-sm link-secondary">
                                                {attributes?.category?.data?.attributes?.name}
                                            </a>
                                        </div>
                                        <Link className="text-body"
                                              to={`/single-page/${id}`}>
                                            {attributes.name}
                                        </Link>
                                        <p className="card-text text-dark">{attributes.price} azn</p>
                                    </div>

                                    <div className="card-footer pt-0">
                                        <button type="button"
                                                className="btn btn-outline-primary btn-sm rounded-pill">Add to
                                            cart
                                        </button>
                                    </div>
                                </div>
                                {/* End Card */}
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Wear your pride */}
            <div className="bg-img-center">
                <div className="container content-space-2 content-space-lg-3">
                    <div className="w-md-65 w-lg-35">
                        <div className="mb-4">
                            <h2 className="h1 text-white">Начните покупать товары.
                            </h2>
                            <p className="text-white">Воспользуйтесь нашими специальными скидками.</p>
                        </div>
                        <Link className="btn btn-light btn-transition rounded-pill" to='/listings'>Купить</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};