import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { name, photo, rating, year, color, description, _id } = product
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ background: '#1a212c', color: '#fff' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={photo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: '#fff' }} variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/purchaseOrder/${_id}`}>
                        <Button size="small">Parches Now</Button>
                    </Link>
                </CardActions>
            </Card>

        </Grid>

    );
};

export default Product;