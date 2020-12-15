import React from 'react';
import DraftRoutes from '../../Draft/routes';
import PlayerRoutes from '../../Players/routes';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <DraftRoutes/>
      <PlayerRoutes/>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;