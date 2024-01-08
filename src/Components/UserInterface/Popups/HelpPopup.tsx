import React from 'react';

import Popup from './Popup';
import KeyShortcuts from './KeyShortcuts/KeyShortcuts';

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

                <h4 className="text-lg font-bold mb-6">Hoe kan ik bewegen?</h4>
                <KeyShortcuts />

                <h4 className="text-lg font-bold mb-4 mt-8">Mededelingen in verband met popup's en audio</h4>
                <ul className="mb-2">
                    <li className='list-disc list-inside'>In deze website zitten een aantal popups en knoppen. Om dit te kunnen gebruiken moet je eerst op de <b className="font-normal bg-slate-100 px-4 border-2 border-slate-200 mx-2">ESC</b> toets drukken.</li>

                    <li className='list-disc list-inside'>Merk je op dat je jouw cursor niet meer kunt bewegen? Klik dan eens op de 3D scene en dit zou het moeten oplossen.</li>

                    <li className='list-disc list-inside'>Zorg er voor dat jouw geluid aan staat want sommige objecten spelen geluid af.</li>
                </ul>
        
            </div>
        </Popup>
    );
};

export default HelpPopup;