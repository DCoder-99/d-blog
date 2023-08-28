import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AboutRoutes from '../../routes/aboutRoutes';
import CreateItem from './CreateItem';

const About = () => {
    return (
        <div>
            About 
            <Routes>
                <Route path='create' element={<CreateItem />} />
            </Routes>
            <Outlet />
        </div>
    );
};

export default About;
