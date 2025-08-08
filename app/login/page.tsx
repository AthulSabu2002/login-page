"use client"

import { useState } from 'react';
import { MdRecordVoiceOver } from "react-icons/md";
import { RiMicAiFill } from "react-icons/ri";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Inter, DM_Serif_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSerifDisplay = DM_Serif_Display({ 
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

export default function LoginPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    
    const testimonials = [
        {
            quote: "I can now upload prescriptions during breaks or even on the move. Thanks to the app's amazingly efficient automation I'm saving 2hrs a day",
            author: "Dr. Riya Kumar",
            role: "MBBS, MS (OBG)"
        },
        {
            quote: "I needed reliable text-to-speech app to help with discharge summaries but wasn't comfortable putting patient data on ChatGPT or WhatsApp. Dawnbreak is built for doctors, so I use it every day without worrying.",
            author: "Dr. Aishwarya K N",
            role: "MBBS, MS, FMIG"
        },
        {
            quote: "What I love is that it actually understands medical terms—even the ones we use in everyday shorthand. I no longer waste time editing transcripts, which means faster documentation and fewer errors",
            author: "Dr. Nikita Sridhar",
            role: "MBBS, MD, Radiology"
        }
    ];

    return (
        <div className="w-screen h-screen bg-[#F5F8FC] flex flex-col justify-center md:flex-row md:justify-end lg:justify-center items-center gap-6 md:gap-8 lg:gap-12 p-4">
            {/* Left container */}
            <div className="w-full max-w-md md:w-[50%] lg:w-[35%] xl:w-[30%] h-[80vh] rounded-[24px] opacity-100  
                           p-6 md:p-8 flex flex-col gap-4 bg-white overflow-auto shadow-lg">
                {/* Login form */}
                <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6 mt-4 md:mt-6">
                        <h2 className="text-2xl font-light">Dawnbreak AI</h2>
                        <div className="ml-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold mb-1">Get started</h1>
                    <p className="text-gray-400 mb-4">Please input your login credentials or <br /> create a new account</p>

                    <form className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder:font-normal placeholder:text-gray-400" 
                                placeholder="Enter your password" 
                            />
                        </div>

                        <div className="flex justify-end mb-4">
                            <a href="#" className="text-[#08457E] font-medium">Forgot Password?</a>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-[#0A3161] text-white py-2 rounded-lg mb-3 hover:bg-[#0A3161]/90"
                        >
                            Sign In
                        </button>

                        <p className="text-center text-gray-600 mb-3">
                            By signing up, you agree to our <a href="#" className="text-gray-500 font-medium underline">Terms and Conditions</a> and <a href="#" className="text-gray-500 underline font-medium">Privacy Policy</a>
                        </p>

                        <p className="text-center">
                            Don&apos;t have an account? <a href="#" className="text-[#08457E] font-semibold">Create a new account</a>
                        </p>
                    </form>

                    <div className="mt-auto text-center text-gray-400">
                        Dawnbreak AI
                    </div>
                </div>
            </div>

            {/* Right container - hidden on small screens */}
            <div className="hidden md:block w-full md:w-[60%] lg:w-[50%] xl:w-[45%] h-[95vh] rounded-[25.82px] opacity-100 bg-gradient-to-r from-[#052A4D] to-[#08457E] overflow-hidden shadow-lg relative">
                {/* Gradient circle disc */}
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full"
                    style={{
                        background: 'linear-gradient(to bottom, #084278, #0F7BDF00)',
                        zIndex: 3,
                        position: 'relative'
                    }}
                >
                    {/* Inner layer circle */}
                    <div 
                        className="absolute rounded-full"
                        style={{
                            width: '340px',
                            height: '340px',
                            top: '60px',
                            left: '60px',
                            background: 'linear-gradient(180deg, #0A4A8C, #0F7BDFB2)',
                            opacity: 1,
                            border: '0.9px solid rgba(144, 195, 243, 0.5)'
                        }}
                    >
                        {/* Microphone Icon - at start of left side of inner disc */}
                        <div className="absolute top-[50%] left-[-8%] transform -translate-y-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                            <MdRecordVoiceOver className="h-7 w-7 text-blue-600" />
                        </div>

                        {/* Sound Wave Visualization - before center of inner disc */}
                       <div className="absolute top-[50%] left-[10%] transform -translate-y-1/2 flex items-center space-x-1">
                            {[6, 12, 18, 14, 8, 16, 10, 4].map((height, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-300 rounded-full w-1"
                                    style={{ 
                                        height: `${height}px`,
                                        opacity: 0.9
                                    }}
                                />
                            ))}
                        </div>

                        {/* Speech Icon - before center of inner disc */}
                        <div className="absolute top-[50%] left-[29%] transform -translate-y-1/2 bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg">
                            <RiMicAiFill className="h-5 w-5 text-blue-600" />
                        </div>
                        
                        {/* Rectangular connecting line from message icon to card */}
                        <div className="absolute top-[50%] left-[43%] w-[80px] h-[10px] transform -translate-y-1/2"
                            style={{
                                background: 'linear-gradient(to left, rgba(144, 195, 243, 0.8), rgba(15, 123, 223, 0.3))',
                                boxShadow: '0 0 5px rgba(144, 195, 243, 0.3)'
                            }}
                        ></div>
                    </div>
                </div>
                
                {/* Card Interface - centered at right end of inner circle */}
                <div className="absolute top-[50%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[260px] bg-white rounded-lg shadow-xl z-4 overflow-hidden">
                    {/* Card Header */}
                    <div className="h-6 bg-gray-100 flex items-center px-2 border-b border-gray-200">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    
                    {/* Card Content - Split into two sections */}
                    <div className="flex flex-col h-full">
                        {/* First section - Light blue with mic icon */}
                        <div 
                            className="p-4 flex items-center justify-center relative h-24"
                            style={{
                                background: 'linear-gradient(to bottom, #CFE6FE, #EDF5FF)'
                            }}
                        > 
                            {/* Sound wave lines behind the mic icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
                                {[8, 10, 12, 14, 16, 18, 22, 20, 18, 16, 12, 10, 8, 12, 16, 20, 22, 18, 14, 12, 10, 14, 18, 22].map((height, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-300 rounded-full"
                                        style={{ 
                                            height: `${height}px`,
                                            opacity: 0.7,
                                            width: '2px'
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 shadow-md">
                                <RiMicAiFill className="h-7 w-7 text-blue-600" />
                            </div>
                        </div>

                        {/* Second section - Text lines */}
                        <div className="bg-white p-2 flex-grow">
                            <div className="mb-4 bg-white p-5 rounded-lg shadow-sm border border-gray-100"> 
                                {/* Text lines with varying lengths */}
                                <div className="space-y-3">
                                    <div className="h-2 bg-gray-300 rounded-full w-[85%]"></div>
                                    <div className="h-2 bg-gray-300 rounded-full w-full"></div>
                                    <div className="h-2 bg-gray-300 rounded-full w-[70%]"></div>
                                    <div className="h-2 bg-gray-300 rounded-full w-[90%]"></div>
                                    <div className="h-1.5 bg-gray-300 rounded-full w-[40%]"></div>
                                    <div className="h-2 bg-gray-300 rounded-full w-[65%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Grid design with gradient fade effect */}
                <div 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[90%] h-[80%] opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)
                        `,
                        backgroundSize: '45px 45px',
                        maskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
                        zIndex: 1
                    }}
                />
                
                {/* Testimonials section */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-md text-center mb-4">
                    <div className="testimonial-containe p-6 rounded-xl text-white mb-4">
                        <div className="text-center mb-2">
                            <BiSolidQuoteAltLeft className="text-white w-8 h-8 mx-auto" />
                        </div>
                        <p className={`font-medium mb-4 ${inter.className}`}>&quot;{testimonials[activeTestimonial].quote}&quot;</p>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-sm text-blue-200">-</span>
                            <span className={`${dmSerifDisplay.className}`}>{testimonials[activeTestimonial].author}</span>
                            <span className={`${dmSerifDisplay.className}`}>, {testimonials[activeTestimonial].role}</span>
                        </div>
                    </div>
                    
                    {/* Navigation dots */}
                    <div className="flex justify-center space-x-1.5 mt-4">
                        {testimonials.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-2 h-2 rounded-full ${activeTestimonial === index ? 'bg-white' : 'bg-white/40'}`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}