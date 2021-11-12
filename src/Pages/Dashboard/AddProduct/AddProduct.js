import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
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
                console.log(data)
            })
    }

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("name")} placeholder="Product Name" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} type="number" {...register("price")} placeholder="Product Price" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} type="number" {...register("year")} placeholder="Product Year" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("year")} placeholder="Product Color" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} type="number" {...register("rating")} placeholder="Rating" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("powerdBy")} placeholder="Powerd By" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("description")} placeholder="Description" /> <br />
                <input style={{ margin: '5px', width: '70%', padding: '10px' }} {...register("photo")} placeholder="Photo Url" /> <br />
                <Button style={{ margin: '5px', width: '70%' }} variant="outlined" type="submit">Add Product</Button>
            </form>
        </div>
    );
};

export default AddProduct;