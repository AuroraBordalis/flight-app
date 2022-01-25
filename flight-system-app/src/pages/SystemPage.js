import React, {Component} from "react";
import {Link} from 'react-router-dom';
class SystemPage extends Component{
    render(){
        return(
            
            <div>
                <Link className="btn btn-secondary btn-lg" to="/Airports">Airports</Link>
                <Link className="btn btn-secondary btn-lg" to="/Flights">Flights</Link>
            </div>
        )
    }
}

export default SystemPage;
