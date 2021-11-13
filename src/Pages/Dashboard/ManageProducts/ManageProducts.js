import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
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
            fetch(`http://localhost:5005/productDelete/${id}`, {
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
                            <Card sx={{ background: '#1a212c', color: '#fff' }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product?.photo}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product?.name}
                                    </Typography>
                                    <Typography sx={{ color: '#fff' }} variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to={`/purchaseOrder/${product?._id}`}>
                                        <Button size="small">Parches Now</Button>
                                    </Link>
                                    <Button sx={{ color: 'red' }} onClick={() => pdDeleteHandler(product?._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </CardActions>
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