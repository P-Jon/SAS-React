import React, { useState } from "react";
function MenuItem(props) {
    return (
        <Link to={props.url} className="menu-link">
            {props.name}
        </Link>
    )
}

// Book page (original, maybe put the allocated book into cookies or something?), disclaimer, remove data 

function Menu() {
    return (
        <div className="menu">
            <div className="menu-container">
                <MenuItem name="Home" url="/" />
                <MenuItem name="Disclaimer" url="/disclaimer" />
                <MenuItem name="Request Remove Study Data" url="/remove-data" />
            </div>
        </div>
    )
}

export default Menu