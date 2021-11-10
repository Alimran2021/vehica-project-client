import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import useProducts from '../../hooks/useProducts/useProducts';
import Navber from '../Shared/Navber/Navber';

const Explore = () => {
    const products = useProducts()
    return (
        <div>
            <Navber />
            <Container>
                <Box sx={{ flexGrow: 1, my: 8 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={product.photo}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>

                                        <Button size="small">Parches Now</Button>
                                    </CardActions>
                                </Card>

                            </Grid>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Explore;