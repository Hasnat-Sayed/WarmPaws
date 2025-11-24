import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import WinterCareTips from '../components/WinterCare';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;