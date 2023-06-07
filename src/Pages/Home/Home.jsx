import React from 'react';
import Slider from '../HomeSection/Slider';
import Animation from '../HomeSection/Animation';
import PopularClasses from '../HomeSection/PopularClasses';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses />
            <Animation></Animation>

        </div>
    );
};

export default Home;