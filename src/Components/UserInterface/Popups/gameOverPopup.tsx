import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { animated } from '@react-spring/web';
import { usePopupHelper } from 'Hooks/Helpers/usePopupHelper';
import { Link } from "react-router-dom";
import { NAVIGATION } from 'Configs/navigation';

type PopupProps = {
  handleGameRestart: VoidFunction;
  isDarkmode: boolean;
  styleAnimated: any;
  score: any;
};

const GameOverPopup: React.FC<PopupProps> = ({ score, handleGameRestart, isDarkmode, styleAnimated }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    usePopupHelper(popupRef);

    return (
      <animated.div 
        ref={popupRef}
        style={styleAnimated}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
        

        <animated.div className={`p-8 rounded-lg shadow-lg min-w-70 outline outline-4 outline-offset-4 ${isDarkmode ? 'bg-black outline-black text-white' : 'bg-white outline-white text-black'}`}>

          <h2 className='mb-6 font-bold text-xl text-red-900'>Game over</h2>
          
          <p>Je hebt <b>{score}</b> {score === 1 ? 'punt' : 'punten'}.<br/>
            Wil je het nog eens proberen?</p>

          <div className='mt-8 rounded-md'>

            <button className='block w-full text-center bg-yellow-500 px-4 py-2 outline outline-2 outline-yellow-500 text-white mb-4 rounded-md' onClick={handleGameRestart}>Ja</button>
            <Link className='w-full block text-center outline outline-2 outline-yellow-500 px-4 py-2 text-yellow-500 rounded-md' to={`../${NAVIGATION.PATH.PHYSICS_RAPIER_WORLD}`}>Nee, breng mij terug naar de slaapkamer</Link>

          </div>

          

        </animated.div>
      </animated.div>
    );
};

export default GameOverPopup;
