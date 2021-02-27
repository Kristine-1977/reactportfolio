import React, { Component } from "react";
import API from "../utils/API";
function Contact() {
    return (
        <div>
            <h5 className="card-title">
                <italic>Contact Me</italic>
                <p className="card-text">
                    My contact information is as follows:
                    Github: https://github.com/Kristine-1977
                    LinkedIn: https://www.linkedin.com/in/kristine-horton-9588bb17/
            Resume: <a href="./Assets/HortonResume1.pdf" download>Download the pdf</a>
                </p>
            </h5>
        </div>
    );
}

export default Contact;