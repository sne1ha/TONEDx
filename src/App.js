import {React, Component} from 'react';
import {Route, Switch} from 'react-router-dom';


// Pages
import Home from './containers/Home/Home';


class App extends Component {
  render(){
  return (
        <Switch>
          {/* <Route path='/' exact component={LandingPage}/> */}
          {/* <Route path='/Login' exact component={Login} /> */}
          <Route path='/Home' exact component={Home} />






        </Switch>
       
  );

}
}

export default App;
