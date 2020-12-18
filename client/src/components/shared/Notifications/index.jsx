import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

export const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  // let's clear the notification after 2.5 seconds
  useEffect(() => {
    setTimeout(function(){ 
      setNotification(null) 
    }, 2500);
    
  });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {notification ? (
        <Alert className="mb-0" variant={notification.type}>
          {notification.message}
        </Alert>
      ) : null}

      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;