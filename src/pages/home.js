import React, { Component } from "react";
import API from "../utils/API";

class Home extends Component {
    state = {};
        //{*/handleBtnClick={this.handleBtnClick}/>*/}
    render() {
        return (
            <div>
                <h1 className="text-center"></h1>
                <h3 className="text-center">

                </h3>
                <h1 className="text-center">
                    My Portfolio
            </h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">Kristine J. Horton</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <a className="nav-link active" href="index.html"></a>
                            <a className="nav-link" href="contact.html"></a>
                            <a className="nav-link" href="portfolio.html"></a>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About Me<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./portfolio.html">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-me-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            <italic>About</italic>
                        </h5>
                        <div className="container">
                            <div class="row no-gutters">
                                <div className="col-md-4">
                                    <img src="./Assets/KIMG0093.JPG" style="width: 70%" alt="photo of Kristine" />
                                </div>
                                <div className="col-md-8">
                                    <p className="card-text">
                                        My name is Kristine Horton and I have an inquisitive mind and enjoy learning. I love solving
                                        puzzles.
                                        I enjoy reading and listening to stories about people and history.I especially enjoy murder
                                        mysteries.
                                        Inpired by my love of stories, I pursued my bachelor's degree from the University of
                                        Wyoming.
                                        In talking with a family friend, I learned about the University of Washington's Coding
                                        Bootcamp.
                                        I decided to enroll in the program. It has challenged my mind and puzzle solving skills.
                                        I live in Cheyenne, Wyoming to be close to my family.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;