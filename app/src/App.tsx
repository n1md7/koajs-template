import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Authentication from './pages/Authentication';
import Main from './pages/Main';
import Registration from './pages/Registration';
import './App.scss';

function App() {

    return (
        <Switch>
            <Route path="/sign-in" component={Authentication}/>
            <Route path="/sign-up" component={Registration}/>
            <ProtectedRoute path="/" exact component={Main}/>
            <Redirect to="/"/>
        </Switch>
    );
}

export default App;
