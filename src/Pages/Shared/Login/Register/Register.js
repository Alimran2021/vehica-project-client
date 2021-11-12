import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navber from '../../Navber/Navber';
import { Link } from 'react-router-dom';
const Register = () => {
    const [regiData, setRegiData] = useState({})
    const { registerAccount } = useAuth()

    const regiChangeHandler = e => {
        const field = e.target.name
        const value = e.target.value
        const newUser = { ...regiData }
        newUser[field] = value
        setRegiData(newUser)
        console.log(newUser)

    }

    const submitRegiHandler = e => {
        e.preventDefault()
        registerAccount(regiData.email, regiData.password, regiData.name)
        if (regiData) {
            alert('register successfully')
        }
    }
    return (
        <>
            <Navber />
            <Container>
                <Grid sx={{ alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={submitRegiHandler}>
                            <TextField
                                sx={{ my: 1, width: '80%', background: '#fff' }}
                                onBlur={regiChangeHandler}
                                id="filled-basic"
                                label="Name"
                                placeholder="Enter Your Name"
                                name="name"
                                type="text"
                                variant="filled"
                            /> <br />
                            <TextField
                                sx={{ my: 1, width: '80%', background: '#fff' }}
                                onBlur={regiChangeHandler}
                                id="filled-basic"
                                label="Email"
                                placeholder="Enter Your Email"
                                name="email"
                                type="email"
                                variant="filled"
                            /> <br />
                            <TextField
                                sx={{ my: 1, width: '80%', background: '#fff' }}
                                onBlur={regiChangeHandler}
                                id="filled-basic"
                                label="Password"
                                placeholder="Enter Your Password"
                                name="password"
                                type="password"
                                variant="filled"
                            /> <br />
                            <Button sx={{ width: '80%' }} type="submit" variant="contained">Submit</Button>
                        </form>
                        <Link to="/login">Already You Have An Account?Login Here</Link> <br />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;