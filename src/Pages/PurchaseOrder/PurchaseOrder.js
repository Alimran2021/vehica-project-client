import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import useProducts from '../../hooks/useProducts/useProducts';
import { useParams } from 'react-router';
import { CardMedia, Typography } from '@mui/material';
import Navber from '../Shared/Navber/Navber';

const PurchaseOrder = () => {
    const products = useProducts()
    const { productId } = useParams()
    const productItem = products.filter(product => product?._id == productId)
    console.log(productItem[0]?.name)
    return (
        <>
            <Navber />
            <Box sx={{ width: '100%', my: 8 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image={productItem[0]?.photo}
                        />
                        <Typography variant="h4">
                            {productItem[0]?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>

                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default PurchaseOrder;