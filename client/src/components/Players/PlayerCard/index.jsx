import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PlayerCard = ({player}) => {
    
    return player ? (
        <Card key={player._id} className="text-center">
            <Card.Body>
                <Link to={`/players/${player._id}`}>
                    <Card.Img variant="top" src={`http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espnId}.png`} alt="player image" />
                </Link>
                <Card.Title>
                    {player.firstName} {player.lastName}
                </Card.Title>
                <Card.Subtitle>
                    {player.position}, {player.team}
                </Card.Subtitle>
                <Card.Text className="py-1">
                    <Link to={`/players/edit/${player._id}`}>edit player</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    
    ) : null;
}

export default PlayerCard;