import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {
  
  
  // console.log(props)
  return(

  // <div>
    
  //   <Image src={props.user.avatar_url} wrapped ui={false} />

  //   <div>
  //     <Card.Header>{props.user.name}</Card.Header>
  //     <Card.Meta>
    
  //     </Card.Meta>
  //     <h2>{props.user.bio}</h2>
  //   </div>
    
  // </div>


<div>
  
{props.followers.map(followers =>
  <div>{followers.login}</div>
  
  )}
  

</div>
  


)}






export default UserCard;
