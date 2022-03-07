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
import CreateCourse from './pages/CreateCourse';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import MarketPlace from './pages/vendors/MarketPlace';
import LandingPage from './pages/dashboard/LandingPage';
import Consultancy from './pages/consultancy/Consultancy';

import Alert from './partials/utils/Alert';
import OTP from './pages/OTP';
import Vendors from './pages/vendors_management/Vendors';
import Smes from './pages/smes_management/Smes';
import ErrorNotFound from './pages/ErrorNotFound';
import Researches from './pages/research _management/Researches';
import PrivateRoute from './partials/utils/PrivateRoute';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Alert/>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/verify-user">
          <OTP/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <PrivateRoute exact path="/" component={LandingPage}>
          {/* <LandingPage/> */}
        </PrivateRoute>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/trainings-dashboard/category/:category_id">
          <Training/>
        </Route>
        <Route exact path="/trainings-dashboard">
          <Training/>
        </Route>

        <Route exact path="/trainings-dashboard/category/:category_id/training/:training_id">
          <TrainingDetails/>
        </Route>
        <Route exact path="/trainer/courses">
          <Trainer/>
        </Route>
        <Route exact path="/trainer/courses/create">
          <CreateCourse/>
        </Route>
        <Route exact path="/users">
          <Users/>
        </Route>
        <Route exact path="/users/details/:id">
          <Users/>
        </Route>
        <Route exact path="/users/vendor/create">
          <Vendors/>
        </Route>
        <Route exact path="/users/sme/create">
          <Smes/>
        </Route>
        <Route exact path="/users/sme/edit/:id">
          <Smes/>
        </Route>
        <Route exact path="/users/edit/:id">
          <EditUser/>
        </Route>
        <Route exact path="/users/vendor/edit/:id">
          <Vendors/>
        </Route>
        <Route exact path="/marketplace">
          <MarketPlace/>
        </Route>
        <Route exact path="/marketplace/products/category">
          <MarketPlace/>
        </Route>
        <Route exact path="/marketplace/product/details/:product_id">
          <MarketPlace/>
        </Route>
        <Route exact path="/consultancy">
          <Consultancy/>
        </Route>
        <Route exact path="/consultancy/create">
          <Consultancy/>
        </Route>
        <Route exact path="/users/consultant/edit/:id">
          <Consultancy/>
        </Route>
        <Route exact path="/consultancy/details/:id">
          <Consultancy/>
        </Route>
        <Route exact path="/research">
          <Researches/>
        </Route>
        <Route exact path="/research/category">
          <Researches/>
        </Route>
        <Route exact path="/research/details/category/:category_id/research/:research_id">
          <Researches/>
        </Route>
        <Route path="*">
          <ErrorNotFound/>
        </Route>
      </Switch>
      {/* <Footer/> */}
    </>
  );
}

export default App;
