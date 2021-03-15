import {useEffect, useState} from "react";
import store, {actionUpdate} from "../services/TokenStore";
import {httpClient} from '../services/HttpClient';
import {AxiosResponse} from 'axios';
import {useHistory} from 'react-router';

export default function useAuthStatus(): [boolean, boolean, string] {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            return history.push('/sign-in');
        }
        store.dispatch(actionUpdate({token}));
        httpClient
            .get<AxiosResponse>('v1/user/status')
            .then((data) => {
                setIsAuth(Boolean(data.status !== 401));
            })
            .catch(({message}) => setError(message))
            .then(() => setLoading(false))
    }, []);

    useEffect(() => {
        // TODO make timer there to update token
    })

    return [isAuth, isLoading, error];
};