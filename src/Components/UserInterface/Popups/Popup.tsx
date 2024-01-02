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
        className="w-full fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">

        <div ref={popupRef} className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black outline-black text-white' : 'bg-white outline-white text-black'}`}>

            <div className='flex justify-between gap-8 items-start'>

                <h2 className='mb-8 font-bold'>{title}</h2>

                {/* <div className="flex justify-end"> */}
                <button onClick={handleClose} className=''>
                    <i className="fa-solid fa-xmark text-2xl text-gray-400"></i>
                </button>
            {/* </div> */}
            

            </div>

            {children}

            <i className='mt-12 block'>* Press <b className={`underline ${isDarkmode ? 'decoration-violet-400' : 'decoration-pink-700'} px-1`}>esc</b> to be able to click on this popup</i>

        </div>
      </animated.div>
    );
};

export default Popup;
