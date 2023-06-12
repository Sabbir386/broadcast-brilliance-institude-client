import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import animate from '../../../src/assets/slider/breakingnews.jpg'


const ReactSpringAnimate = () => {
    const [flip, setFlip] = useState(false);
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => setFlip(!flip)


    }
    );
    return (
        <div>

            <animated.div style={props}>
                <img className='mx-auto my-5 rounded-lg' src={animate} alt="" />
            </animated.div>


        </div>
    );
};

export default ReactSpringAnimate;