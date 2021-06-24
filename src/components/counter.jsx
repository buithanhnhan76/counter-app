//imrc import react component
// React for React.createElement and Component for class to extends
import React, { Component } from 'react';

class Counter extends Component {

    // return an jsx like <h1>Hello</h1>
    // bootstrap which is used here is included in index.js
    render() {
        return (

            // grid row bootstrap
            <div className="container">
                <div className="row">

                    {
                        /* // column 1 contains getBadgeClassed() and formatCount() 
                        // use {} to include somethings like js expression
                        // getBadgeClasses return badge-warning when value is zero, otherwise 
                        it returns badge-primary
                        // formatCount returns zero when value is 0, otherwise returns that value
                        // value of getBadgeClasses is assigned to a span's class, and formatCount 
                        is assigned to span's text */
                    }
                    <div className="col-sm-2 py-2 ">
                        <span className={this.getBadgeClasses()}>
                            Number: {this.formatCount()}</span>
                    </div>
                    <div className="col-sm pl-0">
                        {/* 
                            when u click on the + button, it calls the onIncrement(from props
                            ) method 
                            with the counter as an parameter(from props too) 
                            when u click on the - button, it works the same as the + button
                            , but when counter.value = 0, it is disabled
                            delete button ..., receive an counter.id as an parameter

                    */}
                        <button onClick={() => this.props.onIncrement(this.props.counter)}
                            className="btn btn-secondary btn-sm"><i className="fas fa-plus-circle"></i></button>
                        <button onClick={() => this.props.onDecrement(this.props.counter)}
                            className="btn btn-secondary btn-sm m-2" disabled=
                            {this.props.counter.value === 0 ? "disabled" : ""}
                        ><i className="fas fa-minus-circle"></i></button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this.props.onDelete(this.props.counter.id)}
                        ><i className="far fa-trash-alt"></i>
                        </button>
                    </div>



                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge w-100 px-3 rounded badge-";
        classes += this.props.counter.value === 0 ? "warning" : "success";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}
export default Counter; // cc 
