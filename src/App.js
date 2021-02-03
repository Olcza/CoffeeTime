import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Auth from './components/Auth/Auth';
import Cart from './components/Cart/Cart';
import Logout from './components/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const App = ({onTryAutoLogin, isAuth}) => {
  useEffect(() => {
    onTryAutoLogin()
  });

  let routes = (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/cart" component={Cart}/>
      <Redirect to="/"/>
    </Switch>
  )

if(isAuth) {
  routes = (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/logout" component={Logout}/>
      <Redirect to="/"/>
    </Switch>
  )
}

  return(
    <div>
      <Layout> 
        {routes}
      </Layout> 
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
