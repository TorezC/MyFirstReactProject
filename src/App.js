import React, { Component } from 'react';
import './App.css';
import SearchBox from '../src/components/SearchBox';
import CardList from '../src/components/CardList';
import { robots } from './robots';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='header-r'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <hr />
        <CardList robots={filteredRobots} />
      </div>
    );
  }  
}

export default App;
