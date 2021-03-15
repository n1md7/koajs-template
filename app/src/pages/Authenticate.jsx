import useInputChange from "../hooks/useChange";
import React, {useEffect} from "react";
import useAuthenticate from "../hooks/useAuthenticate";
import {useHistory} from "react-router";
import Alert, {AlertType} from "../components/Alert";

export default function Authenticate() {
    const [username, setUsername] = useInputChange('');
    const [password, setPassword] = useInputChange('');
    const [authHandler, isOk, authError, requestSend] = useAuthenticate();
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        authHandler({username, password});
    };

    useEffect(() => {
        isOk && history.push('/');
        authError && Alert(authError, AlertType.ERROR);
    }, [requestSend]);

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-5">
                    <h3 className="my-3">User Authentication</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input onChange={setUsername} className="form-control" id="username"
                                   aria-describedby="emailHelp" placeholder="Username"/>
                            <small className="form-text text-muted">Enter your username</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={setPassword} type="password" className="form-control"
                                   id="password" placeholder="Password"/>
                            <small className="form-text text-muted">Enter your password</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Authenticate</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
