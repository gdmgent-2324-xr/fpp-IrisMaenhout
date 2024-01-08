import React from 'react';

type Props = {
  handleClick: VoidFunction;
  classNamesBtn: string;
  iconClassNames: string;
};


const IconBtn : React.FC<Props> = ({ handleClick, iconClassNames, classNamesBtn }) => {

    return (
        <button 
        className={`rounded-full w-[3rem] h-[3rem] m-8 hover:scale-125 transition duration-300 ease-in-out hover:bg-gradient-to-r ${classNamesBtn}`}
        onClick={handleClick}
        >
            <i className={`fa-solid ${iconClassNames} text-white`}></i>
        </button>
    );
};

export default IconBtn;
