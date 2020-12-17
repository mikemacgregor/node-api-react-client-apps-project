import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';

import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';

import { CardGroup } from 'react-bootstrap';
import Header from '../shared/Header';
import PlayerCard from './PlayerCard';
import StyledButton from './styles.jsx';

const Player = () => {

    const { globalStore } = useContext(GlobalStoreContext);
    const [players, setPlayers] = useState([]);
    const { setNotification } = useContext(NotificationContext);

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/players`)
        .then(({ data }) => setPlayers(data))
        .catch(error => {
        console.error(error.message);

        setNotification({
            type: "danger",
            message: "Couldn't access the players at this time."
        });
      });
    }, []);


    return (
      players ? (
        <>
            <StyledButton href="/players/create" variant="primary" size="sm">Add New Player</StyledButton>
            <Header title="All Players" children="">

            </Header>
            <CardGroup>
                {players.map((player, i) => (
                    <PlayerCard key={player._id} player={player}/>
                ))}
            </CardGroup>
        </>
      ) : null
    );
}

export default Player;