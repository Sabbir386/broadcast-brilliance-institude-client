import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigationbar from '../Layout/Shared/Navigationbar';
import Footer from '../Layout/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;