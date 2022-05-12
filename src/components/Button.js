import React, { Component } from "react";
import './styles/buttons.css';

/**
 * 
 * @param {string} buttonType The following types can be used: menu, nextPageLeft, nextPageRight, skipToBottom, alternatively leave blank for the basic type.
 * @param {string} name The text inside the button, if any.
 * @returns A Button of type: buttonType
 */

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button type="button" className={`button ${this.props.buttonType}`} onClick={() => `${this.props.clickFunction}`}> {this.props.name}  </button>
        );
    }
}

