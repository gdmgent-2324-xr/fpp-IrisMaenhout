import React, { ReactNode, useEffect, useRef } from 'react';
import { animated } from '@react-spring/web';

import { usePopupHelper } from 'Hooks/Helpers/usePopupHelper';
import Popup from './Popup';

type PopupProps = {
  handleClose: VoidFunction;
  styleAnimated: any;
};


const InstructionsMiniGame : React.FC<PopupProps> = ({ handleClose, styleAnimated }) => {

    return (
        
        <Popup 
            title="Color switch - mini game" 
            handleClose={handleClose} 
            isDarkmode={false} 
            styleAnimated={styleAnimated}
        >

            <div>

                <h4 className="text-md font-bold mb-6 mt-4">Spelregels</h4>
                <p>De spelregels zijn simpel, ga op de juiste kleur staan voor de tegels naar beneden vallen en probeer zo lang mogelijk in leven te blijven.</p>
                <p>Succes !!</p>

                <h4 className="text-md font-bold mb-6 mt-12">Hoe moet ik bewegen?</h4>
                
                <div className="grid grid-cols-2 gap-x-32 gap-y-6">
                    <div className="shortcut flex justify-between w-full gap-12">
                        <p>Naar voor</p>
                        <div className="flex gap-4">
                            <p className="bg-slate-100 px-4 border-2 border-slate-200">E</p>
                            <p>of</p>
                            <p className="bg-slate-100 px-4 border-2 border-slate-200"><i className="fa-solid fa-caret-up"></i></p>
                        </div>

                    </div>

                    <div className="shortcut flex justify-between w-full">
                        <p>Naar achteren</p>
                        <div className="flex gap-4">
                            <p className="bg-slate-100 px-4 border-2 border-slate-200">D</p>
                            <p>of</p>
                            <p className="bg-slate-100 px-4 border-2 border-slate-200"><i className="fa-solid fa-caret-down"></i></p>
                        </div>

                    </div>

                    <div className="shortcut flex justify-between w-full">
                        <p>Naar links</p>
                        <div className="flex gap-4">
                            <p className="bg-slate-100 px-4 border-2 border-slate-200">S</p>
                            <p>of</p>
                            <p className="bg-slate-100 px-4 border-2 border-slate-200"><i className="fa-solid fa-caret-left"></i></p>
                        </div>

                    </div>

                    <div className="shortcut flex justify-between w-full">
                        <p>Naar rechts</p>
                        <div className="flex gap-4">
                            <p className="bg-slate-100 px-4 border-2 border-slate-200">F</p>
                            <p>of</p>
                            <p className="bg-slate-100 px-4 border-2 border-slate-200"><i className="fa-solid fa-caret-right"></i></p>
                        </div>

                    </div>

                    <div className="shortcut flex justify-between w-full">
                        <p>Rennen</p>
                        <div className="flex gap-4">
                            <p className="bg-slate-100 px-4 border-2 border-slate-200">SHIFT</p>
                            <p>=</p>
                            <p className="bg-slate-100 px-4 border-2 border-slate-200"><i className="fa-solid fa-arrow-up"></i></p>
                        </div>

                    </div>
                </div>

            
              
            </div>
        </Popup>
    );
};

export default InstructionsMiniGame;