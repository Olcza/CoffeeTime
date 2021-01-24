import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Auth from './components/Auth/Auth';
import Cart from './components/Cart/Cart';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/cart" component={Cart}/>
      <Redirect to="/"/>
    </Switch>
  )
  return(
    <div>
      <Layout> 
        {routes}
      </Layout> 
    </div>
  );
};

export default App;
