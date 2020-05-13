import React from 'react';
import { Switch, Route } from 'react-router-dom'
import FullPost from './components/FullPost';
import PageNotFound from './components/PageNotFound';
import AppContainer from './components/AppContainer';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={AppContainer} />
      <Route path='/fullPost' component={FullPost}/>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </main>
)
export default Routes;
