import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import "./Card.css"

export default function GameCard({id, name, image, occupation, handleClick}) {


  return (
    <Card id={id} onClick={(event, id) => handleClick(id)}>
      <Image src={image} wrapped ui={true} width="200" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
         {occupation}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name={name} />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )
}


