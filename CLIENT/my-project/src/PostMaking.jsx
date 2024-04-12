import React from 'react'
import { SlArrowUpCircle } from "react-icons/sl";

export const PostMaking = (props) => {
  return (
    <div class="  p-4">
    <div class="bg-blue-100 p-6 rounded-lg">
      <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
      <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
      
<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
<span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
 
      <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{props.heading}</h2>
      <p class="leading-relaxed text-base">{props.mbody}</p>
      <div className='flex justify-between'>
      <p class="leading-relaxed text-base">Since:12/3/4</p>
      <span role="img" aria-label="thumbs-up"><SlArrowUpCircle /></span>  
      </div>
    </div>
  </div>
  )
}
