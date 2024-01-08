import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "../../Helpers/ChangingProgressProvider";
import { animated } from '@react-spring/web';

type PopupProps = {
  title: string;
  text: string;
  isDarkmode: boolean;
  currentProgessPercentage: number;
  previousProgessPercentage: number;
  styleAnimated: any
};

type CustomStyles = {
  transition?: string;
} & React.CSSProperties;

const HoverPopup: React.FC<PopupProps> = ({ title, text, isDarkmode, currentProgessPercentage, previousProgessPercentage, styleAnimated }) => {
    return (
      <div className="w-full fixed top-0 left-0 w-full h-full flex items-center justify-center h-full">

        <animated.div 
          style={styleAnimated}
          className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black/60 outline-black text-white' : 'bg-white/60 outline-white text-black'} min-w-72 mt-[20px] h-max-16 w-[80%] backdrop-blur-md`}
        >
          
          <h2 className='mb-8 font-bold'>{title}</h2>
            
          <p>{text}</p>


          <div className='mt-12 flex gap-8 items-center'>
            <div className='w-1/4'>

              <ChangingProgressProvider values={[previousProgessPercentage, currentProgessPercentage]}>
              {percentage => (
              

                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    
                    // Colors
                    pathColor: `${isDarkmode ? 'rgb(167, 139, 250)' : 'rgb(190, 18, 60)'}`,
                    trailColor: `${isDarkmode ? '#222222': '#d6d6d6'}`,
                  } as CustomStyles)} // Cast to CustomStyles
                />
              )}
              </ChangingProgressProvider>

            </div>
            
            <p className={`${isDarkmode ? 'text-violet-400' : 'text-pink-700'} italic`}>Klik lang om dit project te bekijken</p>

          </div>
          
        </animated.div>
      </div>
    );
};

export default HoverPopup;
