import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

import Header from '../../shared/Header';
import PlayerCard from '../PlayerCard';

const Player = () => {

    const { id } = useParams();
    // console.log(id);

    const { globalStore } = useContext(GlobalStoreContext);
    const [player, setPlayer] = useState([]);
    const { setNotification } = useContext(NotificationContext);

    useEffect(() => {
        Axios.get(`${globalStore.REACT_APP_ENDPOINT}/players/${id}`)
        .then(({ data }) => setPlayer(data))
        .catch(error => {
        console.error(error.message);

        setNotification({
            type: "danger",
            message: "Couldn't access the players at this time."
        });
      });
    }, []);


    return (
      player ? (
        <>
            <Header title={`${player.firstName} ${player.lastName}`} children={`${player.position}, ${player.team}`}>

            </Header>
            <PlayerCard player={player}/>
        </>
      ) : null
    );
}

export default Player;