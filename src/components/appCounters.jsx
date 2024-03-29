import React, { Component } from 'react';
import NavBarCounters from './navbarcounters';
import '../App.css';
import Counters from './counters';
import Pagination from './common/pagination';
import { getGenres } from '../services/fakeGenreServices';
import { getProducts } from '../services/fakeProductServices';
import AboutUs from './aboutUs';
import {Route, Switch} from 'react-router-dom';
import Posts from './posts';


class AppCounters extends Component {
// App is the cotainer of counters
  state = {
    counters: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
};

componentDidMount(){
  this.setState({counters: getProducts(),genres: [{name:"All Genres"},...getGenres()]});
}
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
    const counters = this.state.counters.filter(c => c._id !== counterId);
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

handleGenreSelect = (genre) => {
  this.setState({selectedGenre: genre,currentPage:1})
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
   <NavBarCounters totalCounters={this.state.counters.filter(c => c.number>0).length}
    totalPrice={this.caculateSum(this.state.counters)}></NavBarCounters>
    <main className = "container" >
      <Counters onReset={this.handleReset} onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement} caculateSum={this.caculateSum} 
      onDelete={this.handleDelete} counters ={this.state.counters}
      currentPage={this.state.currentPage} pageSize={this.state.pageSize}
      genres={this.state.genres} onItemSelect={this.handleGenreSelect}
      selectedItem = {this.state.selectedGenre}
      ></Counters>
      <Pagination itemsCount={this.state.selectedGenre&&this.state.selectedGenre._id?this.state.counters.filter(counter => counter.genre === this.state.selectedGenre).length:this.state.counters.length} 
      pageSize={this.state.pageSize}
      onPageChange={this.handlePageChange} currentPage={this.state.currentPage}></Pagination>
    </main>
    <div className="content">
    {/* if you have a space like  {AboutUs} ></Route> it not gonna work*/}
    <Switch>
    <Route path="/aboutus" component={AboutUs}></Route>
    <Route path="/posts" component={Posts}></Route>
    
    </Switch>
    </div>
    </React.Fragment>
    
  );

};

};

export default AppCounters;



