import React from 'react';
export default function WhoareyouBox({ image, text ,onButtonClick }) {
    return (
      <div className="group" onClick={()=>onButtonClick(text)} >
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-primary border-2 border-solid border-primary-700 bg-white px-2 py-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group-hover:bg-primary-700">
          <div className="flex h-[300px] w-[300px] items-center justify-center">
            <img src={image} alt="Event Organiser" width="300" height="400" />
          </div>
          <div className="mb-2 w-full rounded-[5px] bg-primary-700 p-2 text-center text-[25px] font-bold text-black transition-all duration-500 group-hover:bg-white group-hover:text-primary-700">{text}</div>
          <div className="mb-5 h-[1.2px] w-full bg-primary-700 transition-all duration-500 group-hover:bg-white" />
        </div>
      </div>
    );
  }   