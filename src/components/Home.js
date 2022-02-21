import React, { Component } from "react";
import BookPlaceholder from './Book';


import './styles/home.css';
import '../App.css';

import NavMenu from './NavMenu';

export default function Home() {
    return (
        <div className="App" style={{ 'justifyContent': 'left' }}>
            <NavMenu />
            <div className="BookPage">

                <div className="BookTitle">
                    <h1> <u>Books</u> </h1>
                </div>

                <div className="BookThumbnails">
                    <BookPlaceholder></BookPlaceholder>
                    <BookPlaceholder></BookPlaceholder>
                    <BookPlaceholder></BookPlaceholder>
                    <BookPlaceholder></BookPlaceholder>
                    <BookPlaceholder></BookPlaceholder>
                    <BookPlaceholder></BookPlaceholder>


                </div>
            </div>


        </div>
    );
}