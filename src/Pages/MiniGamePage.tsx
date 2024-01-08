import { useSpring } from "@react-spring/web";
import { GroupProps } from "@react-three/fiber";
import { MiniGameWorld } from "Components/Physics/Rapier/World/MinigameWorld";
import IconBtn from "Components/UserInterface/Btns/IconBtn";
import InstructionsMiniGame from "Components/UserInterface/Popups/InstructionsMiniGame";
import GameOverPopup from "Components/UserInterface/Popups/GameOverPopup";
import Scoreboard from "Components/UserInterface/ScoreBoard/ScoreBoard";
import { NAVIGATION } from "Configs/navigation";

import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * Page for Mini game.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const MiniGamePage = (props: GroupProps): React.JSX.Element => {

  // Check if there is a highscore saved in localstorage otherwise it get set to 0
  const [highscore, setHighscore] = useState<number>(() => {
    const storedHighscore = localStorage.getItem("highscore");
    return storedHighscore ? Number(storedHighscore) : 0;
  });

  const [currentScore, setCurrentScore] = useState(0);

  const [color, setColor] = useState<string>(() => {
    const storedColor = sessionStorage.getItem("randomColor");
    return storedColor ? storedColor : "";
  });

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  // _______ Update current score ___________
  useEffect(() => {
    // Clear sesion storage on page reload
    sessionStorage.clear();

    if(!gameOver){
      const interval = setInterval(()=>{
        setCurrentScore(()=>{
          const storedScore = sessionStorage.getItem("score");
          return storedScore ? Number(storedScore) : 0;
        });
        
        // Check if game is over
        setGameOver(sessionStorage.getItem("gameOver") === "true" ? true : false);
        
        // If game is over then set gameStarted to false so that gameplay is disabled.
        if(gameOver){
          setGameStarted(false);
        }
  
      }, 5000);
      

      // Update current selected color
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
    }
  }, [gameOver]);


  // _______ Update highscore ___________
  useEffect(() => {
    setHighscore(()=>{
      const storedHighscore = localStorage.getItem("highscore");
      return storedHighscore ? Number(storedHighscore) : 0;
    });
  }, [currentScore]);

  function startGame(){
    setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);

    setGameStarted(true);
    if(gameOver){
      setGameOver(false);
      window.location.reload();
    }
    
  }


  // ___________ Animation values ______________
  const popupInstructionAnimation = useSpring({
    opacity: !gameStarted ? 1 : 0,
    transform: !gameStarted ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });

  const popupGameOverAnimation = useSpring({
    opacity: gameOver ? 1 : 0,
    transform: gameOver ? 'scale(1)' : 'scale(0.5)',
    config: { duration: 300 }
  });


  // Navigate to the room world by clicking on the navBtn
  const navigate = useNavigate();

  const handleClickRoomBtn = () => {
      setTimeout(()=>{
        navigate(`../${NAVIGATION.PATH.PHYSICS_RAPIER_WORLD}`);
      }, 500);
  }

  return (
    <>

    {/* Nav btn */}
    <IconBtn handleClick={handleClickRoomBtn} classNamesBtn="bg-amber-500 z-10 absolute bottom-0 left-0 hover:from-amber-500 hover:to-yellow-400 flex justify-center items-center" iconClassNames="fa-bed text-xl"/>

    <Scoreboard 
      currentScore={currentScore} 
      highScore={highscore}
    />

    {/* Color div*/}
    {
      color !== "" &&
      (
        <div className="z-10 absolute top-0 left-0 w-full flex justify-center mt-8">
          <div className={`bg-${color}-400 rounded-md  py-4 px-8 border-4 border-white`}>
            <h3 className="font-bold text-lg text-white">{color.charAt(0).toUpperCase() + color.slice(1)}</h3>
          </div>

        </div>
        
      )
    }


    {/* Instruction popup*/}
    {
      !gameStarted && (
        <>
          <div className="absolute bg-black w-full h-full top-0 left-0 z-10 backdrop-blur-md opacity-90"></div>
          <InstructionsMiniGame handleClose={startGame} styleAnimated={popupInstructionAnimation}/>
        </>
      )
    }

    
    
    
    
    <Layout>
      <MiniGameWorld gameStarted={gameStarted}/>
    </Layout>


    {/* Game over popup*/}
    {
      gameOver && (
       <>
          <div className="fixed bg-red-900 w-full h-full top-0 left-0 z-20"></div>
          <GameOverPopup isDarkmode={false} handleGameRestart={startGame}  styleAnimated={popupGameOverAnimation} score={currentScore}/>
        </>
       )
     }
    </>
    
    
  );
};

export { MiniGamePage };
