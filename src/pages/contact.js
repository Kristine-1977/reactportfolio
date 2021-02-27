import React, { Component } from "react";
import API from "../utils/API";
class Contact extends Component {
    state = {};
       //{*/handleBtnClick={this.handleBtnClick}/>*/}
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">Kristine Horton</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">About Me</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Contact<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
    <h5 className="card-title">
        <italic>Contact Me</italic>
        <p className="card-text">
            My contact information is as follows:
            Github: https://github.com/Kristine-1977
            LinkedIn: https://www.linkedin.com/in/kristine-horton-9588bb17/
            Resume: <a href="./Assets/HortonResume1.pdf" download>Download the pdf</a>
        </p>
    </h5>
        );
    }
}
export default Contact;