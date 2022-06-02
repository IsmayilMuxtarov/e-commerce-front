import React, {useEffect, useState} from 'react';
import {getFilterData, getItemInfo} from "../../api";
import {useParams} from "react-router-dom";

export const SingleProduct = () => {

    const [items, setItems] = useState([])
    const [itemInfo, setItemInfo] = useState({})
    const {itemId} = useParams()


    useEffect(() => {
        getFilterData([], []).then(res => {
            setItems(res.data)
        })

        getItemInfo(itemId)
            .then(res => {
                setItemInfo(res.data)
                console.log(res.data)
            })
    }, [])


    return (
        <main id="content" role="main">
            {/*Hero*/}
            <div className="container content-space-t-1 content-space-t-sm-2">
                <div className="row">
                    <div className="col-md-7 mb-7 mb-md-0">
                        <div className="pe-md-4">
                            <div className="card-pinned">
                                {/* Swiper Main Slider*/}
                                <div className="js-swiper-shop-product swiper">
                                    <div className="swiper-wrapper">
                                        {/* Slide*/}
                                        <div className="swiper-slide">
                                            <div className="card card-bordered shadow-none">
                                                <img className="card-img"
                                                     src={"http://funde.fund:1339" + itemInfo.attributes?.images?.data[0]?.attributes?.formats?.small?.url}/>
                                            </div>
                                        </div>
                                        {/* End Slide*/}
                                    </div>
                                </div>
                                {/* End Swiper Main Slider*/}
                            </div>
                        </div>
                    </div>
                    {/* End Col*/}

                    <div className="col-md-5">
                        {/* Heading*/}
                        <div className="mb-5">
                            <h1 className="h2">{itemInfo?.attributes?.name}</h1>
                            <p>{itemInfo?.attributes?.Short_description}</p>
                        </div>
                        {/* End Heading*/}

                        {/* Price*/}
                        <div className="mb-5">
                            <span className="d-block mb-2">Total price:</span>
                            <div className="d-flex align-items-center">
                                <h3 className="mb-0">{itemInfo?.attributes?.price} azn</h3>
                                {itemInfo?.attributes?.old_price && <span className="ms-2"><del>{itemInfo?.attributes?.old_price} azn</del></span>}
                            </div>
                        </div>
                        {/* End Price*/}

                        {/* Quantity*/}
                        <div className="quantity-counter mb-3">
                            <div className="js-quantity-counter row align-items-center">
                                <div className="col">
                                    <span className="d-block small">Select quantity</span>
                                    <input className="js-result form-control form-control-quantity-counter" type="text"
                                           value="1"/>
                                </div>
                                {/* End Col*/}

                                <div className="col-auto">
                                    <a className="js-minus btn btn-outline-secondary btn-xs btn-icon rounded-circle"
                                       href="javascript:;">
                                        <svg width="8" height="2" viewBox="0 0 8 2" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                    <a className="js-plus btn btn-outline-secondary btn-xs btn-icon rounded-circle"
                                       href="javascript:;">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z"
                                                fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                                {/* End Col*/}
                            </div>
                            {/* End Row*/}
                        </div>
                        {/* End Quantity*/}

                        {/* Accordion*/}
                        <div className="accordion mb-5" id="shopCartAccordion">
                            {/* Collapse*/}
                            <div className="accordion-item">
                                <a className="accordion-button collapsed" href="#" role="button"
                                   data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseOne"
                                   aria-expanded="false" aria-controls="shopCartAccordionCollapseOne">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                    <span className="svg-icon svg-icon-sm text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M20 8H16C15.4 8 15 8.4 15 9V16H10V17C10 17.6 10.4 18 11 18H16C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18H21C21.6 18 22 17.6 22 17V13L20 8Z"
                          fill="#035A4B"/>
                      <path opacity="0.3"
                            d="M20 18C20 19.1 19.1 20 18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18ZM15 4C15 3.4 14.6 3 14 3H3C2.4 3 2 3.4 2 4V13C2 13.6 2.4 14 3 14H15V4ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z"
                            fill="#035A4B"/>
                      </svg>

                    </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            Free shipping
                                        </div>
                                    </div>
                                </a>

                                <div id="shopCartAccordionCollapseOne" className="accordion-collapse collapse"
                                     data-bs-parent="#shopCartAccordion">
                                    <div className="accordion-body">
                                        <p className="mb-0">We offer free shipping anywhere in the U.S. A skilled
                                            delivery team will bring the boxes into your office.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Collapse*/}

                            {/* Collapse*/}
                            <div className="accordion-item">
                                <a className="accordion-button collapsed" href="#" role="button"
                                   data-bs-toggle="collapse" data-bs-target="#shopCartAccordionCollapseTwo"
                                   aria-expanded="false" aria-controls="shopCartAccordionCollapseTwo">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                    <span className="svg-icon svg-icon-sm text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" x="3" y="3" width="18" height="18" rx="9" fill="#035A4B"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M8.42647 12H7.23529C7.23529 14.6315 9.36852 16.7647 12 16.7647C14.6315 16.7647 16.7647 14.6315 16.7647 12C16.7647 9.36853 14.6315 7.23529 12 7.23529C10.8231 7.23529 9.71618 7.66521 8.8607 8.4153L8.70962 8.30952C8.37305 8.07385 7.91166 8.3222 7.92302 8.73291L7.96298 10.178C7.97224 10.5127 8.30136 10.7439 8.61932 10.639L9.99538 10.1855C10.3863 10.0566 10.4628 9.53709 10.1256 9.30103L9.8755 9.12587C10.4798 8.6783 11.2189 8.42647 12 8.42647C13.9736 8.42647 15.5735 10.0264 15.5735 12C15.5735 13.9736 13.9736 15.5735 12 15.5735C10.0264 15.5735 8.42647 13.9736 8.42647 12Z"
                            fill="#035A4B"/>
                      </svg>

                    </span>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            30 Days return
                                        </div>
                                    </div>
                                </a>

                                <div id="shopCartAccordionCollapseTwo" className="accordion-collapse collapse"
                                     data-bs-parent="#shopCartAccordion">
                                    <div className="accordion-body">
                                        <p className="mb-0">If you're not satisfied, return it for a full refund. We'll
                                            take care of disassembly and return shipping.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Collapse*/}
                        </div>
                        {/* End Accordion*/}

                        <div className="d-grid mb-4">
                            <button type="button" className="btn btn-primary btntransition">Add to cart</button>
                        </div>
                    </div>
                    {/* End Col*/}
                </div>
                {/* End Row*/}
            </div>
            {/* End Hero*/}

            {/* Content*/}
            <div className="container content-space-t-2 content-space-md-3">
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="pe-lg-4">
                            <h3>Details</h3>
                            <p>{itemInfo?.attributes?.Description}</p>
                        </div>
                    </div>
                    {/* End Col*/}

                    <div className="col-md-6 mb-5 mb-md-0">
                        <h3>Material and care</h3>

                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="list-py-2 mb-0">
                                    {itemInfo?.attributes?.Details}
                                </ul>
                            </div>
                        </div>
                        {/* End Row*/}
                    </div>
                    {/* End Col*/}
                </div>
                {/* End Row*/}
            </div>
            {/* End Content*/}

            {/* What's trending */}
            <div className="container content-space-b-2 content-space-b-lg-3">
                {/* Title */}
                <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                    <h2>Just for you</h2>
                </div>
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {
                        items?.slice(0, 4).map(({attributes}) => (
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
                                            <a className="link-sm link-secondary"
                                               href="#">{attributes?.category?.data?.attributes?.name}</a>
                                        </div>
                                        <a className="text-body"
                                           href="#">{attributes.name}</a>
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

        </main>
    );
};