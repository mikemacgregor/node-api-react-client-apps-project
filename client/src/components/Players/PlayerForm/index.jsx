import React, { useState, useContext }  from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const PlayerForm = ({ endpoint, preloadData = {}, buttonLabel }) => {

  const { globalStore } = useContext(GlobalStoreContext);
  const { player, setPlayer } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  const [inputs, setInputs] = useState({
    ...preloadData
  });
  const [redirect, setRedirect] = useState(false);

  console.log(inputs);
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (inputs) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/players/update`, {
        ...inputs
        // ,
        // secret_token: (user && user.token)
      })
      .then(({ data }) => {
        if (data && data.token) setPlayer(data);

        setNotification({
          type: "success",
          message: "Player updated" // could be created for a new player
        });

        setRedirect(true);
      })
      .catch(error => {
        console.error(error.message);

        setNotification({
          type: "danger",
          message: `There was an issue performing this action: ${error.message}`
        });
      });
    }
  };

  return (
    redirect ? (
      <Redirect to={`/players/${inputs._id}`}/>
    ) : (
      <Form onSubmit={handleSubmit}>
        <p>
          The content is editable under <strong>/src/components/Player/PlayerForm/index.jsx</strong>
        </p>

        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            onChange={handleChange}
            required
            defaultValue={inputs.firstName}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            onChange={handleChange}
            required
            defaultValue={inputs.lastName}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            name="position"
            onChange={handleChange}
            required
            defaultValue={inputs.position}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Team</Form.Label>
          <Form.Control
            name="team"
            onChange={handleChange}
            required
            defaultValue={inputs.team}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>ESPN Id</Form.Label>
          <Form.Control
            name="espnId"
            onChange={handleChange}
            required
            defaultValue={inputs.espnId}
          />
        </Form.Group>
  
        <Form.Group>
          <Button type="submit">{ buttonLabel || "Add New Player" }</Button>
        </Form.Group>
      </Form>
    )
  );
}
 
export default PlayerForm;