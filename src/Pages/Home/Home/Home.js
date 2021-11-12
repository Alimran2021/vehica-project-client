import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Navber />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;