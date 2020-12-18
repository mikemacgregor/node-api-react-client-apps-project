import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const PlayerCard = ({player}) => {
    
    return player ? (
        <Col sm={6} className="m-0 p-0">
            <Card className="text-center border-0">
                <Card.Body>
                    <Link to={`/players/show/${player._id}`}>
                        <Card.Img variant="top" src={`http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${player.espnId}.png`} alt="player image" />
                    </Link>
                    <Card.Title>
                        {player.firstName} {player.lastName}
                    </Card.Title>
                    <Card.Subtitle>
                        {player.position}, {player.team}
                    </Card.Subtitle>
                    <Card.Text className="py-1">
                        <Link to={`/players/edit/${player._id}`}>edit</Link>&nbsp;|&nbsp;
                        <Link to={`/players/delete/${player._id}`}>delete</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ) : null;
}

export default PlayerCard;