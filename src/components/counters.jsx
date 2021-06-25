import React,{Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render (){
        // received counters and method by props
        const {counters,onIncrement,onDecrement,onDelete, onReset, caculateSum} = this.props;
        return (
        <div>
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
