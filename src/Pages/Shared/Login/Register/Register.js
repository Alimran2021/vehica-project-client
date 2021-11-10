import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';
const Register = () => {
    const [regiData, setRegiData] = useState({})
    // const registerAccount = useAuth()

    const regiChangeHandler = e => {
        const field = e.target.name
        const value = e.target.value
        const newUser = { ...regiData }
        newUser[field] = value
        setRegiData(newUser)

    }

    const submitRegiHandler = e => {
        e.preventDefault()
        // registerAccount(regiData.email, regiData.password, regiData.name)
    }
    return (
        <div>
            <form onSubmit={submitRegiHandler}>
                <TextField
                    sx={{ my: 1, width: '30%' }}
                    onBlur={regiChangeHandler}
                    id="filled-basic"
                    label="Name"
                    placeholder="Enter Your Name"
                    name="name"
                    type="text"
                    variant="filled"
                /> <br />
                <TextField
                    sx={{ my: 1, width: '30%' }}
                    onBlur={regiChangeHandler}
                    id="filled-basic"
                    label="Email"
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    variant="filled"
                /> <br />
                <TextField
                    sx={{ my: 1, width: '30%' }}
                    onBlur={regiChangeHandler}
                    id="filled-basic"
                    label="Password"
                    placeholder="Enter Your Password"
                    name="password"
                    type="password"
                    variant="filled"
                /> <br />
                <Button sx={{ width: '30%' }} type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default Register;