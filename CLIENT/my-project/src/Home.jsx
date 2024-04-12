// ButtonDisplay.js
import React, { useState } from 'react';
import Feed from './Feedfordevlep';
import { useNavigate, BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
const ButtonDisplay = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('You clicked Get Started')}>Get Started</button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate("/analytics")}>stats</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate("/post")}>Postfeed</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() =>  navigate("/createpost")}>Who are you </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold ml-4 py-2 px-4 rounded" onClick={() =>  navigate("/login")}>Login</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold ml-4 py-2 px-4 rounded" onClick={() =>  navigate("/signup")}>Signup </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold ml-4 py-2 px-4 rounded" onClick={() =>  navigate("/complaintform")}>Complaintform</button>
                
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold ml-4 py-2 px-4 rounded" onClick={() =>  navigate("/feed")}>Positive Feed</button>
                
                
            </div>
             
        </div>
    );
};

export default ButtonDisplay;