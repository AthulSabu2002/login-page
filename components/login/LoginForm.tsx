import React from 'react';

const LoginForm = () => {
  return (
    <div className="max-w-sm mx-0 bg-white rounded-2xl shadow-lg p-6 min-h-lh">
        {/* Login form */}
        <div className="flex flex-col space-y-4">
            <div className="flex items-center mb-2">
                <h2 className="text-xl font-light">Dawnbreak AI</h2>
                <div className="ml-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Get started</h1>
                <p className="text-sm text-gray-400">
                    Please input your login credentials or <br /> create a new account
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <div className="block text-sm font-medium mb-2">Email</div>
                    <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        placeholder="Enter your email" 
                    />
                </div>
                
                <div>
                    <div className="block text-sm font-medium mb-2">Password</div>
                    <input 
                        type="password" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        placeholder="Enter your password" 
                    />
                </div>

                <div className="flex justify-end">
                    <a href="#" className="text-[#08457E] font-medium text-sm hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <button 
                    className="w-full bg-[#0A3161] text-white py-3 rounded-lg hover:bg-[#0A3161]/90 text-sm font-medium transition-colors duration-200"
                >
                    Sign In
                </button>

                <p className="text-center text-gray-600 text-sm leading-relaxed">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-gray-500 font-medium underline hover:text-gray-700">
                        Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-gray-500 underline font-medium hover:text-gray-700">
                        Privacy Policy
                    </a>
                </p>

                <p className="text-center text-sm">
                    Don&apos;t have an account?{' '}
                    <a href="#" className="text-[#08457E] font-semibold hover:underline">
                        Create a new account
                    </a>
                </p>
            </div>

            <div className="text-center text-gray-400 text-sm pt-4 border-t border-gray-100">
                Dawnbreak AI
            </div>
        </div>
    </div>
  );
}

export default LoginForm;