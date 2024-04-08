// ButtonDisplay.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Post from './Post';
import CreatePost from './Createpost';

const ButtonDisplay = () => {
    return (
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/createpost' element={<CreatePost/>}/>
        </Routes>
    );
};

export default ButtonDisplay;
