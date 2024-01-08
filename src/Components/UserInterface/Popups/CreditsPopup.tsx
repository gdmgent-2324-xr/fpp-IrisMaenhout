import React, { useRef } from 'react';
import { usePopupHelper } from 'Hooks/Helpers/usePopupHelper';
import Popup from './Popup';

type PopupProps = {
  handleClose: VoidFunction;
  isDarkmode: boolean;
  styleAnimated: any;
};

const CreditsPopup: React.FC<PopupProps> = ({ handleClose, isDarkmode, styleAnimated }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    usePopupHelper(popupRef);

    return (
      <Popup 
        title="Credits" 
        handleClose={handleClose} 
        isDarkmode={isDarkmode} 
        styleAnimated={styleAnimated}>
        
            <h2 className='mb-2 font-bold'>Afbeeldingen</h2>
            <ul>
                <li className='list-disc list-inside'>Foto van Rome door <a className='underline' href="https://unsplash.com/@chris_czermak?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target='_blank' rel="noreferrer">Chris Czermak</a> op <a href="https://unsplash.com/photos/brown-dome-concrete-building-near-bridge-at-daytime-7ybKmhDTcz0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"  className='underline list-inside' target='_blank' rel="noreferrer">Unsplash</a></li>

            </ul>

            <h2 className='mb-2 font-bold mt-6'>Iconen</h2>
            <ul>
                <li className='list-disc list-inside'>Interface iconen gemaakt door <a href="https://fontawesome.com/" className='underline' target='_blank' rel="noreferrer">Font Awesome</a></li>
                <li className='list-disc list-inside'>Project iconen en post-it iconen gemaakt door <a href="https://www.flaticon.com" target='_blank' rel="noreferrer" className='underline'>Freepik - Flaticon</a></li>
            </ul>

            <h2 className='mb-2 font-bold mt-6'>Audio</h2>
            <ul>
                <li className='list-disc list-inside'>Liedje: <a className="underline" href="https://www.youtube.com/watch?v=kOCkne-Bku4" target='_blank' rel="noreferrer">Paris in the rain - Lauv</a></li>
                <li className='list-disc list-inside'>Andere audio: <a className="underline" href="https://pixabay.com/" target='_blank' rel="noreferrer">Pixabay</a></li>
            </ul>


            <h2 className='mb-2 font-bold mt-6'>3D models</h2>
            <ul>
                <li className='list-disc list-inside'>Gemaakt door Iris Maenhout.</li>
            </ul>

            <h2 className='mb-2 font-bold mt-6'>Website</h2>
            <ul>
                <li className='list-disc list-inside'>Gemaakt door Iris Maenhout, vertrekkende uit de startfiles van Olivier Parent.</li>
            </ul>
      </Popup>
    );
};

export default CreditsPopup;
