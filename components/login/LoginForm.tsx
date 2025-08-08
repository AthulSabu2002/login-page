import React from 'react';

const LoginForm = () => {
  return (
    <div className="w-full max-w-sm md:w-[45%] lg:w-[32%] xl:w-[27%] h-auto min-h-[70vh] max-h-[80vh] rounded-2xl opacity-100  
                   p-4 sm:p-5 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 bg-white overflow-auto shadow-lg">
        {/* Login form */}
        <div className="flex flex-col h-full">
            <div className="flex items-center mb-3 sm:mb-4 md:mb-6 mt-2 sm:mt-3 md:mt-4">
                <h2 className="text-lg sm:text-xl font-light">Dawnbreak AI</h2>
                <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold mb-1">Get started</h1>
            <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">Please input your login credentials or <br /> create a new account</p>

            <form className="flex flex-col">
                <div className="mb-3 sm:mb-4">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400 text-xs" 
                        placeholder="Enter your email" 
                    />
                </div>
                
                <div className="mb-2 sm:mb-3">
                    <label htmlFor="password" className="block text-xs sm:text-sm font-medium mb-1">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400 text-xs" 
                        placeholder="Enter your password" 
                    />
                </div>

                <div className="flex justify-end mb-3 sm:mb-4">
                    <a href="#" className="text-[#08457E] font-medium text-xs sm:text-sm">Forgot Password?</a>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-[#0A3161] text-white py-2 rounded-lg mb-2 sm:mb-3 hover:bg-[#0A3161]/90 text-xs sm:text-sm"
                >
                    Sign In
                </button>

                <p className="text-center text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm">
                    By signing up, you agree to our <a href="#" className="text-gray-500 font-medium underline">Terms and Conditions</a> and <a href="#" className="text-gray-500 underline font-medium">Privacy Policy</a>
                </p>

                <p className="text-center text-xs sm:text-sm">
                    Don&apos;t have an account? <a href="#" className="text-[#08457E] font-semibold">Create a new account</a>
                </p>
            </form>

            <div className="mt-auto text-center text-gray-400 text-xs sm:text-sm pt-2">
                Dawnbreak AI
            </div>
        </div>
    </div>
  );
}

export default LoginForm;