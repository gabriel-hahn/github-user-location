import React, { Component, Fragment } from "react";

import User from "../User";

import "./style.css";

export default class Menu extends Component {
    render() {
        return (
            <Fragment>
                <div className="menu">
                    <User />
                </div>
            </Fragment>
        );
    }
}
