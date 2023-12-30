import React, { ReactNode, useEffect, useRef, useState } from 'react';

type PopupProps = {
  title: string;
  children: ReactNode;
  handleClose: VoidFunction;
  isDarkmode: boolean;
};

const Popup: React.FC<PopupProps> = ({ title, children, handleClose, isDarkmode }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    // const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // Margin around the root. Increase to detect visibility before or after entering the viewport
        threshold: 0.8, // Percentage of the element that must be visible to trigger the callback
      };

      let i = 0;
      const observer = new IntersectionObserver(([entry]) => {
        i++;
        console.log(i, "i");
        if(i >= 2){
          if(sessionStorage.getItem("isPointerLockActive")){
            sessionStorage.removeItem("isPointerLockActive");
          }
          sessionStorage.setItem("isPointerLockActive", "false");
          console.log("Visible");
        }
        // setIsVisible(entry.isIntersecting);
        
      }, options);

      if (popupRef.current) {
        observer.observe(popupRef.current);
      }


      // console.log(isVisible);

      return () => {
        if (popupRef.current) {
          observer.unobserve(popupRef.current);
        }
      };

    }, []);


    return (
      <div className="w-full fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">

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
        </div>
      </div>
    );
};

export default Popup;
