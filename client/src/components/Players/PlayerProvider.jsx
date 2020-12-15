import React, { createContext, useState } from 'react';
import { Alert } from 'react-bootstrap';

export const PlayerContext = createContext();

const PlayerProvider = ({children}) => {
  const [player, setPlayer] = useState(null);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {player ? (
        <Alert variant={player.id}>
          {player.message}
        </Alert>
      ) : null}

      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;