import React from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useProducts from '../../../hooks/useProducts/useProducts';

const Products = () => {
    const products = useProducts()
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 8 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product key={product._id} product={product} />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;