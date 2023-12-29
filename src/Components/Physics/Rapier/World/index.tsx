// import { Floor } from "Components/Physics/Rapier/World/Floor";
import { Obstacles } from "Components/Physics/Rapier/World/Obstacles";
import { Player } from "Components/Physics/Rapier/World/Player";
import { RoomModel } from "Components/Room/RoomModel";
import { Floor } from "Components/Room/Floor/Floor";
import { useEffect, useRef, useState } from "react";
import { Environment, SoftShadows } from "@react-three/drei";
import { Bloom } from "Components/Effects/Bloom";
import {
  Cylinder,
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";


const PhysicsRapierWorld = () => {

  const [timeSettings, setTimeSettings] = useState({
    isDarkmode: false,
    today: new Date()
  });

  const pointerRef = useRef<any>(null!);


  const getCurrentTime = (date: Date) => {
    // const today = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    // Format the time string (add leading zeros if needed)
    const formattedHour = currentHour < 10 ? `0${currentHour}` : currentHour;
    const formattedMinute =
      currentMinute < 10 ? `0${currentMinute}` : currentMinute;

    return `${formattedHour}:${formattedMinute}`;
  };



  

  useEffect(() => {

    const currentHour = timeSettings.today.getHours();

    // Check if it's night and place the default value of isDarkmode to true or false
    if (currentHour < 6 || currentHour >= 18) {
      setTimeSettings((prevTimeSettings)=>(
        {
          ...prevTimeSettings,
          isDarkmode: true
        }
      ));
    } else {
      setTimeSettings((prevTimeSettings)=>(
        {
          ...prevTimeSettings,
          isDarkmode: false
        }
      ));
    }


    // Update the time every minute
    const interval = setInterval(() => {
      setTimeSettings((prevTimeSettings)=>(
        {
          ...prevTimeSettings,
          today: new Date()
        }
      ));
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timeSettings.today]);


  

  // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (
    <group name="Rapier World">
      {/* <Floor />
      <Obstacles /> */}
       {/* <SoftShadows samples={20} /> */}
      {/* <SoftShadows size={30} samples={18}/> */}
      <RoomModel isDarkMode={timeSettings.isDarkmode} time={getCurrentTime(timeSettings.today)} pointerRef={pointerRef}/>
      <Player pointerRef={pointerRef}/>

      <PointerLockControls ref={pointerRef} />

      {/* <Environment preset={isDarkMode? "night" : "sunset"} /> */}
    </group>
  );
};

export { PhysicsRapierWorld as World };
