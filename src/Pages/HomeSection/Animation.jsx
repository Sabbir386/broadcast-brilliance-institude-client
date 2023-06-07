import React from 'react';
import Lottie from 'react-lottie';
import animate from '../../../public/lottie-news.json'

const Animation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animate,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <Lottie options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
};

export default Animation;