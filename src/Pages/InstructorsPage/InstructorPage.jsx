import React, { useEffect, useState } from 'react';
import InstructorsData from './InstructorsData';
import useTitle from '../../Hooks/useTitle';

const InstructorPage = () => {
    const [instructorsPage, setInstructorsPage] = useState([]);
    useTitle('InstructorPage ')
    useEffect(() => {
        fetch('https://broadcast-brilliance-institude-server-side.vercel.app/allinstructors')
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