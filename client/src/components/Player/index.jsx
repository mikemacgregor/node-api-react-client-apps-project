import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header from '../shared/Header';
import axios from 'axios';

const Player = () => {

    const [data, setData] = useState([]);
    const players = useMemo(() => data, [data]);

    useEffect(() => {
        axios.get('http://localhost:4000/players').then(resp => setData(resp.data));
    });

    return (
        <>
            <Header title="All Our Players" children="hello">

            </Header>
            {players.map((player, i) => (
            <Card>
                <div className="card-header bg-primary">
                <div className="text-white">
                    Player card for {player.firstName} {player.lastName}
                </div>
                </div>
                <div className="card-body">
                    {player.position} {player.team}
                </div>
            </Card>
            ))}
        </>
    )
}

export default Player;