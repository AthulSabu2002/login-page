import { useState } from 'react';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Inter, DM_Serif_Display } from 'next/font/google';
import { testimonials } from './data';

const inter = Inter({ subsets: ['latin'] });
const dmSerifDisplay = DM_Serif_Display({ 
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] max-w-md text-center mb-4">
            <div className="testimonial-containe p-2 rounded-xl text-white mb-0">
                <div className="text-center mb-2">
                    <BiSolidQuoteAltLeft className="text-white w-8 h-8 mx-auto" />
                </div>
                <p className={`font-medium text-base mb-4 ${inter.className}`}>&quot;{testimonials[activeTestimonial].quote}&quot;</p>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-sm text-blue-200">-</span>
                    <span className={`${dmSerifDisplay.className}`}>{testimonials[activeTestimonial].author}</span>
                    <span className={`${dmSerifDisplay.className}`}>, {testimonials[activeTestimonial].role}</span>
                </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-1.5 mt-1">
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
    );
}

export default Testimonial;