import React, { Component } from "react";

import './styles/book.css';

export default function BookPage(props) {
    return (
        <div className="App" style={{ 'justifyContent': 'left' }}>
            <div className="BookRegion">
                <h1> Hello </h1>
                <div className="BackArrow">

                </div>

                <div className="BookPage">
                    <div className="PageImage">
                        <img className="BookCover" src={require("../books/" + props.imgUrl + "/img/cover.png")} />

                    </div>

                    <div className="PageDescription">

                    </div>
                </div>

                <div className="FowardArrow">
                </div>


            </div>
        </div >
    );
}