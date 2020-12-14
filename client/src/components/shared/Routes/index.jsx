import React from 'react';
import DraftRoutes from '../../Draft/routes';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

const Routes = () => {
  return (
    <>
      <DraftRoutes/>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
    </>
  );
}
 
export default Routes;