import React, { ReactNode } from 'react';

type PopupProps = {
  title: string;
  text: string;
  isDarkmode: boolean;
};

const HoverPopup: React.FC<PopupProps> = ({ title, text, isDarkmode }) => {
    return (
      <div className="w-full fixed top-0 left-0 w-full h-full flex items-center justify-center h-full">

        <div className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black/60 outline-black text-white' : 'bg-white/60 outline-white text-black'} min-w-72 mt-[20px] h-max-16 w-[80%] backdrop-blur-sm`}>
          
          <h2 className='mb-8 font-bold'>{title}</h2>
            
          <p>{text}</p>

          <p className={`${isDarkmode ? 'text-violet-400' : 'text-pink-700'} mt-12 italic`}>Klik om dit project te bekijken</p>
        </div>
      </div>
    );
};

export default HoverPopup;
