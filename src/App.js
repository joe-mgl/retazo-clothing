import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user-actions';
import './App.css';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase-util';

const mapStateToProps = ({ userReducer }) => ({
  currentUser: userReducer.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setUser(user))
  })

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route 
            path='/signin' 
            render={() => 
              this.props.currentUser 
              ? (<Redirect to='/' />) 
              : (<SignInSignUp />)
            } />
      </Switch>
    </div>
  );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
