import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import { Divider, Rating, Box } from '@mui/material';
const ManageProduct = ({ product, setProducts }) => {
    const { name, price, photo, rating, year, color, _id } = product
    const pdDeleteHandler = (id) => {
        fetch(`http://localhost:5005/productDelete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal({
                        title: "Are you sure?",
                        text: "Are you sure that you want to leave this page?",
                        icon: "warning",
                        dangerMode: true,
                    })
                        .then(willDelete => {
                            if (willDelete) {
                                swal("Deleted!", "Your imaginary file has been deleted!", "success");
                            }
                        });
                    const filter = product.filter(pd => pd._id == id)
                    setProducts(filter)

                }
            })
    }
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
                        <Button onClick={() => pdDeleteHandler(_id)} variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>

    );
};

export default ManageProduct;