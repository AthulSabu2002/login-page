import { RiMicAiFill } from "react-icons/ri";

const CardInterface = () => {
  return (
    <div className="absolute top-[45%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[260px] bg-white rounded-lg shadow-xl z-4 overflow-hidden">
        {/* Card Header */}
        <div className="h-6 bg-gray-100 flex items-center px-2 border-b border-gray-200">
            <div className="flex justify-between items-center w-full">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div>
                    <div className="h-1 bg-gray-300 rounded-full w-18"></div>
                </div>
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
  );
}

export default CardInterface;