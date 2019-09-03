import React from 'react';

import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

import UserCard from "./UserCard"

class App extends React.Component {


    state = {
      users: []

      
    };

    componentDidMount() {
      axios
      .get("https://api.github.com/users/BenSolt")
      //.then(res => this.setState({ users: res.data }))
      .then(res => console.log(res))
      .catch(err => console.log("error"));
    
    }
      

// componentDidUpdate(){}

// fetchUsers = e => {
//     e.preventDefault();
//     fetch("https://api.github.com/users/BenSolt")
//       .then(res => res.json())
//       .then(res => this.setState({ users: res.data }))
//       .catch(err => console.log("noooo"));
//   };

  render() {
    return (
        <div className="App">
            <h1>Github-User Card</h1>  
             {/* <button onClick={this.fetchUsers}>Get User</button>  */}
            <UserCard 
            //key = {this.state.users.id}
            image= {this.state.users.avatar_url}
            Bio= {this.state.users.bio}
            name= {this.state.users.name}
            email= {this.state.users.email}
            
            />
        </div>
    
    );}

    }

ReactDOM.render(<App />, document.getElementById('root'));










export default App;
