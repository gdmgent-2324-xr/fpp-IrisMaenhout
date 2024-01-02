import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { animated } from '@react-spring/web';
import { usePopupHelper } from 'Hooks/Helpers/usePopupHelper';

type PopupProps = {
  title: string;
  children: ReactNode;
  handleClose: VoidFunction;
  isDarkmode: boolean;
  styleAnimated: any;
};

const Popup: React.FC<PopupProps> = ({ title, children, handleClose, isDarkmode, styleAnimated }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    usePopupHelper(popupRef);

    return (
      <animated.div 
        style={styleAnimated}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        

        <animated.div ref={popupRef} className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black outline-black text-white' : 'bg-white outline-white text-black'}`}>

            <div className='flex justify-between gap-8 items-start'>

                <h2 className='mb-6 font-bold text-xl'>{title}</h2>

                {/* <div className="flex justify-end"> */}
                <button onClick={handleClose} className=''>
                    <i className="fa-solid fa-xmark text-2xl text-gray-400"></i>
                </button>
            {/* </div> */}
            

            </div>

            {children}

        </animated.div>
      </animated.div>
    );
};

export default Popup;
