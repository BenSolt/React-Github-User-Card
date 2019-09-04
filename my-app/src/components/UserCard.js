import React from 'react';

import './App.css';

import { Card, Icon, Image } from 'semantic-ui-react'





const UserCard = (props) => {
  

  return(

  
<div className="cardholder">

  <div className="card">

    <h3>{props.user.login}</h3>
    <img className="img" src={props.user.avatar_url} wrapped ui={false}/>
    <h5>{props.user.bio}</h5>

  </div>
      
      <div className="followers">

        <h2>Followers</h2>

      
        <div className="cardholder2">

       

          {props.followers.map(followers => <div className= "card2"key={followers.id}> <h3>{followers.login}</h3>
        <img className="img2" src={followers.avatar_url}></img>
        

        </div> )}


        </div>
       

      </div>

      </div>//End Card Holder
  );
 }
 

  

    
export default UserCard;
