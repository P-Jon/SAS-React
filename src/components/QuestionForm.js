import React, { Component } from "react";
import './styles/form.css';
import Button from './Button';

import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.studyID = uuidv4();
    }

    CopyText() {
        navigator.clipboard.writeText(this.studyID);
    }

    StudyIDContainer() {
        return (
            <div className="StudyIDContainer" onClick={() => this.CopyText()}>
                <p > Study ID: <span id="studyID"> {this.studyID} </span> </p>
                <p> Click or Tap here to Copy the StudyID. </p>
            </div>
        )
    }

    ConsentForm() {
        const bookNumber = Math.floor((Math.random() * 3) + 1);
        console.log(bookNumber);
        return (
            <div className="DescriptionSection">
                <iframe width="100%" height="480px"
                    src={"https://forms.office.com/Pages/ResponsePage.aspx?id=Ec2bnHqXnE6poLxzQJAWSn7aebWXwNZOqaiwrKAGGG5UM1hDNkU3Wk0yNjA3OFFUS01BWE4xOTdRUi4u&embed=true"}
                >
                </iframe>
                <NavLink to={`/book/frogbook${bookNumber}`}><Button buttonType="" name="Next" /></NavLink>
            </div>
        );
    }

    FinalForm() {
        return (
            <div className="DescriptionSection">
                <iframe width="100%" height="480px"
                    src={"https://forms.office.com/Pages/ResponsePage.aspx?id=Ec2bnHqXnE6poLxzQJAWSn7aebWXwNZOqaiwrKAGGG5URjI5TjhYRk84VlVVN0wwUTZYUTJVTk4xVS4u&embed=true"}>
                </iframe>
            </div>
        );
    }

    render() {
        if (this.props.formType === "final") {
            return (
                <div className="App">
                    <div className="FormBody">
                        <div className="FormContainer">
                            {this.StudyIDContainer()}
                            {this.FinalForm()}
                        </div>

                    </div>

                </div>

            )
        } else {
            return (
                <div className="App">

                    <div className="FormBody">
                        <div className="FormContainer">
                            {this.StudyIDContainer()}
                            {this.ConsentForm()}
                        </div>
                    </div>
                </div>

            );
        }
    }

}