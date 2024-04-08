// ButtonDisplay.js
import React, { useState } from 'react';
 
import { useNavigate, BrowserRouter as Router, Route, Link } from 'react-router-dom';
const ButtonDisplay = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick('You clicked Get Started')}>Get Started</button> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate("/signup")}>Who are you </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate("/post")}>Post</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() =>  navigate("/createpost")}>Create</button>
                
            </div>
             
        </div>
    );
};

export default ButtonDisplay;