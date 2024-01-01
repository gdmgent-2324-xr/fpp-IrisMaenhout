import React, { ReactNode, useEffect, useRef } from 'react';


import bgImgCard from "./images/Bg_buisnessCard.jpg";

type PopupProps = {
  handleClose: VoidFunction;
  isDarkmode: boolean;
};




const ContactCardPopup : React.FC<PopupProps> = ({ handleClose, isDarkmode }) => {

    const popupRef = useRef<HTMLDivElement>(null);

    // const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // Margin around the root. Increase to detect visibility before or after entering the viewport
        threshold: 0.8, // Percentage of the element that must be visible to trigger the callback
      };

      // let i = 0;
      const observer = new IntersectionObserver(([entry]) => {
        // i++;
        // console.log(i, "i");
        // if(i >= 2){
          if(sessionStorage.getItem("isPointerLockActive")){
            sessionStorage.removeItem("isPointerLockActive");
          }
          sessionStorage.setItem("isPointerLockActive", "false");
          console.log("Visible");
        // }
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
        <div className="absolute w-full h-full top-0 left-0 items-center justify-center z-20 flex">
        
        {/* Overlay */}
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40 z-30"></div>

        <div className="z-40">

          {/* Close btn */}
          <button onClick={handleClose} className={`flex justify-between ${isDarkmode ? "bg-[#000000BB] text-white" : "bg-[#ffffffBB] text-black"} rounded-xl px-6 py-4 mb-6 w-1/3 items-center cursor-pointer mx-auto backdrop-blur-sm`}>
            <p>Close</p>
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Contact card */}
          <div ref={popupRef} className={`bg-[url(${bgImgCard})] bg-center bg-cover p-10 outline outline-3 outline-offset-[-12px] outline-[#7C4B81] rounded flex justify-between gap-12 min-w-max`}>

            {/* Personal info */}
            <div className="text-gray-600">
              <h1 className="text-[#7C4B81] font-bold text-3xl font-serif mb-4">Iris <br/>Maenhout</h1>

              <div className="flex gap-4 items-center mb-12">
                <p className="uppercase">Full stack developer</p>
                <div className="dot w-6 h-4 bg-pink-300 rounded-full"></div>
                <p className="uppercase">UX/ UI designer</p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Phone number */}
                <a 
                  href="tel:+32489034493"
                  className="flex gap-4 items-center"
                >
                  <i className="fa-solid fa-phone text-xl text-[#7C4B81]"></i>
                  <p>+32489034493</p>
                </a>

                {/* Mail addres */}
                <a 
                  href="mailto:irismaenhout@gmail.com"
                  className="flex gap-4 items-center"
                >
                  <i className="fa-solid fa-envelope text-xl text-[#7C4B81]"></i>
                  <p>irismaenhout@gmail.com</p>
                </a>
              </div>
            </div>

            {/* Social media links */}
            <div>
              <div className="bg-[#E8DDED] p-2 rounded-xl">
                <div className="flex flex-col gap-6 bg-[#EAC0E1] p-4 rounded-xl">
                  <a href="https://www.linkedin.com/in/iris-maenhout/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-4xl text-white"></i>
                  </a>

                  <a href="https://github.com/IrisMaenhout" target="_blank" rel="noopener noreferrer" >
                    <i className="fa-brands fa-square-github text-4xl text-white"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
          
        </div>

        
      </div>
    );
};

export default ContactCardPopup;
