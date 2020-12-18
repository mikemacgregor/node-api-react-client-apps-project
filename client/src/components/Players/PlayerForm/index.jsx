import React, { useState, useContext }  from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const PlayerForm = ({ endpoint, preloadData = {}, buttonLabel }) => {

  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  const [inputs, setInputs] = useState({
    ...preloadData
  });
  const [redirect, setRedirect] = useState(false);

  // console.log(inputs);
  
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
      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
        ...inputs
        // ,
        // secret_token: (user && user.token)
      })
      .then(({ data }) => {
        if (data) setInputs(data);
        // console.log(inputs);
      })
      .then(() => {
        setNotification({
          type: "success",
          message: "Player added or updated"
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
      <Redirect to="/players"/> // {`/players/${inputs._id}`} to return to specific player need to have api return the _id
                                // which is not available for either create or update from .then({data}) => setInputs(data), above
    ) : (
      <Form onSubmit={handleSubmit}>
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