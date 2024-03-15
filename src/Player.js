import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Équipe: {team}
          <br />
          Nationalité: {nationality}
          <br />
          Numéro: {jerseyNumber}
          <br />
          Âge: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
