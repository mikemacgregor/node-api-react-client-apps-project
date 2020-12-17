import React, { createContext, useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';

export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  // for the Modal to show/hide
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification ? (
        <Modal show={showModal} onHide={handleClose}>
        
          <Modal.Body>
            <Alert variant={notification.type}>
              {notification.message}
              <Button variant="secondary" onClick={handleClose}>
                x
              </Button>
            </Alert>

          </Modal.Body>
        </Modal>
      ) : null}

      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;