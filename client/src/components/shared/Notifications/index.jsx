import React, { createContext, useState } from 'react';
import { Modal, Alert, Button } from 'react-bootstrap';

export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  // for the modal to show/hide
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1); // cannot use count++ because count is immutable (it can't change)
  const decrement = () => setCount(count - 1);


  const [isOpen, setIsOpen] = useState(notification ? true : false);
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setNotification(null);
    setIsOpen(false);
  };

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const modalLoaded = () => {
    setEndTime(Date.now());
  };



  /* const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); */

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification ? (
        <Modal 
        
        show={isOpen}
        onHide={hideModal}
        onEnter={startTimer}
        onEntered={modalLoaded}
        
        centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
            <Alert variant={notification.type}>
              {notification.message}
            </Alert>

            <Button 
              onClick={increment}
              variant="success"
            >+</Button>
            <Button disabled>{count}</Button>
            <Button 
              onClick={decrement}
              variant="danger"
              >-</Button>

          </Modal.Body>
        </Modal>
      ) : null}

      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;