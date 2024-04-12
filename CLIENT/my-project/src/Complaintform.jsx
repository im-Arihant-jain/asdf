import React from 'react'
import { useState } from 'react';
import Select from "react-select";
const options = [
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "environment", label: "Environment" },
];
export default function Complaintform   ()   {    
  const [proofOfWork, setProofOfWork] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [link, setLink] = useState('');

  const handleProofOfWorkChange = (event) => {
    setProofOfWork(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Proof of Work:', proofOfWork);
    console.log('Image File:', imageFile);
    console.log('Link:', link);
  };    // raam aaayenge to 
  return (        
    <div>    <div>
    <div class="grid md:block ">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-72 flex justify-center w-full">
        <div class="mt-10 text-white text-4xl font-bold">GET IN TOUCH</div>
      </div>
      <div class="bg-white h-auto flex justify-center">
        <div class="bg-white shadow-lg -mt-40 md:w-1/2 grid lg:flex justify-center">
          <div class="w-3/4 lg:w-2/3 ">
            <div class="text-lg font-medium text-blue-600 m-6 ">
              Drop a Message
            </div>
            <div class=" flex lg:flex-row flex-col">
              <div class="m-6">
                <p class="text-sm text-stone-400">UserName</p>{" "}
                <input class="border-b-2 border-stone-400 text-stone-400 w-36" />
                <p class="text-sm text-stone-400 mt-6">Password</p>{" "}
                <input class="border-b-2 border-stone-400 text-stone-400 w-36" />
              </div>
              <div class="m-6 ">
                <p class="text-sm text-stone-400">Since when</p>{" "}
                <input class="border-b-2 border-stone-400 text-stone-400 w-36" />
                <p class="text-sm text-stone-400 mt-6">City/State</p>{" "}
                <input class="border-b-2 border-stone-400 text-stone-400 w-36" />
              </div>
            </div>

            <div class="m-6 ">
              <div>
              <p class="text-sm text-stone-400 mt-6 ">Description</p>{" "}
                <input class="border-b-2 border-stone-400 text-stone-400 w-36" />
                <br/><br/><br/><br/>
                <label className="block text-sm font-medium text-gray-700">
                  Category 
                </label>
                <Select options={options} isMulti />
              </div>
               
              <div className="max-w-md mx-auto mt-8">
      <form className="space-y-4">
        <div>
          <label htmlFor="proofOfWork" className="block text-sm font-medium text-gray-700">
            Proof of Work:
          </label>
          <input
            type="text"
            id="proofOfWork"
            name="proofOfWork"
            value={proofOfWork}
            onChange={handleProofOfWorkChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
            Upload Image:
          </label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="linkUpload" className="block text-sm font-medium text-gray-700">
            Upload Link:
          </label>
          <input
            type="url"
            id="linkUpload"
            name="linkUpload"
            value={link}
            onChange={handleLinkChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
            </div>
          </div>
          
          <div class="lg:w-1/3 bg-green-500 ">
            <div class="text-white m-6 font-medium">
              {" "}
              Contact Information{" "}
            </div>
            <div class="text-white m-6 text-sm flex">
              <ion-icon name="location-sharp" class="m-2"></ion-icon>
              <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
            </div>
            <div class="text-white m-6 text-sm flex">
              <ion-icon name="call-outline" class="m-2"></ion-icon>
              <div> +1 987-6543-210 </div>
            </div>
            <div class="text-white m-6 text-sm flex">
              <ion-icon name="mail-outline" class="m-2"></ion-icon>
              <div> admin@tailwind.org </div>
            </div>
            <div class="text-white m-6 text-sm flex">
              <ion-icon name="globe-outline" class="m-2"></ion-icon>
              <div> www.tailwind.org </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule        
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </div></div>
  )
}



