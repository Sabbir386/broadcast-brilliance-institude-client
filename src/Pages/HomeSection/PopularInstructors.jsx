import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';
import axios from 'axios';
import { Result } from 'postcss';

const PopularInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);

    useEffect(() => {
        axios.get('https://broadcast-brilliance-institude-server-side.vercel.app/allinstructors')
            .then(result => {
                setInstructorsData(result.data);
            })
    }, [])

    return (
        <div>
            <h3 className='text-xl font-semibold text-center mt-12 mb-8 '>Popular Instructor Section</h3>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    instructorsData.map(instructorData => <SingleInstructor
                        instructorData={instructorData}
                        key={instructorData._id}
                    ></SingleInstructor>)

                }
            </div>

        </div>
    );
};

export default PopularInstructors;