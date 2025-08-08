import { MdRecordVoiceOver } from "react-icons/md";
import { RiMicAiFill } from "react-icons/ri";

const GradientCircle = () => {
  return (
    <div 
        className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full"
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
              width: '320px',
              height: '320px',
              top: '60px',
              left: '60px',
              background: 'linear-gradient(180deg, #0A4A8C, #0F7BDFB2)',
              opacity: 1,
              border: '0.9px solid rgba(144, 195, 243, 0.5)'
          }}
      >
          {/* Microphone Icon with outer gradient circle */}
          <div className="absolute top-[50%] left-[-8%] transform -translate-y-1/2">
              {/* Outer gradient circle */}
              <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
                  style={{
                      background: 'radial-gradient(circle, rgba(8, 66, 120, 0.6) 0%, rgba(15, 123, 223, 0.3) 50%, rgba(15, 123, 223, 0) 100%)',
                      zIndex: -1
                  }}
              />
              {/* Inner white circle with icon */}
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <MdRecordVoiceOver className="h-7 w-7 text-blue-600" />
              </div>
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

          {/* Speech Icon with outer gradient circle */}
          <div className="absolute top-[50%] left-[29%] transform -translate-y-1/2">
              {/* Outer gradient circle */}
              <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                  style={{
                      background: 'radial-gradient(circle, rgba(8, 66, 120, 0.6) 0%, rgba(15, 123, 223, 0.3) 50%, rgba(15, 123, 223, 0) 100%)',
                      zIndex: -1
                  }}
              />
              {/* Inner white circle with icon */}
              <div className="bg-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <RiMicAiFill className="h-5 w-5 text-blue-600" />
              </div>
          </div>
          
          {/* Rectangular connecting line from message icon to card */}
          <div className="absolute top-[50%] left-[43%] w-[90px] h-[20px] transform -translate-y-1/2"
              style={{
                  background: 'linear-gradient(to left, rgba(144, 195, 243, 0.8), rgba(15, 123, 223, 0.3))',
                  boxShadow: '0 0 5px rgba(144, 195, 243, 0.3)'
              }}
          ></div>
      </div>
    </div>
  );
}

export default GradientCircle;