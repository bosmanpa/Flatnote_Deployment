import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Login from '../components/Login'
import LoginCheck from '../components/LoginCheck'


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path="/" component={LoginCheck} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
