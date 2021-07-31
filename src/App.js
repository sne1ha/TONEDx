import {React, Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import firebase from "firebase/app";
import SignUp from './containers/Login/SignUp';
// Pages
// import SignUp from ''
import Home from './containers/Home/Home';
import Topics from './containers/Topics/topics';

class App extends Component {
  render(){
  return (
        <Switch>
          <Route path='/' exact component={SignUp}/>
          {/* <Route path='/Login' exact component={Login} /> */}
          <Route path='/Home' exact component={Home} />
          <Route path='/Topics' exact component={Topics} />
          






        </Switch>
       
  );

}
}

export default App;
