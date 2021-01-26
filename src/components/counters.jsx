import React,{Component} from 'react'
import Counter from './counter'

class Counters extends Component {
    render (){
        const {counters,onIncrement,onDecrement,onDelete, onReset} = this.props;
        return (
        <div>
            <button onClick={onReset}
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter key={counter.id} counter={counter} 
            onIncrement = {onIncrement} onDecrement={onDecrement} onDelete={onDelete}>
            </Counter>)}
        </div>)
    }
}

export default Counters;
