import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchText: ''
  };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}));
  }
  handlechange = (e) => this.setState( {searchText: e.target.value} )
  render(){
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox 
          placeholder = 'search Monsters'
          handlechange = {this.handlechange}/>
        
          
        <CardList monsters={filteredMonsters}/>
      
      </div>
        
        )            
  }
}


export default App;

