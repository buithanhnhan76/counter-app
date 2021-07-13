import React, { Component } from 'react';
// Link has a feature that it will prevent load page 
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return ( 
                // bootstrap navbar
                <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid">
                    <div className="navbar-brand text-white">
                        <Link to="/appcounters" className="text-white mr-2">App Counters</Link>

                        <Link to="/home" className="text-white mr-2">Home</Link>
    
                        <Link to="/aboutus" className="text-white mr-2"> About Us </Link>

                        <Link to="/posts" className="text-white">Posts</Link>
                    </div>
                </div>
                </nav>
         );
    }
}
 
export default NavBar;