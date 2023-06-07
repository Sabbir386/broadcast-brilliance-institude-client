import React, { useEffect, useState } from 'react';
import SingleClassData from './SingleClassData';

const PopularClasses = () => {

    const [classdata, setClassData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setClassData(data);
            })
    }, [])
    return (
        <>
            <h3 className='text-xl font-semibold text-center mt-12 mb-8 '>Popular Classes Section</h3>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    classdata.slice(0, 6).map(singleData => <SingleClassData
                        singleData={singleData}
                        key={singleData._id}
                    ></SingleClassData>)

                }


            </div>
        </>
    );
};

export default PopularClasses;