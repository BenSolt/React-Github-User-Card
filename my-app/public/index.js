import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class App extends React.Component {
    // if you just need state, no binding, you don't need a constructor
    state = {
      user: [],
      
    };


fetchUser = e => {
    e.preventDefault();
    fetch("https://api.github.com/users/BenSolt")
      .then(res => res.json())
      .then(res => this.setState({ doggos: res.message }))
      .catch(err => console.log("noooo"));
  };