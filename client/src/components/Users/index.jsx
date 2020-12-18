import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { Table } from 'react-bootstrap';
import Header from '../shared/Header';

const Users = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [users, setUsers] = useState([]);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users`)
    .then(({ data }) => setUsers(data))
    .catch(error => {
      console.error(error.message);

      setNotification({
        type: "danger",
        message: "Couldn't access the users at this time."
      });
    });
  }, []);

  return (
    users ? (
      <>
        <Header title="All Users">

        </Header>

        <Table responsive striped size="sm">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>

          <tbody>
            {users.map(({_id, name, email}, i) => (
              <tr key={_id}>
                <td><small>{name}</small></td>
                <td><small>{email}</small></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    ) : null
  );
}
 
export default Users;