import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';
import './css/packages/fontawesome.min.css'
import './charts/ChartjsConfig';
import 'react-toastify/dist/ReactToastify.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Training from './pages/Training';
import TrainingDetails from './pages/TrainingDetails';
import Trainer from './pages/Trainer';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/training">
          <Training/>
        </Route>
        <Route exact path="/training/:id">
          <TrainingDetails/>
        </Route>
        <Route exact path="/trainer/courses">
          <Trainer/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
