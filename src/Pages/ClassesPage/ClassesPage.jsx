import React, { useEffect, useState } from 'react';
import ClassesPageSingleData from './ClassesPageSingleData';
import useTitle from '../../Hooks/useTitle';

const ClassesPage = () => {
    const [classPagedata, setClassPageData] = useState([]);
    useTitle('classesPage')
    useEffect(() => {
        fetch('https://broadcast-brilliance-institude-server-side.vercel.app/allClasses')
            .then(res => res.json())
            .then(data => {
                const reamining = data.filter(approvedData => approvedData.status == 'Approved')
                setClassPageData(reamining);
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