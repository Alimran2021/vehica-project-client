import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import useProducts from '../../hooks/useProducts/useProducts';
import { useParams } from 'react-router';
import { CardMedia, Typography } from '@mui/material';
import Navber from '../Shared/Navber/Navber';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth"
import { Container, Button } from '@mui/material';


const PurchaseOrder = () => {
    const products = useProducts()
    const { productId } = useParams()
    const { user } = useAuth()
    const productItem = products.filter(product => product?._id == productId)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = 'pendding'
        // const userData = { email: user.email, displayName: user?.displayName, productName: productItem[0]?.name, data }
        // console.log(userData)
        fetch('https://guarded-savannah-01945.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(data)
        handleSubmit('')
    };
    return (
        <>
            <Navber />
            <Container>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("name")} defaultValue={user?.displayName} /> <br />
                                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("email")} value={user?.email} /> <br />
                                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("productName")} value={productItem[0]?.name} /> <br />
                                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("adress")} /> <br />
                                <input style={{ margin: '5px', width: '70%', padding: '10px' }} type="number" {...register("number")} /> <br />
                                <Button style={{ margin: '5px', width: '70%' }} variant="outlined" type="submit">Submit</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default PurchaseOrder;