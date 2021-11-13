import { Container, Divider, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const FooterBottom = () => {
    return (
        <Container>
            <Divider sx={{ color: 'white' }} />
            <Grid sx={{ alignItems: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography sx={{ color: 'white', py: 3 }}>
                        Copyright &copy; 2021. All rights reserved Vehica Car House.Design By Al Imran.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ textAlign: 'end' }}>
                        <Typography sx={{ display: 'inline' }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Home</Link>
                        </Typography>
                        <Typography sx={{ mx: 4, display: 'inline' }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>About</Link>
                        </Typography>
                        <Typography sx={{ display: 'inline' }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 400, fontSize: '20px' }}>Contact</Link>
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default FooterBottom;