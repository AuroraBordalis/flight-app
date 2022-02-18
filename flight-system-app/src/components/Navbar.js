import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";



class Navbar extends Component {
    static contextType = UserContext;
    render() {
        console.log(this.context);
        const {isLoggedIn, isAdmin}  = this.context;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Flight-System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {isLoggedIn ? <li className="nav-item active">
                            <a className="nav-link" href="/Customer">Customer Functions</a>
                        </li> : <a></a> }
                        {isAdmin ? <li className="nav-item active">
                            <a className="nav-link" href="/System">Employee Functions</a>
                        </li> : <a></a> }
                    </ul>
                    <ul className="navbar-nav ml-auto">
                       {isLoggedIn ?  <button type="button" className="btn btn-success" onClick={() => {this.context.logout()}}>Logout </button> : <Link type="button"  className="btn btn-success" to="/Login">Login</Link>}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
