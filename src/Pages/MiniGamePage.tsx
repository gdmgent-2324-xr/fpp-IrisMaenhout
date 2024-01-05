import { GroupProps } from "@react-three/fiber";
import { MiniGameWorld } from "Components/Physics/Rapier/World/MinigameWorld";
import Scoreboard from "Components/UserInterface/ScoreBoard/ScoreBoard";

import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
import { useEffect, useState } from "react";


/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const MiniGamePage = (props: GroupProps): React.JSX.Element => {

  // Clear sesion storage on page reload
 

  const [highscore, setHighscore] = useState<number>(() => {
    const storedHighscore = localStorage.getItem("highscore");
    return storedHighscore ? Number(storedHighscore) : 0;
  });

  const [currentScore, setCurrentScore] = useState(0);

  const [color, setColor] = useState<string>(() => {
    const storedColor = sessionStorage.getItem("randomColor");
    return storedColor ? storedColor : "";
  });


  // _______ Update current score ___________
  useEffect(() => {
    sessionStorage.clear();

    const interval = setInterval(()=>{
      setCurrentScore(()=>{
        const storedScore = sessionStorage.getItem("score");
        return storedScore ? Number(storedScore) : 0;
      });

    }, 5000);

    const interval2 = setInterval(()=>{
      setColor(()=>{
        const storedColor = sessionStorage.getItem("randomColor");
        return storedColor ? storedColor : "";
      });
    }, 2000)

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);


  // _______ Update highscore ___________
  useEffect(() => {
    setHighscore(()=>{
      const storedHighscore = localStorage.getItem("highscore");
      return storedHighscore ? Number(storedHighscore) : 0;
    });
  }, [currentScore]);

  

  console.log(highscore);

  return (
    <>
    <Scoreboard 
      currentScore={currentScore} 
      highScore={highscore} 
      isDarkmode={false}
    />

    {
      color !== "" &&
      (
        <div className="z-10 absolute top-0 left-0 w-full flex justify-center mt-8">
          <div className={`bg-${color}-300 rounded-md  py-4 px-8 border-4 border-white`}>
            <h3 className="font-bold text-lg text-white">{color.charAt(0).toUpperCase() + color.slice(1)}</h3>
          </div>

        </div>
        
      )
    }
    
    
    <Layout>
      <MiniGameWorld />
    </Layout>
    </>
    
    
  );
};

export { MiniGamePage };
