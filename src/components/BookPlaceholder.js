import React, { Component } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

import './styles/book.css';

export default function BookPlaceholder(props) {
    return (
        <NavLink to={props.linkUrl}>
            <div className="BookPlaceholder">
                <div className="BookThumbnail">
                    <img className="BookCover" src={require("../books/" + props.imgUrl + "/img/cover.png")} />
                </div>

                <div className="BookDescContainer">
                    <div className="BookDesc">
                        <b>{props.name}</b>

                    </div>
                </div>
            </div>
        </NavLink>
    );
}