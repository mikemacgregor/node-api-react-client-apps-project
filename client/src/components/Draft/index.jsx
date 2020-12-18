import React from 'react';
import Header from '../shared/Header';
import { Table, Card } from 'react-bootstrap';

const Draft = () => {
    return (
        <>
            <Header title="Draft Board" children="Let's draft!"></Header>
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Team1</th>
                        <th>Team2</th>
                        <th>Team3</th>
                        <th>Team4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>1</strong>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    content here
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    split off
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    into own
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    component
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>2</strong>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    content here
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    split off
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    into own
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    component
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>3</strong>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    content here
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    split off
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    into own
                                </Card.Body>
                            </Card>
                        </td>
                        <td className="m-0 p-0">
                            <Card>
                                <Card.Body>
                                    component
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Draft;