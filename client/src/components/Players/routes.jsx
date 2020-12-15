import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import NoDice from './nodice';
import Index from './index';
import Edit from './Edit';

const Routes = () => {
    const { user } = useContext(UserContext);
    
    return (
      <Switch>
        {user && user.token ? (
          <>
            <Route exact path="/players" component={Index}/>
            {/* <Route exact path="/profile" component={Show}/> */}
            <Route exact path="/players/edit" component={Edit}/>
          </>
        ) : (
          <>
            <Route path="/players" component={NoDice}/> {/* remove "exact"; send NoDice for any players path */}
          </>
        )
        }
      </Switch>
    );
  }
 
export default Routes;