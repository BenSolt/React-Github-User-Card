import React from 'react';

import './App.css';

import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {

  return(
<div className="cardholder">

  <div className="card">

    <h2>{props.user.login}</h2>
    <img className="img" src={props.user.avatar_url} wrapped ui={false}/>
    <h5>{props.user.bio}</h5>

  </div>
      
      
      

      <div className="card">
        {props.followers.map(followers => <div key={followers.id}> <h2>{followers.login}</h2>
        <img className="img" src={followers.avatar_url}></img>
        <h5>{followers.bio}</h5>
        </div> )}
        

      </div>

      </div>
  );
}



  
  
  // console.log(props)
 

  // <Card>
    
  //   <Image src={props.user.avatar_url} wrapped ui={false} />

  //   <Card.Content>
  //     <Card.Header>{props.user.name}</Card.Header>
  //     <Card.Meta>
    
  //     </Card.Meta>
  //     <Card.Description>{props.user.bio}</Card.Description>
  //   </Card.Content>
    
  // </Card>

      


export default UserCard;
