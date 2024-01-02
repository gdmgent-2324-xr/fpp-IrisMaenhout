import React, { ReactNode, useEffect, useRef } from 'react';
import { animated } from '@react-spring/web';


import bgImgCard from "./images/Bg_buisnessCard.jpg";
import { usePopupHelper } from 'Hooks/Helpers/usePopupHelper';
import Popup from './Popup';

type PopupProps = {
  handleClose: VoidFunction;
  styleAnimated: any;
};


const HelpPopup : React.FC<PopupProps> = ({ handleClose, styleAnimated }) => {

    return (
        
        <Popup 
            title="Uitleg en keyboard shortcuts" 
            handleClose={handleClose} 
            isDarkmode={false} 
            styleAnimated={styleAnimated}
        >

            <div>

                <h4 className="text-lg font-bold mb-6">Stappen (shortcuts)</h4>
                
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
                </div>

                <h4 className="text-lg font-bold mb-4 mt-8">Popup's</h4>
                <ul className="mb-2">
                    <li className='list-disc list-inside'>In deze website zitten een aantal popups en knoppen. Om dit te kunnen gebruiken moet je eerst op de <b className="font-normal bg-slate-100 px-4 border-2 border-slate-200 mx-2">ESC</b> toets drukken.</li>
                    <li className='list-disc list-inside'>Merk je op dat je jouw cursor niet meer kunt bewegen? Klik dan eens op de 3D scene en dit zou het moeten oplossen.</li>
                </ul>
              
            </div>
        </Popup>
    );
};

export default HelpPopup;