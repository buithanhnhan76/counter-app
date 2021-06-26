import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import Footer from './components/footer';
import Pagination from './components/common/pagination';

class App extends Component {
// App is the cotainer of counters
  state = {
    counters: [
        {id:1, number:0, price: 100, type: "Computer"},
        {id:2, number:0, price: 200, type: "Tivi"},
        {id:3, number:0, price: 50, type: "Laptop"},
        {id:4, number:0, price: 25, type: "Phone"},
        {id:5, number:0, price: 120, type: "Computer"},
        {id:6, number:0, price: 300, type: "Tivi"},
        {id:7, number:0, price: 10, type: "Laptop"},
        {id:8, number:0, price: 500, type: "Computer"}
    ],
    pageSize: 4,
    currentPage: 1
};

// handleIncrement arrow function
// this.setState
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].number++;
    this.setState({counters});
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].number--;
  this.setState({counters});
  }

// filter method to delete the counter with the selected id
handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
};

// map method to make value return to 0
handleReset = () => {

    const counters = this.state.counters.map(c => {
        c.number = 0;
        return c;
    });
    this.setState({counters});
};

handlePageChange = (page) => {
  this.setState({currentPage: page});
}

caculateSum = (object) => {
  var sum = 0;
  object.forEach(x => {
    if(x.number > 0)
    sum += x.number * x.price;
  });
  return sum;
}

  render(){
  return (
    <React.Fragment>
    {/* send navbar the number of counter with value is greater than 0 */}
    <NavBar totalCounters={this.state.counters.filter(c => c.number>0).length}
    totalPrice={this.caculateSum(this.state.counters)}></NavBar>
    <main className = "container" >
      <Counters onReset={this.handleReset} onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement} caculateSum={this.caculateSum} 
      onDelete={this.handleDelete} counters ={this.state.counters}
      currentPage={this.state.currentPage} pageSize={this.state.pageSize}></Counters>
      <Pagination itemsCount={this.state.counters.length} pageSize={this.state.pageSize}
      onPageChange={this.handlePageChange} currentPage={this.state.currentPage}></Pagination>
    </main>
    <Footer></Footer>
    </React.Fragment>
    
  );

};

};

export default App;



