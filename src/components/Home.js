import React, { Component } from "react";
import BookPlaceholder from './BookPlaceholder';


import './styles/home.css';
import '../App.css';

import NavMenu from './NavMenu';

export default function Home() {
    const bookMenu = [
        {
            name: "Frogbook 1",
            desc: "one option",
            imgUrl: "Frogbook_1",
            linkUrl: "frogbook1",
        },
        {
            name: "Frogbook 2",
            desc: "two option",
            imgUrl: "Frogbook_2",
            linkUrl: "frogbook2",
        },
        {
            name: "Frogbook 3",
            desc: "three option",
            imgUrl: "Frogbook_3",
            linkUrl: "frogbook3",
        },
        {
            name: "Springloaded 1",
            desc: "three option",
            imgUrl: "Springloaded_1",
            linkUrl: "springloaded1",
        },
    ];

    return (
        <div className="App" style={{ 'justifyContent': 'left' }}>
            <NavMenu />
            <div className="BookPage">

                <div className="BookTitle">
                    <h1> <u>Books</u> </h1>
                </div>

                <div className="BookThumbnails">
                    {bookMenu.map(function (item, idx) {
                        return (
                            <BookPlaceholder
                                key={item.name}
                                name={item.name}
                                desc={item.desc}
                                imgUrl={item.imgUrl}
                                linkUrl={"/book/" + item.linkUrl}
                            />
                        );
                    })}


                </div>
            </div>


        </div>
    );
}