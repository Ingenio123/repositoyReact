import React from 'react';
import ReactDOM from 'react-dom';
import './assets/components/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './assets/components/default.css';
import  {Profile} from './components/profileTeacher/Profile'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import SignIn from './components/Forms/SignIn';
import SignUp from './components/Forms/SignUp';

import  PrivateRouter from './Routes/PrivateRoute'
import  UserPrivate from './components/Private/UserPrivate'

import formCheckOutPay from './components/Pay/formCheck'

import Home from './home'
// admins 
import {AdminRoute} from './Routes/AdminRoute';
import {Admin} from './components/Private/Admin'; 

import {TeacherRoutes} from './Routes/TeacherRoute'
import {Teacher} from './components/Private/Teacher'
import resultDatafast from './components/Pay/PageResultDatafast'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
          <App/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact  path='/ProfileTeachers/:idTeacher'  component={Profile} />
            <Route exact  path='/SignIn' component={SignIn}  />
            <Route exact  path='/SignUp' component={SignUp}  />
            <Route exact   path="/payclient" component={formCheckOutPay} />
            <PrivateRouter path='/private' exact  component={UserPrivate} />
            <AdminRoute path="/admin" exact component={Admin} />
            <TeacherRoutes  path='/teacherPage' exact  component={Teacher} />
            <Route exact path="/results/" component={resultDatafast} />
          </Switch>
      </Router>
    </Provider>
 
  </React.StrictMode>,
  
  document.getElementById('root')
  );
  

