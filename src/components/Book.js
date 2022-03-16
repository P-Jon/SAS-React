import React, { Component } from "react";
import { ReactComponent as LeftArrow } from '../l_arrow.svg';
import { ReactComponent as RightArrow } from '../r_arrow.svg';

import './styles/book.css';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        //this.currentPage = 0;
        this.state = {
            currentPage: 0
        };

        this.images = require.context("../books/", true);
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

    render() {
        var pageURL = this.getPageURL();
        console.log(pageURL);
        return (
            <div className="App" style={{ 'justifyContent': 'left' }}>
                <div className="BookRegion">
                    <div className="ArrowZone LeftArrow" onClick={() => this.turnPageBack()}>
                        <LeftArrow />
                    </div>

                    <div className="BookSlide">
                        <img className="PageImage" src={this.images('./' + pageURL)} />

                        <div className="PageDescription">

                        </div>
                    </div>

                    <div className="ArrowZone RightArrow" onClick={() => this.turnPageNext()}>
                        <RightArrow />

                    </div>


                </div>
            </div >
        );
    }
}
/*
export default function BookPage(props) {
    return (
        <div className="App" style={{ 'justifyContent': 'left' }}>
            <div className="BookRegion">
                <div className="ArrowZone LeftArrow">
                    <LeftArrow />
                </div>

                <div className="BookSlide">
                    <img className="PageImage" src={require("../books/" + props.name + "_" + props.version + "/img/cover.png")} />

                    <div className="PageDescription">

                    </div>
                </div>

                <div className="ArrowZone RightArrow">
                    <RightArrow />

                </div>


            </div>
        </div >
    );
}*/