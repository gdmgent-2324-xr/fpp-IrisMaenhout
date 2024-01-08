import React from 'react';

import Popup from './Popup';
import KeyShortcuts from './KeyShortcuts/KeyShortcuts';

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

                <h4 className="text-md font-bold mb-6 mt-12">Hoe kan ik bewegen?</h4>
                
                <KeyShortcuts />
        
            </div>
        </Popup>
    );
};

export default InstructionsMiniGame;