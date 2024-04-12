import React, { useState } from 'react';
import axios from 'axios';
function SignUpForm() {
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [namefield, setNamefield] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post('http://localhost:3000/signup', { email, password,namefield,selectedOption });
        console.log(response.data);
      } catch (error) { 
        console.error(error);
      }   
    };
    return (
        <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
            <div className="w-full py-8">
                <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                    </svg>
                    <h1 className="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
                </div>
                <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
                    <p className="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>
                    <form className="my-8 text-sm" onSubmit={handleSubmit}>
                        <div className="flex flex-col my-4">
                            <label htmlFor="name" className="text-gray-700">Name</label>
                            <input 
                            value={namefield}
                            onChange={(e) => setNamefield(e.target.value)}
                            type="text"  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name"/>
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="email" className="text-gray-700">Email Address</label>
                            <input 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email"/>
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="password" className="text-gray-700">Password</label>
                            <div className="relative flex items-center mt-2">
                                <input 
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'} name="password" id="password" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password"/>
                                <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{showPassword ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>}</svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col my-4">
                            <label htmlFor="password_confirmation" className="text-gray-700">Password Confirmation</label>
                            <div className="relative flex items-center mt-2">
                                <input type={showPasswordConfirmation ? 'text' : 'password'} name="password_confirmation" id="password_confirmation" className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password again"/>
                                <button onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{showPasswordConfirmation ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>}</svg>
                                </button>
                            </div>
                        </div>
                        <div class="relative">
  <select 
   value={selectedOption}
   onChange={handleSelectChange}
  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Citizen</option>
    <option>Social WOrker</option>
    <option>Govt Off.</option>
    
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
     
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z"/>
    </svg>
  </div>
</div>
                        <div className="flex items-center">
                            <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded"/>
                            <label htmlFor="remember_me" className="text-gray-700">I accept the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
                        </div>
                        <div type= "submit" className="my-4 flex items-center justify-end space-x-4">
                            <button  className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
                        </div>
                    </form>
                    <div className="flex items-center justify-between">
                        <div className="w-full h-[1px] bg-gray-300"></div>
                        <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
