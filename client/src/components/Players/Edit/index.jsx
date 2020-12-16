import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import PlayerForm from '../PlayerForm';

const Edit = () => {
  
  const { id } = useParams();
    // console.log(id);

  const { globalStore } = useContext(GlobalStoreContext);
  const { user } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:4000/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  const [playerDetails, setPlayerDetails] = useState([]);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/players/${id}`)
    .then(({ data }) => setPlayerDetails(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
          type: "danger",
          message: "Couldn't access the players at this time."
      });
    });
  }, []);

  return (
    userDetails && playerDetails ? (
      <>
        <Header title="Edit Player"/>
        
        <Container>
          <p>
            The content is editable under <strong>/src/components/Player/Edit/index.jsx</strong>
          </p>

          <PlayerForm
            preloadData={ userDetails, playerDetails }
            endpoint="/players/update"
            buttonLabel="Update Player"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;