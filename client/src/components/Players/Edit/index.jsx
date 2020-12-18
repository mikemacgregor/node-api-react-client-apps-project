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

  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [playerDetails, setPlayerDetails] = useState(null);
  const { setNotification } = useContext(NotificationContext);
  
  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/players/${id}?secret_token=${user.token}`)
    .then(({ data }) => setPlayerDetails(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
          type: "danger",
          message: "Couldn't access the players at this time."
      });
    });
  }, []);

  // console.log(playerDetails);

  return (
    playerDetails ? (
      <>
        <Header title="Edit Player" children={`${playerDetails.firstName} ${playerDetails.lastName}`} />
        
        <Container>

          <PlayerForm
            preloadData={ playerDetails }
            endpoint="players/update"
            buttonLabel="Update Player"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;