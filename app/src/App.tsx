import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Authenticate from './pages/Authenticate';
import Main from './pages/Main';
import UserSignUp from './pages/UserSignUp';
import {BrowserRouter} from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign-in" component={Authenticate}/>
                <Route path="/sign-up" component={UserSignUp}/>
                <ProtectedRoute path="/" exact component={Main}/>
                <Redirect to="/sign-in"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
