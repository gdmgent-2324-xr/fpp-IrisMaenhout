import React from 'react';

type props = {
  currentScore: number;
  highScore: number;
};


const Scoreboard : React.FC<props> = ({ currentScore, highScore}) => {

    return (
        <div className="bg-white rounded-md z-10 absolute top-0 left-0 m-8 p-4">
            <h1 className=" text-xl font-bold mb-4">Scorebord</h1>
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