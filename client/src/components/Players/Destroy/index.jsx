import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/players/delete`, { 
      _id: id,
      secret_token: user.token
    })
    .then(() => {
      setNotification({
        type: "success",
        message: "Player deleted"
      });
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `Couldn't delete the player. Error: ${error.message}`
      });
    });
  }, []);

  return <Redirect to="/players"/>;
}
 
export default Destroy;