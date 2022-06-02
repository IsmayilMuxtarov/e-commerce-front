import React, {useEffect, useState} from 'react';
import {getFilterData, getFilters} from "../../api";
import {Link, useParams} from "react-router-dom";

export const Listings = () => {
    const [filters, setFilters] = useState([])
    const [items, setItems] = useState([])
    const [subFilters, setSubFilters] = useState([])
    const {subCat} = useParams()


    useEffect(() => {
        getFilters().then(res => {
            setFilters(res.data)
        })

        getFilterData(subFilters, [subCat]).then(res => {
            setItems(res.data)
            console.log(res.data);
        })

    }, [])


    useEffect(() => {
        getFilterData(subFilters, [subCat]).then(res => {
            setItems(res.data)
        })
    }, [subFilters])


    const checkSubFilter = (name) => {
        if (subFilters.includes(name)) {
            let newArray = subFilters.filter((item) => item !== name)
            setSubFilters(newArray)
        } else {
            let newArray = [...subFilters, name]
            setSubFilters(newArray)
        }
    }

    const clearFilter = () => {
        setSubFilters([])
    }

    return (
        <main id="content" role="main">
            {/* Card Grid*/}
            <div
                className="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
                <div className="row">
                    <div className="col-lg-3">
                        {/* Navbar*/}
                        <div className="navbar-expand-lg mb-5">
                            {/* Navbar Toggle*/}
                            <div className="d-grid">
                                <button type="button" className="navbar-toggler btn btn-white mb-3"
                                        data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu"
                                        aria-label="Toggle navigation" aria-expanded="false"
                                        aria-controls="navbarVerticalNavMenu">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="text-dark">Filter</span>

                  <span className="navbar-toggler-default">
                    <i className="bi-list"/>
                  </span>

                  <span className="navbar-toggler-toggled">
                    <i className="bi-x"/>
                  </span>
                </span>
                                </button>
                            </div>
                            {/* End Navbar Toggle*/}

                            {/* Navbar Collapse*/}
                            <div id="navbarVerticalNavMenu" className="collapse navbar-collapse">
                                <div className="w-100">
                                    {/* Form*/}
                                    <form>
                                        {
                                            filters.map(({attributes}) => (
                                                <div className="border-bottom pb-4 mb-4">
                                                    <h5>{attributes.name}</h5>

                                                    <div className="d-grid gap-2">
                                                        {
                                                            attributes?.subfilters.data.map((subItem, index) => (
                                                                // Checkboxes
                                                                <div className="form-check"
                                                                     onClick={() => checkSubFilter(subItem.attributes.name)}
                                                                >
                                                                    <input className="form-check-input" type="checkbox"
                                                                           value=""
                                                                           id={`menCheckbox` + index}
                                                                           checked={subFilters.includes(subItem.attributes.name)}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor={`menCheckbox` + index}>{subItem.attributes.name}</label>
                                                                </div>
                                                                // End Checkboxes
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="d-grid">
                                            <button onClick={() => clearFilter()} type="button"
                                                    className="btn btn-white btn-transition">Clear
                                                all
                                            </button>
                                        </div>
                                    </form>
                                    {/* End Form*/}
                                </div>
                            </div>
                            {/* End Navbar Collapse*/}
                        </div>
                        {/* End Navbar*/}
                    </div>
                    {/* End Col*/}

                    <div className="col-lg-9">
                        <div className="row align-items-center mb-5">
                            <div className="col-sm mb-3 mb-sm-0">
                                <h6 className="mb-0">{items?.length} products</h6>
                            </div>

                            <div className="col-sm-auto">
                                <div className="d-sm-flex justify-content-sm-end align-items-center">
                                    {/* Select*/}
                                    <div className="mb-2 mb-sm-0 me-sm-2">
                                        <select className="form-select form-select-sm">
                                            <option value="Relevance" selected>Relevance</option>
                                            <option value="mostRecent">Most recent</option>
                                        </select>
                                    </div>
                                    {/* End Select*/}
                                </div>
                            </div>
                        </div>


                        {/*------------ITEMS----------*/}

                        {
                            items?.map(({attributes, id}) => (
                                <div className="d-grid gap-3 mb-10">
                                    <div className="card card-bordered card-stretched-vertical shadow-none">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="card-pinned">
                                                    <img className="card-img-top"
                                                         style={{height: "100%"}}
                                                         src={"http://funde.fund:1339" + attributes.images.data[0].attributes?.formats?.small?.url}/>

                                                    {
                                                        attributes?.tag?.data?.attributes?.name &&
                                                        <div className="card-pinned-top-start">
                                                        <span
                                                            className="badge bg-success rounded-pill">{attributes?.tag?.data?.attributes?.name}</span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            {/* End Col*/}

                                            <div className="col-sm-8">
                                                <div className="card-body">
                                                    <div className="mb-2">
                                                        <a className="link-sm link-secondary"
                                                           href="#">{attributes?.category?.data?.attributes?.name}</a>
                                                    </div>

                                                    <div className="mb-2">
                                                        <h4 className="card-title">
                                                            <Link className="text-dark"
                                                                  to={`/single-page/${id}`}>
                                                                {attributes.name}
                                                            </Link>
                                                        </h4>
                                                        <p className="card-text text-dark">{attributes.price} azn</p>
                                                    </div>

                                                    <div className="card-footer">
                                                        <div className="d-flex gap-2">
                                                            <button type="button"
                                                                    className="btn btn-outline-primary btn-sm btn-transition rounded-pill">Add
                                                                to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Col*/}
                                        </div>
                                        {/* End Row*/}
                                    </div>
                                </div>
                            ))
                        }

                        {/*      /!* Pagination*!/*/}
                        {/*      <nav aria-label="Page navigation">*/}
                        {/*          <ul className="pagination justify-content-center">*/}
                        {/*              <li className="page-item disabled">*/}
                        {/*                  <a className="page-link" href="#" aria-label="Previous">*/}
                        {/*<span aria-hidden="true">*/}
                        {/*  <i className="bi-chevron-double-left small"/>*/}
                        {/*</span>*/}
                        {/*                  </a>*/}
                        {/*              </li>*/}
                        {/*              <li className="page-item active"><a className="page-link" href="#">1</a></li>*/}
                        {/*              <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                        {/*              <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                        {/*              <li className="page-item disabled"><a className="page-link" href="#">...</a></li>*/}
                        {/*              <li className="page-item"><a className="page-link" href="#">5</a></li>*/}
                        {/*              <li className="page-item">*/}
                        {/*                  <a className="page-link" href="#" aria-label="Next">*/}
                        {/*<span aria-hidden="true">*/}
                        {/*  <i className="bi-chevron-double-right small"/>*/}
                        {/*</span>*/}
                        {/*                  </a>*/}
                        {/*              </li>*/}
                        {/*          </ul>*/}
                        {/*      </nav>*/}
                        {/*      /!* End Pagination*!/*/}
                    </div>
                    {/* End Col*/}
                </div>
                {/* End Row*/}
            </div>
            {/* End Card Grid*/}
        </main>
    );
};