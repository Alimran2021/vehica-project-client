import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Divider, Rating } from '@mui/material';
import useProducts from '../../hooks/useProducts/useProducts';
import Navber from '../Shared/Navber/Navber';
import { NavLink } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Explore = () => {
    const { products } = useProducts()
    return (
        <Box>
            <Navber />
            <Container>
                <Box sx={{ flexGrow: 1, my: 8 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products?.map(product => <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ background: '#001e3c', color: '#fff', cursor: 'pointer' }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="180"
                                        image={product?.photo}
                                    />
                                    <Typography sx={{ position: 'relative', bottom: 27, ml: 28, background: '#ff4605', color: '#fff', fontSize: '22px', fontWeight: 'bold', borderRadius: '20px', padding: '5px 10px', width: '124px' }}>
                                        $ {product?.price}
                                    </Typography>
                                    <Box sx={{ p: 1 }}>
                                        <CardContent sx={{ pt: 0 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product?.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Typography sx={{ color: '#ff4605', fontSize: '17px' }} variant="body2" color="text.secondary">
                                                    {product?.color}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'white' }}>
                                                    <Rating name="read-only" value={product?.rating} readOnly />
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <Divider sx={{ color: 'white', m: 2 }} />
                                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography sx={{ background: '#ff4605', color: '#fff', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', padding: '3px 15px', marginRight: '20px' }}>
                                                {product?.year}
                                            </Typography>
                                            <NavLink style={{ textDecoration: 'none' }} to={`/purchaseOrder/${product?._id}`}>
                                                <Button sx={{ color: '#ff4605', fontSize: '17px' }} size="small">Parches Now <DoubleArrowIcon sx={{ fontSize: '18px', ml: 1 }} /> </Button>
                                            </NavLink>
                                        </CardActions>
                                    </Box>
                                </Card>

                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Explore;