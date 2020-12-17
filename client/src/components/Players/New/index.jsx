import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import PlayerForm from '../PlayerForm';

const New = () => {
  return (
    <>
      <Header title="Add New Player">
      </Header>
      
      <Container>
        <p>
          Add new player comments
        </p>

        <PlayerForm endpoint="players"/>
      </Container>
    </>
  );
}
 
export default New;