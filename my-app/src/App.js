import React from 'react';

import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

import UserCard from "./UserCard"
// import FollowerCard from "./FollowerCard"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user: {},
      followers:[]
    };
  }

  

   



    //  followersArray = [

    //   'paulsolt',
    //   'rojcewiczj',
    //   'rogermcconkiejr',
    //    'tetondan',
    //   'dustinmyers',
    // ];

    componentDidMount() {
      console.log("first rendre(mounting)");
      axios
      .get("https://api.github.com/users/BenSolt")
      .then(res => this.setState({ user: res.data }))
      //.catch(err => console.log("error"));
       axios
       .get("https://api.github.com/users/BenSolt/followers")
      
       .then(res => this.setState({ followers: res.data }))
    
    }
      

  // fetchUsers = e => {
  //     e.preventDefault();
  //     fetch("https://api.github.com/users/BenSolt/followers")
  //       .then(res => res.json())
  //       .then(res => this.setState({ followers: res.data }))
  //       .catch(err => console.log("noooo"));
  //   };







  render() {
    console.log('state', this.state)
    return (
        <div className="App">
            <h1>Github-User Card</h1>  
            {/* <button onClick={this.fetchUsers}>Get Followers</button>  */}
            <UserCard user={this.state.user}
            followers={this.state.followers}/>

            {/* //  key = {this.state.user.id}
            // image={this.state.user.avatar_url}
            // bio={this.state.user.bio}
            // name={this.state.user.name}
            // email={this.state.user.email}  */}
          
          



        </div>
    
    );}

    }

ReactDOM.render(<App />, document.getElementById('root'));










export default App;
