import { Typography, Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box>
            <Typography sx={{ textAlign: 'center', color: 'white', my: 4 }} variant="h3">
                Oops! That page can’t be found.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center', color: '#ff4605' }} variant="h1">
                404
            </Typography>
            <Typography sx={{ textAlign: 'center', my: 4 }}>
                <NavLink style={{ p: 2, backgroundColor: '#ff4605', color: 'white', textDecoration: 'none', fontWeight: 'bold', borderRadius: '10px', padding: '5px 10px', width: '124px' }} to="/home">
                    Back to home page
                </NavLink>
            </Typography>
        </Box >
    );
};

export default PageNotFound;