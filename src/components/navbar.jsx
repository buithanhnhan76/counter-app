import React from 'react';
import Counters from './counters';

const NavBar = ({totalCounters,totalPrice}) => {
        return (
            <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid">
                    <div className="navbar-brand text-white">
                        Number Product:
                        <span className="badge badge-light mx-2">
                        {totalCounters}
                        </span> 
                        Total Price:
                        <span className="badge badge-light mx-2">
                        {totalPrice} $</span>
                    </div>
                </div>
            </nav>
          );
    };
 
export default NavBar;