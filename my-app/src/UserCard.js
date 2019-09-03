import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {
  
  
  // console.log(props)
  return(

  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.{props.bio}
      </Card.Description>
    </Card.Content>
    
  </Card>

)}







export default UserCard;
