import React, { useEffect, useState } from 'react';
import ClassesPageSingleData from './ClassesPageSingleData';

const ClassesPage = () => {
    const [classPagedata, setClassPageData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setClassPageData(data);
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                classPagedata.map(singleData => <ClassesPageSingleData
                    singleData={singleData}
                    key={singleData._id}
                ></ClassesPageSingleData>)

            }


        </div>
    );
};

export default ClassesPage;