import React, { ReactNode, useEffect, useRef } from 'react';

type props = {
  currentScore: number;
  highScore: number;
  isDarkmode: boolean;
};


const Scoreboard : React.FC<props> = ({ currentScore, highScore, isDarkmode}) => {

    return (
        <div className="bg-white rounded-md z-10 absolute top-0 left-0 m-8 p-4">
            <h1 className=" text-xl font-bold mb-4 uppercase">Scoreboard</h1>
            <hr className="my-4 "/>

            <h3 className="bg-lime-300 p-2 rounded flex justify-between gap-4">
                <b>Highscore:</b>
                <b>{highScore}</b>
                
            </h3>
            
            <p className="p-2 flex justify-between gap-4 mt-4">
                <i>Huidige score:</i>
                <i>{currentScore}</i>
            </p>


        </div>
    );
};

export default Scoreboard;