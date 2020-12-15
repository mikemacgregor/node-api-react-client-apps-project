import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';

import { Row, Col, Card } from 'react-bootstrap';
import Header from '../shared/Header';


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
            <Header title="All Our Players" children="hello">

            </Header>
            <Row>
                <Col>
                {players.map((player, i) => (
                    <Card key={player._id}>
                        <div className="card-header bg-primary">
                        <div className="text-white">
                            Player card for {player.firstName} {player.lastName}
                        </div>
                        </div>
                        <div className="card-body">
                            {player.position} {player.team}
                            <div>
                            <Link to={`/players/${player._id}`}>player page</Link>
                            </div>
                            <div>
                                <Link to={`/players/edit/${player._id}`}>edit player</Link>
                            </div>
                        </div>
                    </Card>
                ))}
                </Col>
            </Row>
        </>
      ) : null
    );
}

export default Player;