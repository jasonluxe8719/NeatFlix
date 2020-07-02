import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import VideoIndexContainer from './video/video_index_container';
import TVShowsContainer from './video/tv_show_container';
import MoviesContainer from './video/movie_container';
import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/browse" component={VideoIndexContainer} />
      <ProtectedRoute exact path="/tvshows" component={TVShowsContainer} />
      <ProtectedRoute exact path="/movies" component={MoviesContainer} />
      <ProtectedRoute exact path="/search" component={SearchContainer} />
      <Route exact path ="/" component={GreetingContainer} />
      
    </Switch>
  </div>
);

export default App;