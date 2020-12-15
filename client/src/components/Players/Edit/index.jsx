import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import PlayerForm from '../PlayerForm';

const Edit = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:4000/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  return (
    userDetails ? (
      <>
        <Header title="Edit Player"/>
        
        <Container>
          <p>
            The content is editable under <strong>/src/components/Player/Edit/index.jsx</strong>
          </p>

          <PlayerForm
            preloadData={ userDetails }
            endpoint="/players/update"
            buttonLabel="Update Player"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;