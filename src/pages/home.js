import React from "react";
function Home() {
    return (
        <div>
            <h1 className="text-center">
                My Portfolio
            </h1>
            <div className="col-me-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <italic>About</italic>
                    </h5>
                    <div className="container">
                        <div class="row no-gutters">
                            <div className="col-md-4">
                                <img src="../public/KIMG0093.JPG" style={{ width: "70%" }} alt="Kristine" />
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
                                    I decided to enroll in the program. It has challenged me and my puzzle solving skills.
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

export default Home;