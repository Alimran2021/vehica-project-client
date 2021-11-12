import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
// import useAuth from '../../../../hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import Alert from '@mui/material/Alert';


const DashboardReview = () => {
    const { user } = useAuth()
    const infoUser = { name: user.displayName, photo: user.photoURL }
    const [review, setReview] = useState(infoUser)
    const [success, setSuccess] = useState(false)
    const reviewHandler = e => {
        const field = e.target.name
        const value = e.target.value
        const newUser = { ...review }
        newUser[field] = value
        setReview(newUser)
        console.log(newUser)

    }

    const submitHandler = e => {
        e.preventDefault()
        fetch('https://guarded-savannah-01945.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    setReview("")
                }
            })

    }
    return (
        <>
            <Container>
                {success && <Alert severity="success">Your Reviews Successfully</Alert>}
                <Grid sx={{ alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <form onSubmit={submitHandler}>
                            <TextField
                                sx={{ my: 1, width: '100%', background: '#fff' }}
                                onBlur={reviewHandler}
                                id="filled-basic"
                                defaultValue={user?.displayName}
                                name="displayName"
                                type="text"
                                variant="filled"
                            /> <br />
                            <TextField
                                sx={{ my: 1, width: '100%', background: '#fff' }}
                                onBlur={reviewHandler}
                                multiline
                                rows={3}
                                id="filled-basic"
                                label="Comments"
                                placeholder="Input Your Comments Here"
                                name="comment"
                                type="text"
                                variant="filled"
                            /> <br />
                            <TextField
                                sx={{ my: 1, width: '100%', background: '#fff' }}
                                onBlur={reviewHandler}
                                id="filled-basic"
                                label="Rating"
                                placeholder="Input Rating Here"
                                name="rating"
                                type="number"
                                variant="filled"
                            /> <br />
                            <Button sx={{ width: '100%', my: 1 }} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default DashboardReview;