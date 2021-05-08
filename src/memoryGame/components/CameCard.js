import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


export default function GameCard({ id, name, image, occupation, handleClick }) {
  return (
    <Card key={id} id={id} onClick={() => handleClick(id)}>
      <Image src={image} wrapped ui={true} width="250" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{occupation}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name={name} />
          111 Friends
        </a>
      </Card.Content>
    </Card>
  );
}