import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterTop = () => {
    return (
        <Container>
            <Box sx={{ width: '100%', my: 4 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ cursor: 'pointer' }} item xs={12} sm={3}>
                        <img src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-white-retina-165x29.png" alt="" />
                        <Typography sx={{ my: 2 }}>
                            <FacebookOutlinedIcon sx={{ color: '#ff4605', fontSize: '38px' }} />
                            <InstagramIcon sx={{ color: '#ff4605', fontSize: '38px' }} />
                            <LinkedInIcon sx={{ color: '#ff4605', fontSize: '38px' }} />
                        </Typography>

                    </Grid>
                    <Grid sx={{ display: 'flex' }} item xs={12} sm={3}>
                        <Box sx={{ mr: 8 }}>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Listings</Link>
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>FAQ</Link>
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>About us</Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Blog</Link>
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Our team</Link>
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                                <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Contact</Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography sx={{ color: 'white', fontSize: '18px' }} variant="body1">
                            Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city.
                            Lowest prices and the best customer service guaranteed.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography sx={{ mb: 1 }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '30px' }}>(123) <Typography sx={{ color: '#ff4605', display: 'inline', fontSize: '30px', fontWeight: 'bold' }}>456-78901</Typography></Link>
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>support@vehica.com</Link>
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>West 12th Street
                                New York, NY, USA</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default FooterTop;