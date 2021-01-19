import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';
import requests from '../../services/requests';

function Login() {

    const { setUser, setToken } = useStoreActions(actions => actions.auth);
    const { user, token } = useStoreState(state => state.auth);

    console.log(user)

    const onClickLogin = () => {
        // Example requests
        requests.auth.login(
            {}, //payload
            (data) => {
                setUser(data?.user)//Example
                setToken(data?.token)//Example
            },
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div>
            <button onClick={onClickLogin}>Login</button>
        </div>
    )
}

export default Login;
