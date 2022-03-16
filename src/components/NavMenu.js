import React, { Component } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from '../Logo_1.svg';
import './styles/menu.css';

export default function NavMenu() {
    return (
        <div className="Navmenu">
            <div className="MenuIcon">
                <LogoSvg />
            </div>
            <NavLink to="/home"><h1> Spring a Story </h1></NavLink>
            <br />
            <br />
            <br />
            <NavLink to="/disclaimer"><h2>Disclaimer</h2></NavLink>
            <NavLink to="/remove-data"><h2>Request Data Removal</h2></NavLink>

            <h2></h2>
        </div>
    );
}