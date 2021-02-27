import React, { Component } from "react";
import API from "../utils/API";
function Portfolio() {
    return (
        <div>
            <h5 className="card-title">
                <italic>Portfolio</italic>
            </h5>
            <p className="card text">
                The following screenshots are projects I have worked on by myself and with a team.

                The deployed URL is:https://girmad.github.io/Trip-Planner/.
                The Github link is: https://github.com/girmaD/Trip-Planner/tree/main.

                The deployed URL is: https://kristine-1977.github.io/coding-quiz
                and the Github link is: https://github/Kristine-1977/coding-quiz

                The deployed URL is: https://kristine-1977.github.io/Code-Refactor/
                and the Github link is: https://github.com/Kristine-1977/Code-Refactor

                The deployed URL is: https://kristine-1977.github.io/Day-Planner/
                and the Github link is: https://github.com/Kristine-1977/Day-Planner

                The deployed URL is: https://kristine-1977.github.io/weather-dashboard/
                and the Github link is: https://kristine-1977.github.io/weather-dashboard/

                The deployed URL is: https://agile-fortress-02613.herokuapp.com/
                and the Github link is: https://github.com/Kristine-1977/Note-Taker
    </p>
            <img src="./Assets/Snapshot-of-coding-quiz.png" style={{ width: "30%" }} alt="Snapshot-of-coding-quiz" />
            <img src="./Assets/TripPlannerScreenshot.png" style={{ width: "30%" }} alt="screenshotofTripPlanner" />
            <img src="./Assets/Snapshot of Code Refactor.png" style={{ width: "30%" }} alt="Snapshot of Code Refactor" />
            <img src="./Assets/Snapshot of Day Planner.png" style={{ width: "30%" }} alt="Snapshot of Day-Planner" />
            <img src="./Assets/Snapshot Weather Dashboard.png" style={{ width: "30%" }} alt="Snapshot of Weather Dashboard" />
            <img src="./Assets/Snapshot of Note Taker App.png" style={{ width: "30%" }} alt="Snapshot of Note Taker" />
        </div>
    );
}
export default Portfolio;
