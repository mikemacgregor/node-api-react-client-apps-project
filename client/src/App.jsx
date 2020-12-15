import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import './styles.css';

import Routes from './components/shared/Routes';
import UserProvider from './components/Authentication/UserProvider';
import NotificationProvider from './components/shared/Notifications';
import GlobalStoreProvider from './components/shared/Globals';

const App = () => {
  return (
    <GlobalStoreProvider>
      <NotificationProvider>
        <UserProvider>
          <BrowserRouter>
            <Navigation/>
            <Container fluid className="mx-0 my-2 px-2">
              <Routes/>
            </Container>
            <Footer/>
          </BrowserRouter>
        </UserProvider>
      </NotificationProvider>
    </GlobalStoreProvider>
  );
}
 
export default App;