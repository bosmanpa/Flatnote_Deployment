import React, { Component } from 'react';
import Notes from './Notes'
import NewNote from './NewNote'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Update from './Update'


class LoginCheck extends Component{
  render(){

  if(!this.props.current_user)
    return <Redirect to="/login" />

   return(
        <div>
            <Switch>
                <Route exact path='/dashboard' component={Notes} />
                <Route exact path='/newnote' component={NewNote} />
                <Route exact path='/update' component={Update}/>
            </Switch>
        </div>
   );
  }
}

const mapStateToProps = (state) => {
    return {current_user: state.current_user}
  }

export default connect(mapStateToProps)(LoginCheck)