import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage, Categories, SingleProduct, Cart, Listings, NotFound, AboutUs, Checkout} from "../components";
import Header from "../commons/Header";
import Footer from "../commons/Footer";

export const MainApp = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/listings/:subCat' element={<Listings/>}/>
                <Route path='/single-page/:itemId' element={<SingleProduct/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="*" element={<NotFound/>}/> {/*not found*/}
            </Routes>
            <Footer/>
        </>
    );
};