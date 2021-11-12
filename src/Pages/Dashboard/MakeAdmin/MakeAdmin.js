import { TextField, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const adminHandler = e => {
        const admin = { email }
        e.preventDefault()
        fetch("https://guarded-savannah-01945.herokuapp.com/users/admin", {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <Container>
            <Typography sx={{ color: 'white' }} variant="h4">
                Make A Admin
            </Typography>
            <form onSubmit={adminHandler}>
                <TextField
                    sx={{ my: 1, width: '70%', background: '#fff' }}
                    onBlur={emailHandler}
                    id="filled-basic"
                    label="Email"
                    placeholder="Make a Admin Here"
                    name="email"
                    type="email"
                    variant="filled"
                /> <br />
                <Button type="submit" sx={{ width: '70%', mt: 3 }} variant="contained">Google Sign In</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;