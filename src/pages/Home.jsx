import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import WinterCareTips from '../components/WinterCare';
import MeetVets from '../components/MeetVets';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <WinterCareTips></WinterCareTips>
            <MeetVets></MeetVets>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;