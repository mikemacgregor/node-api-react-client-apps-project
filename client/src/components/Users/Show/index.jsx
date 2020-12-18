import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Show = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
    .then(({ data }) => setUserDetails(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
          type: "danger",
          message: "Could not retrieve user details"
      });
    });
  }, []);

  return (
    userDetails ? (
      <>
        <Header title={userDetails.name} children={`Member since ${userDetails.createdAt.substring(0,10)}`}>

        </Header>

        <Container>

          <Media>
            <img
              src="https://via.placeholder.com/100"
              width={100}
              height={100}
              className="mr-2"
              alt={userDetails.name}
            />
            <Media.Body>
              <p>
                {userDetails.email}
              </p>

              <p>
                <Link to="/profile/edit">edit profile</Link>
              </p>
            </Media.Body>
          </Media>
        </Container>
      </>
    ) : null
  );
}
 
export default Show;