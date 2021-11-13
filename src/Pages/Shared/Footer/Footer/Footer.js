import React from 'react';
import FooterBottom from '../FooterBottom/FooterBottom';
import FooterTop from '../FooterTop/FooterTop';
import Box from '@mui/material/Box';
const Footer = () => {
    return (
        <Box sx={{ background: '#001e3c', pt: 3 }}>
            <FooterTop />
            <FooterBottom />
        </Box>
    );
};

export default Footer;