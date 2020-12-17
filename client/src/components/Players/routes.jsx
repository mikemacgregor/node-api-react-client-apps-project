import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import NoDice from './nodice';
import Index from './index';
import Show from './Show';
import New from './New';
import Edit from './Edit';

const Routes = () => {
    const { user } = useContext(UserContext);
    
    return (
      <Switch>
        {user && user.token ? (
          <>
            <Route exact path="/players" component={Index}/>
            <Route exact path="/players/show/:id" component={Show}/>
            <Route exact path="/players/create" component={New}/>
            <Route exact path="/players/edit/:id" component={Edit}/>
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