import React from "react";
import './styles/form.css';
import Button from './Button';

import { BrowserRouter as Link, NavLink } from "react-router-dom";

export default function ConsentForm() {
    return (
        <div className="App">

            <div className="FormBody">
                <div className="FormContainer">
                    <DescriptionSection />
                    <br />
                    <TableForm />
                </div>
            </div>
        </div>

    );
}

function DescriptionSection() {
    return (
        <div className="DescriptionSection">
            <h1 className="Header"> Consent Form </h1>
            <br />
            <h2> About this research </h2>
            The primary focus of Spring-a-story Lancashire is to empower children to be more
            independent in reading through the introduction of e-book co-reading.

            <h2> How does it work? </h2>
            Your role is to facilitate the reading activity and the creation of the story,
            by helping the child when required as you would do when reading a book.
            <br /><br />

            Your child is required to tell a story, based on the pictures they see in the book.
            On each page there will be some question prompts to help them tell a story.
            There will also be orange circles where the child can tap on, these will have additional question prompts.
            If the page has no orange circles this means that there are no more question prompts and the child may
            turn over to the next page.
            <br /><br />

            Once the book comes to its end a questionnaire will appear asking questions regarding you and your child’s experience.
            You will be also able to listen back the recording to ensure you are happy the story to be submitted to be a part of
            the research. This activity should last 15-20 minutes.

            <br /><br />

            If you have any further issues or questions you may get in touch by emailing: e.rubegni@lancaster.ac.uk
            <br /><br />
            Thanks,
            <br /><br />
            Elisa Rubegni, lecturer at the School of Computing and Communications
            <br />
            Lancaster University, UK
        </div>
    );
    //<a href="mailto:e.rubegni@lancaster.ac.uk" rel="noreferrer"> Currently hyperlinking breaks the layout and I can't figure out how to rectify it.
}

function TableForm() {
    return (
        <div className="DescriptionSection">
            <form>
                <table>
                    <thead>
                        <tr>
                            <th style={{ 'textAlign': 'center' }}>Please tick the boxes below if you agree with the statements</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow question="I agree for me and my child to participate in this research." />
                        <TableRow question="I confirm that I have read and understand the information sheet for the “Spring-a-Story-Lancaster” project. I have had the opportunity to consider the information, ask questions, and have had these answered satisfactorily." />
                        <TableRow question="I understand that my and my child’s participation is voluntary and that I am free to withdraw at any time, without giving any reason.  If I withdraw within 2 months of commencement of the study my data will be removed." />
                        <TableRow question="I understand that my name/my organisation’s name will not appear in any reports, articles or presentation without my consent." />
                        <TableRow question="I have been given contact information for the researchers." />
                        <TableRow question="I understand that any information collected in the study will be anonymized and kept confidential. " />
                        <TableRow question="I understand that any information given by me may be used in future reports, academic articles, publications or presentations by the researcher/s, but my personal information will not be included and I will not be identifiable." />
                        <TableRow question="I understand that data will be kept according to University guidelines for a minimum of 10 years after the end of the study." />
                    </tbody>
                    <tr>
                        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': '5px 0 5px 0' }}>
                            <NavLink to="/home"><Button buttonType="" name="Submit" /></NavLink>
                        </div>
                    </tr>
                </table>

            </form>
        </div>

    );
}

function TableRow(props) {
    return (
        <tr>
            <td><label for={props.question}>{props.question}</label></td>
            <td><input className="Checkbox" type="checkbox" id={props.question} /></td>
        </tr>
    );

}