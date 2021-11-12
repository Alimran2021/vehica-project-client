import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import Navber from '../../Navber/Navber';
import { useLocation, useHistory } from 'react-router';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { googleHandler, singInEmailPass } = useAuth()
    const location = useLocation()
    const history = useHistory()

    const googleLoginHandler = (location, history) => {
        googleHandler(location, history)
    }

    const LoingChangeHandler = e => {
        const field = e.target.name
        const value = e.target.value
        const newUser = { ...loginData }
        newUser[field] = value
        setLoginData(newUser)

    }

    const submitLoginHandler = e => {
        e.preventDefault()
        singInEmailPass(loginData.email, loginData.password, location, history)
        if (loginData) {
            alert('login successfully')
        }
    }
    return (
        <>
            <Navber />
            <Container>
                <Grid sx={{ alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <form onSubmit={submitLoginHandler}>
                            <TextField
                                sx={{ my: 1, width: '100%', background: '#fff' }}
                                onBlur={LoingChangeHandler}
                                id="filled-basic"
                                label="Email"
                                placeholder="Enter Your Email"
                                name="email"
                                type="email"
                                variant="filled"
                            /> <br />
                            <TextField
                                sx={{ my: 1, width: '100%', background: '#fff' }}
                                onBlur={LoingChangeHandler}
                                id="filled-basic"
                                label="Password"
                                placeholder="Enter Your Password"
                                name="password"
                                type="password"
                                variant="filled"
                            /> <br />
                            <Button sx={{ width: '100%', my: 1 }} type="submit" variant="contained">Login</Button>
                        </form>
                        <Link to="/register">Create A New Account?Register Here</Link> <br />
                        <Button sx={{ width: '100%', mt: 3 }} onClick={googleLoginHandler} variant="contained">Google Sign In</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img style={{ width: '100%' }} src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;