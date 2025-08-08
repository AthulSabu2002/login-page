import GradientCircle from './GradientCircle';
import CardInterface from './CardInterface';
import Testimonial from './Testimonial';

const VisualElements = () => {
  return (
    <div className="hidden lg:block w-full max-w-2xl mx-auto h-[700px] rounded-3xl bg-gradient-to-r from-[#052A4D] to-[#08457E] shadow-lg relative">
      {/* Gradient circle disc */}
      <GradientCircle />
      
      {/* Card Interface */}
      <CardInterface />
      
      {/* Grid design with gradient fade effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
            backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), 
                linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '2.8rem 2.8rem',
            maskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
        }}
      />
      
      {/* Testimonials section */}
      <Testimonial />
    </div>
  );
}

export default VisualElements;