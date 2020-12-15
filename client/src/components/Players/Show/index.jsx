import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

import { Row, Col, Card } from 'react-bootstrap';
import Header from '../../shared/Header';


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
            <Header title={`${player.firstName} ${player.lastName}`} children="say what">

            </Header>
            <Row>
                <Col>
                    <Card key={player._id}>
                        <div className="card-header bg-primary">
                            <div className="text-white">
                                Expanded player card for {player.firstName} {player.lastName}
                            </div>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src={`http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espnId}.png`} alt="player image" />
                            {player.position} {player.team}
                            <div>
                                <Link to={`/players/edit/${player._id}`}>edit player</Link>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
      ) : null
    );
}

export default Player;