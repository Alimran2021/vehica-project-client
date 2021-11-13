import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Box from '@mui/material/Box';
import SlideBanner from '../SlideBanner/SlideBanner';

const Home = () => {
    return (
        <Box>
            <Navber />
            <SlideBanner />
            <Products />
            <Reviews />
            <OurTeam />
            <Footer />
        </Box>
    );
};

export default Home;