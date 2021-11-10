import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { googleHandler } = useAuth()

    const LoingChangeHandler = e => {
        const field = e.target.name
        const value = e.target.value
        const newUser = { ...loginData }
        newUser[field] = value
        setLoginData(newUser)

    }

    const submitLoginHandler = e => {
        e.preventDefault()
        // registerAccount(regiData.email, regiData.password, regiData.name)
    }
    return (
        <div>
            <form onSubmit={submitLoginHandler}>
                <TextField
                    sx={{ my: 1, width: '30%' }}
                    onBlur={LoingChangeHandler}
                    id="filled-basic"
                    label="Email"
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    variant="filled"
                /> <br />
                <TextField
                    sx={{ my: 1, width: '30%' }}
                    onBlur={LoingChangeHandler}
                    id="filled-basic"
                    label="Password"
                    placeholder="Enter Your Password"
                    name="password"
                    type="password"
                    variant="filled"
                /> <br />
                <Button sx={{ width: '30%' }} type="submit" variant="contained">Submit</Button>
            </form>
            <Button sx={{ width: '30%', my: 2 }} onClick={googleHandler} variant="contained">Google Sign In</Button>
        </div>
    );
};

export default Login;