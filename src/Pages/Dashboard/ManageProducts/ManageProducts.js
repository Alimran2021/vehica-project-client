import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Divider, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import useProducts from '../../../hooks/useProducts/useProducts';


const ManageProducts = () => {
    const { products, setProducts } = useProducts()

    const pdDeleteHandler = (id) => {
        const procced = swal({
            title: "Are you sure?",
            text: "Are you sure delete this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Deleted successfully!", {
                        icon: "success",
                    });
                } else {
                    swal("Your product item safe!");
                }
            });
        if (procced) {
            fetch(`https://guarded-savannah-01945.herokuapp.com/productDelete/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const filter = products.filter(pd => pd._id !== id)
                        setProducts(filter)
                    }
                })
            console.log(id)
        }

    }
    return (
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
                                        <Button style={{ color: 'red' }} onClick={() => pdDeleteHandler(product?._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Card>

                        </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ManageProducts;