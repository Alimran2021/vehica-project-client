import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Rating, Container, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://guarded-savannah-01945.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'white', textAlign: 'center' }} variant="h4">
                Our Customer Reviews
            </Typography>
            <List sx={{ width: '100%', background: '#001e3c', color: '#fff', my: 7 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        reviews.map(review => <Grid item sx={{ my: 2 }} xs={12} sm={4} md={4}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={review.photo} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={review.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{
                                                    display: 'inline',
                                                    color: 'white'
                                                }}
                                                component="span"
                                                variant="body2"
                                            >
                                                Comments
                                            </Typography>
                                            <Typography sx={{ display: 'inline', color: 'white' }}>
                                                {` — ${review.comment}`}
                                            </Typography>
                                            <Typography>
                                                <Rating name="read-only" value={review.rating} readOnly />
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider orientation="vertical" flexItem></Divider>
                        </Grid>
                        )
                    }
                </Grid>
            </List>
        </Container>
    );
};

export default Reviews;