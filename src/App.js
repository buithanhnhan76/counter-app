import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import Pagination from './components/common/pagination';
import { getGenres } from './services/fakeGenreServices';
import { getProducts } from './services/fakeProductServices';
import AboutUs from './components/aboutUs';
import {Route, Switch} from 'react-router-dom';
import Posts from './components/posts';
import AppCounters from './components/appCounters';
import Home from './components/home';
import PostDetails from './components/postDetails';


class App extends Component {
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
    <NavBar></NavBar>
    <div className="content">
    {/* if you have a space like  {AboutUs} ></Route> it not gonna work*/}
    <Switch>
    <Route path="/aboutus" component={AboutUs}></Route>
    <Route path="/posts/:id" component={PostDetails}></Route>
    <Route path="/posts" component={Posts}></Route>
    <Route path="/appcounters" component={AppCounters}></Route>
    <Route path="/" component={AppCounters}></Route>
    
    </Switch>
    </div>
    </React.Fragment>
    
  );

};

};

export default App;



