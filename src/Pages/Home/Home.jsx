import React from 'react';
import Slider from '../HomeSection/Slider';
import Animation from '../HomeSection/Animation';
import PopularClasses from '../HomeSection/PopularClasses';
import PopularInstructors from '../HomeSection/PopularInstructors';
import ReactSpringAnimate from '../HomeSection/ReactSpringAnimate';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses />
            <PopularInstructors />
            <Animation></Animation>
            <ReactSpringAnimate></ReactSpringAnimate>

        </div>
    );
};

export default Home;