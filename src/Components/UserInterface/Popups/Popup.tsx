import React, { ReactNode } from 'react';

type PopupProps = {
  title: string;
  children: ReactNode;
  handleClose: VoidFunction;
  isDarkmode: boolean;
};

const Popup: React.FC<PopupProps> = ({ title, children, handleClose, isDarkmode }) => {
    return (
      <div className="w-full fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">

        <div className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black outline-black text-white' : 'bg-white outline-white text-black'}`}>

            <div className='flex justify-between gap-8 items-start'>

                <h2 className='mb-8 font-bold'>{title}</h2>

                {/* <div className="flex justify-end"> */}
                <button onClick={handleClose} className=''>
                    <i className="fa-solid fa-xmark text-2xl text-gray-400"></i>
                </button>
            {/* </div> */}
            

            </div>
            
          {children}
        </div>
      </div>
    );
};

export default Popup;
