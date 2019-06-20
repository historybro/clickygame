import React from "react";
import "./nav.css";

const Nav = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="message">{props.message}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
)

export default Nav;