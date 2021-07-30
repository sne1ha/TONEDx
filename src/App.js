import {React, Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import CommunityPage from './containers/CommunityPage/CommunityPage';
// import firebase from "firebase/app";
import SignUp from './containers/Login/SignUp';
// Pages
// import SignUp from ''
import Home from './containers/Home/Home';


class App extends Component {
  render(){
  return (
        <Switch>
          <Route path='/' exact component={SignUp}/>
          {/* <Route path='/Login' exact component={Login} /> */}
          <Route path='/Home' exact component={Home} />
          <Route path='/CommunityPage' exact component={CommunityPage} />
          






        </Switch>
       
  );

}
}

export default App;
