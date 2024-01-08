import React from 'react';

const KeyShortcuts  = () => {

    return (

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

            <div className="shortcut flex justify-between w-full">
                <p>Springen</p>
                <p className="bg-slate-100 px-4 border-2 border-slate-200 min-w-[10rem] text-center">SPATIEBALK</p>
            </div>
        </div>
    )
        
        
};

export default KeyShortcuts;
