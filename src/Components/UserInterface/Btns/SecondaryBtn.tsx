import React from 'react';

type Props = {
  handleClick: VoidFunction;
  text: string;
  classNames: string;
};


const SecondaryBtn : React.FC<Props> = ({ handleClick, text, classNames }) => {

    return (
        <button 
        className={`rounded-md m-8 px-4 py-2 hover:scale-125 transition duration-300 ease-in-out hover:bg-gradient-to-r ${classNames}`}
        onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default SecondaryBtn;
