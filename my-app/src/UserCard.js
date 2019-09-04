import React from 'react';

import './App.css';

import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = (props) => {

  return(
<div>
      <h2>{props.user.login}</h2>
      <img src={props.user.avatar_url} wrapped ui={false}/>
      
      <h2> {props.user.name}</h2>
      

      <div>
        {props.followers.map(followers => <div key={followers.id}>{followers.login}</div> )}
        <img src={followers.avatar_url} wrapped ui={false}/>

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
