import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <div>
      {players.map(player => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
