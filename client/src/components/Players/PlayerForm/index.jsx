import React from 'react';
import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { PlayerContext } from '../PlayerProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect, useParams } from 'react-router-dom';

const PlayerForm = ({ endpoint, preloadData = {}, buttonLabel }) => {

  const { id } = useParams();
    // console.log(id);

  const { globalStore } = useContext(GlobalStoreContext);    
  const { player, setPlayer } = useContext(PlayerContext);
  const { setNotification } = useContext(NotificationContext);

  const [inputs, setInputs] = useState({
    ...preloadData
  });
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (inputs && inputs.email) {
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, { // add /:id for edit
        ...inputs,
        _id: player._id
      })
      .then(({ data }) => {
        if (data && data.token) setPlayer(data);

        setNotification({
          type: "success",
          message: "This action was performed successfully."
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
      <Redirect to={`/players/${id}`}/>
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