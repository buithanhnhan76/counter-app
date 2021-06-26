import React,{Component} from 'react';
import Counter from './counter';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';

class Counters extends Component {
    render (){
        // received counters and method by props
        const {counters: allCounters,onIncrement,onDecrement,onDelete, onReset, caculateSum, currentPage, pageSize, genres, selectedItem} = this.props;
        if(allCounters.length === 0) 
        return <h1>There are no products in the database</h1>
        console.log(allCounters);

        // filter by genre
        const filtered = selectedItem && selectedItem._id ? allCounters.filter(counter => counter.genre === selectedItem.name): allCounters;
        
        // paginate
        const counters = paginate(filtered, currentPage, pageSize);
        return (
        <div className="row">
                <div className="col-8">,
                <h2 className="ml-2 my-3">Showing {counters.length} Product</h2>
                <button onClick={onReset}
                className="btn btn-success btn-sm m-3 rounded">Reset</button>
                {/* use map method to create a list of counters */}
                {counters.map(counter => 
                <Counter key={counter.id} counter={counter} 
                onIncrement = {onIncrement} onDecrement={onDecrement} onDelete={onDelete}>
                </Counter>)}
                <button className="btn btn-success m-3" onClick={() => {alert("You need to pay " + caculateSum(counters) + " $")}}>Buy</button>
                </div>
                <div className="col-3">
                <ListGroup items={genres} onItemSelect={this.props.onItemSelect} selectedItem = {selectedItem}
                ></ListGroup>
            </div>
        </div>)
    }
}

export default Counters;
