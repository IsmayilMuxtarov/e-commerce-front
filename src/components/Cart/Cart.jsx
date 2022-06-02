import React, {useEffect, useState} from 'react';
import {getCartItems} from "../../api";
import {Link} from "react-router-dom";

export const Cart = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getCartItems([13, 15, 17])
            .then(res => {
                setItems(res.data)
            })

    }, [])


    return (
        <main id="content" role="main">
            {/* Content */}
            {/*Content*/}
            <div className="container content-space-1 content-space-lg-2">
                <div className="row">
                    <div className="col-lg-8 mb-7 mb-lg-0">
                        {/* Heading */}
                        <div className="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
                            <h1 className="h3 mb-0">Shopping cart</h1>
                            <span>{items.length} items</span>
                        </div>
                        {/* End Heading */}
                        {/* Form */}
                        <form>
                            {/* List Group */}
                            <ul className="list-group list-group-flush list-group-no-gutters mb-5">
                                {
                                    items?.map(({attributes, id}) => (
                                        // Item
                                        <li className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xl avatar-4x3"
                                                         src={"http://funde.fund:1339" + attributes?.images?.data[0]?.attributes?.formats?.small?.url}
                                                         alt="Image Description"/>
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row">
                                                        <div className="col-sm-7 mb-3 mb-sm-0">
                                                            <h5><Link className="text-dark"
                                                                      to={`/single-page/${id}`}>
                                                                {attributes.name}
                                                            </Link>
                                                            </h5>

                                                            <div className="d-block d-sm-none">
                                                                <h5 className="mb-1">$29.99</h5>
                                                            </div>

                                                            <div className="d-grid gap-1">
                                                                <div className="text-body">
                                                                    <span className="small">Gender:</span>
                                                                    <span className="fw-semi-bold small">Men</span>
                                                                </div>

                                                                <div className="text-body">
                                                                    <span className="small">Color:</span>
                                                                    <span className="fw-semi-bold small">Grey</span>
                                                                </div>

                                                                <div className="text-body">
                                                                    <span className="small">Size:</span>
                                                                    <span className="fw-semi-bold small">One size</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End Col */}

                                                        <div className="col-sm-3">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    {/* Select */}
                                                                    <select className="form-select form-select-sm mb-3">
                                                                        <option value="quantity1">1</option>
                                                                        <option value="quantity2">2</option>
                                                                        <option value="quantity3">3</option>
                                                                        <option value="quantity4">4</option>
                                                                        <option value="quantity5">5</option>
                                                                        <option value="quantity6">6</option>
                                                                        <option value="quantity7">7</option>
                                                                        <option value="quantity8">8</option>
                                                                        <option value="quantity9">9</option>
                                                                        <option value="quantity10">10</option>
                                                                    </select>
                                                                    {/* End Select */}
                                                                </div>

                                                                <div className="col-auto">
                                                                    <div className="d-grid gap-2">
                                                                        <a className="link-sm link-secondary small"
                                                                           href="javascript:;">
                                                                            <i className="bi-trash me-1"></i> Remove
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                {/* End Col */}
                                                            </div>
                                                            {/* End Row */}
                                                        </div>
                                                        {/* End Col */}

                                                        <div
                                                            className="col-4 col-sm-2 d-none d-sm-inline-block text-right">
                                                            <span
                                                                className="h5 d-block mb-1">{attributes.price} azn</span>
                                                        </div>
                                                        {/* End Col */}
                                                    </div>
                                                    {/* End Row */}
                                                </div>
                                            </div>
                                        </li>
                                        // End Item
                                    ))
                                }
                            </ul>
                            {/* End List Group */}

                            {/*<div className="d-sm-flex justify-content-end">*/}
                            {/*    <a className="link" href="../demo-shop/index.html">*/}
                            {/*        <i className="bi-chevron-left small ms-1"></i> Continue shopping*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </form>
                        {/* End Form */}
                    </div>
                    {/* End Col */}

                    <div className="col-lg-4">
                        <div className="ps-lg-4">
                            {/* Card */}
                            <div className="card card-sm shadow-sm mb-4">
                                <div className="card-body">
                                    <div className="border-bottom pb-4 mb-4">
                                        <h3 className="card-header-title">Order summary</h3>
                                    </div>

                                    <form>
                                        <div className="border-bottom pb-4 mb-3">
                                            <input type="text" className="form-control" name="name"
                                                   placeholder="Enter promo code" aria-label="Enter promo code"/>
                                        </div>

                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-grid gap-3">
                                                <dl className="row">
                                                    <dt className="col-sm-6">Item subtotal (2)</dt>
                                                    <dd className="col-sm-6 text-sm-end mb-0">$73.98</dd>
                                                </dl>
                                                {/* End Row */}

                                                <dl className="row">
                                                    <dt className="col-sm-6">Delivery</dt>
                                                    <dd className="col-sm-6 text-sm-end mb-0">Free</dd>
                                                </dl>
                                                {/* End Row */}
                                            </div>
                                        </div>

                                        <div className="border-bottom pb-4 mb-4">
                                            <div className="d-grid gap-3">
                                                {/* Check */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="deliveryRadioName" id="deliveryRadio1" checked/>
                                                    <label className="form-check-label text-dark"
                                                           htmlFor="deliveryRadio1">
                                                        Free - Standard delivery
                                                        <span className="d-block text-muted small">Shipment may take 5-6 business days</span>
                                                    </label>
                                                </div>
                                                {/* End Check */}

                                                {/* Check */}
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio"
                                                           name="deliveryRadioName" id="deliveryRadio2"/>
                                                    <label className="form-check-label text-dark"
                                                           htmlFor="deliveryRadio2">
                                                        $7.99 - Express delivery
                                                        <span className="d-block text-muted small">Shipment may take 2-3 business days</span>
                                                    </label>
                                                </div>
                                                {/* End Check */}
                                            </div>
                                        </div>

                                        <div className="d-grid gap-3 mb-4">
                                            <dl className="row">
                                                <dt className="col-sm-6">Estimated tax</dt>
                                                <dd className="col-sm-6 text-sm-end mb-0">$0.00</dd>
                                            </dl>
                                            {/* End Row */}

                                            <dl className="row">
                                                <dt className="col-sm-6">Total</dt>
                                                <dd className="col-sm-6 text-sm-end mb-0">$73.98</dd>
                                            </dl>
                                            {/* End Row */}
                                        </div>

                                        <div className="d-grid">
                                            <a className="btn btn-primary btn-lg"
                                               href="../demo-shop/checkout.html">Checkout</a>
                                        </div>
                                    </form>
                                </div>
                                {/* End Card */}
                            </div>
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Content */}
        </main>
    );
};