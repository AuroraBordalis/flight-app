import React, { Component } from "react";
import '../App.css';
import {Link} from 'react-router-dom';

class Home extends Component {



    render() {
        return (

            <div className="home-page" >
                <Link type="button" className="btn btn-primary button1 btn-lg "  to="/SignUp"  > SignUp </Link>
                <Link type="button" className="btn btn-primary button2 btn-lg " to="/Login" > Login </Link>
                <footer>
                    <p>Made by Shawn John</p>
                </footer>
            </div>
        )
    }
}

export default Home;
