import React, { Component } from "react";
import './styles/form.css';
import '../App.css'
import NavMenu from "./NavMenu";

export default function Disclaimer() {
    return (
        <div className="App">
            <NavMenu />
            <div className="FormBody">
                <div className="FormContainer">
                    Template to disclose any information
                </div>
            </div>
        </div>

    );
}