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
import {getCartItemsFromStorage, getTotalFromStrorage} from './shared/localStorageActions';

const App = ({onTryAutoLogin, isAuth, onTrySetCartItems}) => {
  useEffect(() => {
    onTryAutoLogin();
    onTrySetCartItems();
  }, [onTryAutoLogin, onTrySetCartItems]);

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
    onTryAutoLogin: 
      () => dispatch(actions.authCheckState()),
    onTrySetCartItems: 
      () => dispatch(actions.addListOfCartItems(getCartItemsFromStorage(), getTotalFromStrorage()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
