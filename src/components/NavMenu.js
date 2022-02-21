import React, { Component } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

import './styles/menu.css';

export default function NavMenu() {
    return (
        <div className="Navmenu">
            <h1> Spring a Story </h1>
            <br />
            <br />
            <br />
            <NavLink to="/disclaimer"><h2>Disclaimer</h2></NavLink>
            <h2></h2>
        </div>
    );
}