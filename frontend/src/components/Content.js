import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from './NotFoundPage'
import UserManagement from './content/UserManagement'
import GroceryManagement from './content/GroceryManagement'
import Auth from './content/Auth'
import Main from './content/Main'
import Topnav from './Topnav'
import Sidenav from './Sidenav'


// password reset components
import Email from './content/password_reset/Email'
import VerificationCode from './content/password_reset/VerificationCode'
import NewPassword from './content/password_reset/NewPassword'

export default class Content extends Component {

  render() {
    return (
        <Switch>

            {/* protected routes */}
            <PrivateRoute exact path='/' component={UserManagement}/>
            <PrivateRoute exact path='/usermanagement' component={UserManagement}/>
            <PrivateRoute exact path='/grocerymanagement' component={GroceryManagement}/>
            

            {/* unprotected routes */}
            <ProtectedAuthRoute exact path='/login' component={Auth}/>
            <ProtectedAuthRoute exact path='/request/passoword/reset' component={Email}/>
            <ProtectedAuthRoute exact path='/verify/code' component={VerificationCode}/>
            <ProtectedAuthRoute exact path='/update/password' component={NewPassword}/>

            {/* if there is no matching route show 404 */}
            <Route component={NotFound}/>

        </Switch>
    )
  }
}

// check if user is authenticated
const checkUserAuth = () => {
  return true
}

// encapsulate requests that require authentication
function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        checkUserAuth() ? (
          <React.Fragment>
            <div className="d-flex">
                <Sidenav />
                <div className="main">
                  <Topnav />
                  <main className="content">
                    <div className="container-fluid p-0">
                      <Component {...props} />
                    </div>
                  </main>
                </div>
            </div> 
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

// when user is logged in they can not see the authentications screens again
function ProtectedAuthRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        checkUserAuth() ? (
          <Redirect
            to={{
              pathname: "/usermanagement",
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}