import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor';

const PopularInstructors = () => {
    const [instructorsData, setInstructorsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allinstructors')
            .then(res => res.json())
            .then(data => {
                setInstructorsData(data);
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