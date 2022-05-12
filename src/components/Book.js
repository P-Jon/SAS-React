import React, { Component } from "react";
import { ReactComponent as LeftArrow } from '../l_arrow.svg';
import { ReactComponent as RightArrow } from '../r_arrow.svg';
import { NavLink, useNavigate } from "react-router-dom";

import './styles/book.css';
import PermissionsModal from "./PermissionsModal";


export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };

        this.images = require.context("../books/", true);
    }

    nextPageButtonHandler() {
        if (this.state.currentPage >= this.props.length) {
            return (
                <NavLink to={`/finish`}>
                    <div className="ArrowZone RightArrow">
                        <RightArrow />
                    </div>
                </NavLink>
            )
        } else {
            return (
                <div className="ArrowZone RightArrow" onClick={() => this.turnPageNext()}>
                    <RightArrow />

                </div>
            )
        }
    }

    turnPageNext() {
        console.log("Getting next page...");
        if (this.state.currentPage < this.props.length) {
            this.setState({ currentPage: this.state.currentPage + 1 });
        }
    }

    turnPageBack() {
        console.log("Getting last page...");
        if (this.state.currentPage >= 1) {
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    getPageURL() {
        console.log("Getting page URL");
        var prefix = this.props.name + '_' + this.props.version + '/img/';
        if (this.state.currentPage == 0) {
            console.log("Returning Cover");
            return prefix + "cover.png";
        }
        else if (this.state.currentPage <= this.props.length) {
            console.log("Returning Page: " + this.state.currentPage);

            return prefix + "page" + this.state.currentPage + ".png";
        }
        else {
            console.log("Page not found, returning cover");

            return prefix + "cover.png"; // Be better to say "Page not found" in the future.
        }
    }

    getPageAudio() {
        if (this.state.currentPage > 0) {
            console.log("Getting audio file: " + `../books/${this.props.name}_${this.props.version}/audio/page${this.state.currentPage}_1.mp3`);
            return (
                <audio
                    controls
                    id={`${this.props.name}_${this.props.version}_page${this.state.currentPage}_audio`}
                    preload='auto'
                    src={require(`../books/${this.props.name}_${this.props.version}/audio/page${this.state.currentPage}_1.mp3`)}
                    type="audio/mpeg"
                >
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            );
        }

    }

    playAudio() {
        var audio = document.getElementById(`${this.props.name}_${this.props.version}_page${this.state.currentPage}_audio`);
        audio.play();
    }

    render() {
        var pageURL = this.getPageURL();
        console.log(pageURL);
        return (
            <div className="App" style={{ 'justifyContent': 'left' }}>
                <div className="BookRegion">
                    <div className="BarZone">

                        <div className="ArrowZone LeftArrow" onClick={() => this.turnPageBack()}>
                            <LeftArrow />
                        </div>
                    </div>

                    <div className="BookSlide" onClick={() => this.playAudio()}>
                        {this.getPageAudio()}

                        <img className="PageImage" src={this.images('./' + pageURL)} alt="Storybook page" />
                        {console.log("Playing audio")}

                        <div className="PageDescription">

                        </div>
                    </div>

                    <div className="BarZone">
                        {this.nextPageButtonHandler()}
                    </div>

                </div>
                <PermissionsModal></PermissionsModal>

            </div >
        );
    }
}