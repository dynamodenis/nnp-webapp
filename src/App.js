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

import { connect } from 'react-redux';
import Appointments from './pages/appointment/Appointments';
import Website from './pages/website/Website';
import About from './pages/website/About';

function App(props) {
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
        <Route exact path="/">
          <Website/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/verify-user">
          <OTP/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <PrivateRoute exact path="/home" component={LandingPage}>
          {/* <LandingPage/> */}
        </PrivateRoute>
        <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
        <PrivateRoute exact path="/trainings-dashboard/category/:category_id" component={Training}></PrivateRoute>
        <PrivateRoute exact path="/trainings-dashboard" component={Training}></PrivateRoute>
        <PrivateRoute exact path="/trainings-dashboard/category/:category_id/training/:training_id" component={TrainingDetails}></PrivateRoute>
        <PrivateRoute exact path="/trainer/courses" component={Trainer}></PrivateRoute>
        <PrivateRoute exact path="/trainer/courses/create" component={CreateCourse}></PrivateRoute>
        <PrivateRoute exact path="/users" component={Users}></PrivateRoute>
        <PrivateRoute exact path="/users/details/:id" component={Users}></PrivateRoute>
        <PrivateRoute exact path="/users/vendor/create" component={Vendors}></PrivateRoute>
        <PrivateRoute exact path="/users/sme/create" component={Smes}></PrivateRoute>
        <PrivateRoute exact path="/users/sme/edit/:id" component={Smes}></PrivateRoute>
        <PrivateRoute exact path="/users/edit/:id" component={EditUser}></PrivateRoute>
        <PrivateRoute exact path="/users/vendor/edit/:id" component={Vendors}></PrivateRoute>
        <PrivateRoute exact path="/marketplace" component={MarketPlace}></PrivateRoute>
        <PrivateRoute exact path="/marketplace/products/category" component={MarketPlace}></PrivateRoute>
        <PrivateRoute exact path="/marketplace/product/details/:product_id" component={MarketPlace}></PrivateRoute>
        <PrivateRoute exact path="/consultancy" component={Consultancy}></PrivateRoute>
        <PrivateRoute exact path="/consultancy/create" component={Consultancy}></PrivateRoute>
        <PrivateRoute exact path="/users/consultant/edit/:id" component={Consultancy}></PrivateRoute>
        <PrivateRoute exact path="/consultancy/details/:id" component={Consultancy}></PrivateRoute>
        <PrivateRoute exact path="/research" component={Researches}></PrivateRoute>
        <PrivateRoute exact path="/research/category" component={Researches}></PrivateRoute>
        <PrivateRoute exact path="/research/details/category/:category_id/research/:research_id" component={Researches}></PrivateRoute>
        <PrivateRoute exact path="/appointments" component={Appointments}></PrivateRoute>
        <PrivateRoute path="*" component={ErrorNotFound}></PrivateRoute>
      </Switch>
      {/* <Footer/> */}
    </>
  );
}

export default connect(null)(React.memo(App));
