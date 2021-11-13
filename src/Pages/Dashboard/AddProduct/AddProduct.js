import React from 'react';
import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://guarded-savannah-01945.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "You added a product", "success");
                    reset()
                }

                console.log(data)
            })
    }

    return (
        <Box>
            <Typography sx={{ color: 'white', textAlign: 'center', my: 4 }} variant="h4">
                Add A Product
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} {...register("name")} placeholder="Product Name" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} type="number" {...register("price")} placeholder="Product Price" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} type="number" {...register("year")} placeholder="Product Year" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} {...register("year")} placeholder="Product Color" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} type="number" {...register("rating")} placeholder="Rating" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} {...register("powerdBy")} placeholder="Powerd By" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} {...register("description")} placeholder="Description" /> <br />
                            <input style={{ margin: '5px', width: '100%', padding: '10px' }} {...register("photo")} placeholder="Photo Url" /> <br />
                            <Button style={{ margin: '5px', width: '30%', color: '#ff4605' }} variant="outlined" type="submit">Add Product</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://i.ibb.co/Y3nQp4G/car-prev-ui.png" alt="" />
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
};

export default AddProduct;