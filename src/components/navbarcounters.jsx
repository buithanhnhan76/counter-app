import React from 'react';

// totalCounters is the number of different product
// totalPrice is total price of all products
// props destructor
const NavBarCounters = ({totalCounters,totalPrice}) => {
        return (
            // bootstrap navbar
            <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid">
                    <div className="navbar-brand text-white">
                        Number :
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
 
export default NavBarCounters;