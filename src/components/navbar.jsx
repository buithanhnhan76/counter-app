import React from 'react';

const NavBar = ({totalCounters}) => {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Total <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                    </span></a>
                </div>
            </nav>
          );
    };
 
export default NavBar;