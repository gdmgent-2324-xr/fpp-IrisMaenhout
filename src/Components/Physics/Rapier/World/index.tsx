import { Player } from "Components/Physics/Rapier/World/Player";
import { RoomModel } from "Components/Room/RoomModel";
import { useEffect, useState } from "react";


const PhysicsRapierWorld = () => {
  // State
  const [timeSettings, setTimeSettings] = useState({
    isDarkmode: false,
    today: new Date()
  });


  const getCurrentTime = (date: Date) => {
    // Get current time
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
    }, 30000); // 1/2 minute

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timeSettings.today]);

  return (
    <group name="Rapier World">
      <RoomModel isDarkMode={timeSettings.isDarkmode} time={getCurrentTime(timeSettings.today)}/>
      <Player/>
    </group>
  );
};

export { PhysicsRapierWorld as World };
