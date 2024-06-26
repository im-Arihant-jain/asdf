// import React, { useState } from 'react';
// import axios from 'axios';
// const CreatePost = () => {
//     const [heading, setHeading] = useState('');
//     const [mbody, setMbody] = useState('');   
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:3000/postre', { heading, mbody });
//           // console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }   
//       };
//     return (
// <form class="text-gray-600 body-font relative" onSubmit={handleSubmit}>
//   <div class="absolute inset-0 bg-gray-300">
//     {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
//   </div>
//   <div class="container px-5 py-24 mx-auto flex">
//     <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
//       <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">CreatePost</h2>
//       <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
//       <div class="relative mb-4">
//         <label   class="leading-7 text-sm text-gray-600">Heading</label>
//         <input 
//         value={heading}
//         onChange={(e) => setHeading(e.target.value)}
//           id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <div class="relative mb-4">
//         <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
//         <textarea 
//         value={mbody}
//         onChange={(e) => setMbody(e.target.value)}
//         // id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//         >
//         </textarea>
//       </div>
//       <button  type="submit"  class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//       <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
//     </div>
//   </div>
// </form >
//     );
// };

// export default CreatePost;
import React, { useState } from 'react';
import WhoareyouMain from './WhoareyouMain';
// import OrganiserSponsorshipForm from './OrganiserSponsorshipForm';
 import ComanManForm from './ComanManForm';
import NGOform from './NGOform';
import GovtOfficialform from './Govtform';
// import Influencer from './Influencer';

function Identity() {
  const [selectedType, setSelectedType] = useState(null);

  const handleButtonClick = (type) => {
    setSelectedType(type);  
  };

  return (
    <div>
      {selectedType === null && <WhoareyouMain onButtonClick={handleButtonClick} />}
      {selectedType === 'SOCIAL WORKER' && <NGOform />}
    
      {selectedType === 'GOVT. OFFICIAL' && <GovtOfficialform  />}
    {selectedType === 'COMMON MAN' && <ComanManForm /> }
    </div>
  );                          
}

export default Identity;
