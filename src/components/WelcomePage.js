import React, { Component } from "react";
import LancLogo from '../lancaster-logo.png';
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import Button from './Button';

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="FormBody">
                    <div className="FormContainer">
                        <div className="DescriptionSection">
                            <h1>Welcome to Spring a Story </h1>
                        </div>
                        <img src={LancLogo} className="LancasterLogo"></img>
                        <div className="WhatIsSPAS">
                            <div className="TextSection">

                                <h3>What is Spring a Story? </h3>
                                <h5>
                                    Spring a Story is an electronic co-reading tool designed to enable children to develop their independent reading skills.
                                </h5>
                            </div>
                        </div>


                        <div className="DescriptionSection">
                            <div className="TextSection">
                                <h3>How does it work?</h3>
                                <h5>
                                    Your role is to facilitate the reading activity and the creation of the story, by helping
                                    the child
                                    when required as you would do when reading a book. This application will also request
                                    microphone
                                    permission to record the audio of your stories, this must be enabled for the recording to
                                    work.
                                    These stories will be confidential and only be used for research purposes only. <br />
                                    Once the book comes to its end a questionnaire will appear asking questions regarding you
                                    and your
                                    child's experience. You will be also able to listen back the recording to ensure you are
                                    happy the
                                    story to be submitted to be a part of the research. This activity should last 15-20 minutes.
                                    <br /><br />
                                    Your child is required to tell a story, based on the pictures they see in the book. On each
                                    page
                                    there will be some question prompts to help them tell a story. There will also be orange
                                    circles
                                    where the child can tap on, these will have additional question prompts. If the page has no
                                    orange
                                    circles this means that there are no more question prompts and the child may turn over to
                                    the next
                                    page.
                                    <br /><br />
                                    Once the book comes to its end a questionnaire will appear asking questions regarding you
                                    and your
                                    child's experience. You will be also able to listen back the recording to ensure you are
                                    happy the
                                    story to be submitted to be a part of the research. This activity should last 15-20 minutes.
                                </h5>
                            </div>
                        </div>

                        <NavLink to={`/consent`}><Button buttonType="" name="Next" /></NavLink>

                    </div>

                </div>

            </div>
        )

    }

}
