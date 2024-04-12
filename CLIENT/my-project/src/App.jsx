// ButtonDisplay.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Post from './Post';
import CreatePost from './Createpost';
import Feed from './Feedfordevlep';
import { Analytics } from './Analytics';
import  Signup  from './SIGN';
import  Complaintform  from './Complaintform';

const ButtonDisplay = () => {
    return (
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/createpost' element={<CreatePost/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/complaintform' element={<Complaintform/>}/>
        </Routes>
    );
};

export default ButtonDisplay;
