import React, { Component } from "react";

import './styles/modals.css';
import './styles/buttons.css';
import Recorder from "./Recorder";



export default class PermissionsModal extends React.Component {
    constructor(props) {
        super(props);
        this.isRecording = false;
    }

    SetupRecording() {
        this.isRecording = true;
        this.HideModal();
    }

    HideModal() {
        var x = document.getElementById("modal");
        x.style.display = "none";
        return (<Recorder></Recorder>)
    }

    CheckRecording() {
        console.log("Recorder");
        if (this.isRecording === true) {
            console.log("True");
            <Recorder></Recorder>
        }
    }

    render() {
        return (
            <div className="modal" id="modal">
                {this.CheckRecording()}
                <div className="modalContainer" >
                    <div className="modalBackgroundColour">

                    </div>

                    <div className="permissionsModalContainer">
                        <div className="permissionsModalTitle">
                            <h1>Permissions Required</h1>
                        </div>

                        <div className="permissionsModalBody">
                            <h3>Press "Begin" to Accept Permissions and begin reading.</h3>
                        </div>

                        <div className="permissionsModalButton">
                            <button type="button" className="button permissionsButton" onClick={() => this.SetupRecording()}> Begin  </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
