import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Box, Rating, Divider } from '@mui/material/';
import { NavLink } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './product.css'
const Product = ({ product }) => {
    const { name, price, photo, rating, year, color, _id } = product
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ background: '#001e3c', color: '#fff', cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="180"
                    image={photo}
                />
                <Typography sx={{ position: 'relative', bottom: 27, ml: 28, background: '#ff4605', color: '#fff', fontSize: '22px', fontWeight: 'bold', borderRadius: '20px', padding: '5px 10px', width: '124px' }}>
                    $ {price}
                </Typography>
                <Box sx={{ p: 1 }}>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ color: '#ff4605', fontSize: '17px' }} variant="body2" color="text.secondary">
                                {color}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white' }}>
                                <Rating name="read-only" value={rating} readOnly />
                            </Typography>
                        </Box>
                    </CardContent>
                    <Divider sx={{ color: 'white', m: 2 }} />
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ background: '#ff4605', color: '#fff', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', padding: '3px 15px', marginRight: '20px' }}>
                            {year}
                        </Typography>
                        <NavLink style={{ textDecoration: 'none' }} to={`/purchaseOrder/${_id}`}>
                            <Button sx={{ color: '#ff4605', fontSize: '17px' }} size="small">Parches Now <DoubleArrowIcon sx={{ fontSize: '18px', ml: 1 }} /> </Button>
                        </NavLink>
                    </CardActions>
                </Box>
            </Card>

        </Grid>
    );
};

export default Product;