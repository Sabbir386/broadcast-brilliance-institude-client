import React, { useEffect, useState } from 'react';
import InstructorsData from './InstructorsData';

const InstructorPage = () => {
    const [instructorsPage, setInstructorsPage] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allinstructors')
            .then(res => res.json())
            .then(data => {
                setInstructorsPage(data);
            })
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    instructorsPage.map(data => <InstructorsData
                        data={data}
                        key={data._id}
                    ></InstructorsData>)


                }
            </div>

        </div>
    );
};

export default InstructorPage;