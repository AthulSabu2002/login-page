import GradientCircle from './GradientCircle';
import CardInterface from './CardInterface';
import Testimonial from './Testimonial';

const VisualElements = () => {
  return (
    <div className="hidden md:block w-full md:w-[65%] lg:w-[55%] xl:w-[50%] h-[95vh] rounded-[25.82px] opacity-100 bg-gradient-to-r from-[#052A4D] to-[#08457E] overflow-hidden shadow-lg relative">
      {/* Gradient circle disc */}
      <GradientCircle />
      
      {/* Card Interface */}
      <CardInterface />
      
      {/* Grid design with gradient fade effect */}
      <div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[95%] h-[85%] opacity-50"
        style={{
            backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), 
                linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px',
            maskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 60%)',
            zIndex: 1
        }}
      />
      
      {/* Testimonials section */}
      <Testimonial />
    </div>
  );
}

export default VisualElements;