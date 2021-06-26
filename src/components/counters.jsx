import React,{Component} from 'react';
import Counter from './counter';
import { paginate } from '../utils/paginate';

class Counters extends Component {
    render (){
        // received counters and method by props
        const {counters: allMovies,onIncrement,onDecrement,onDelete, onReset, caculateSum, currentPage, pageSize} = this.props;
        if(allMovies.length === 0) 
        return <h1>There are no products in the database</h1>
        const counters = paginate(allMovies, currentPage, pageSize);
        return (
        <div>
            <h2 className="ml-2 my-3">Showing {counters.length} Product</h2>
            <button onClick={onReset}
            className="btn btn-success btn-sm m-3 rounded">Reset</button>
            {/* use map method to create a list of counters */}
            {counters.map(counter => 
            <Counter key={counter.id} counter={counter} 
            onIncrement = {onIncrement} onDecrement={onDecrement} onDelete={onDelete}>
            </Counter>)}
            <button className="btn btn-success m-3" onClick={() => {alert("You need to pay " + caculateSum(counters) + " $")}}>Buy</button>
        </div>)
    }
}

export default Counters;
