// import { useSpring } from "@react-spring/web";
// import { GroupProps } from "@react-three/fiber";
// import { MiniGameWorld } from "Components/Physics/Rapier/World/MinigameWorld";
// import HoverPopup from "Components/UserInterface/Popups/HoverPopup";
// import InstructionsMiniGame from "Components/UserInterface/Popups/InstructionsMiniGame";
// import GameOverPopup from "Components/UserInterface/Popups/gameOverPopup";
// import Scoreboard from "Components/UserInterface/ScoreBoard/ScoreBoard";

// import { Layout } from "Layouts/SceneRapierFirstPersonLayout";
// import { useEffect, useState } from "react";


// /**
//  * Page for Rapier World.
//  *
//  * @param {GroupProps} props
//  * @returns {React.JSX.Element}
//  */
// const MiniGamePage = (props: GroupProps): React.JSX.Element => {

//   // Clear sesion storage on page reload
 

//   // const [highscore, setHighscore] = useState<number>(() => {
//   //   const storedHighscore = localStorage.getItem("highscore");
//   //   return storedHighscore ? Number(storedHighscore) : 0;
//   // });

//   const [scores, setScores] = useState({
//     highscore: localStorage.getItem("highscore") ? Number(localStorage.getItem("highscore")) : 0,
//     currentScore: 0,
//   })

//   // const [currentScore, setCurrentScore] = useState(0);

//   const [color, setColor] = useState<string>(() => {
//     const storedColor = sessionStorage.getItem("randomColor");
//     return storedColor ? storedColor : "";
//   });

//   // const [popupsVisible, setPopupsVisible] = useState({
//   //   startGame: true,
//   //   gameOver: false
//   // });
//   // const [gameStarted, setGameStarted] = useState(false);

//   const [gameProgress, setGameProgress] = useState({
//     gameStarted: false,
//     gameOver: false
//   });


//   // _______ Update current score ___________
//   useEffect(() => {
//     sessionStorage.clear();

//     const interval = setInterval(()=>{
//       setScores( prev => {
//         const storedScore = sessionStorage.getItem("score");
//         return {
//           ...prev,
//           currentScore: storedScore ? Number(storedScore) : 0,
//         }
//       });

//       setGameProgress( prev => {
//         const storedGameOver = sessionStorage.getItem("gameOver");
//         return {
//           ...prev,
//           gameOver: storedGameOver === "true" ? true : false,
//         }
//       });



//     }, 5000);

//     // const interval2 = setInterval(()=>{
//     //   setColor(()=>{
//     //     const storedColor = sessionStorage.getItem("randomColor");
//     //     return storedColor ? storedColor : "";
//     //   });
//     // }, 2000)

//     return () => {
//       clearInterval(interval);
//       // clearInterval(interval2);
//     };
//   }, []);


//   // _______ Update highscore ___________
//   useEffect(() => {
//     setScores( prev => {
//       const storedHighscore = localStorage.getItem("highscore");
//       return {
//         ...prev,
//         highscore: storedHighscore ? Number(storedHighscore) : 0
//         }
//     });
//   }, [scores.currentScore]);

//   function startGame(){
//     setTimeout(()=> sessionStorage.setItem("isPointerLockActive", "true"), 500);
//     setGameProgress({
//       gameOver: false,
//       gameStarted: true
//     });
//   }


//   const popupAnimation = useSpring({
//     opacity: !(gameProgress.gameStarted) || gameProgress.gameOver ? 1 : 0,
//     transform: !(gameProgress.gameStarted) || gameProgress.gameOver ? 'scale(1)' : 'scale(0.5)',
//     config: { duration: 300 }
// });

  

//   return (
//     <>
//     <Scoreboard 
//       currentScore={scores.currentScore} 
//       highScore={scores.highscore} 
//       isDarkmode={false}
//     />

//     {
//       color !== "" &&
//       (
//         <div className="z-10 absolute top-0 left-0 w-full flex justify-center mt-8">
//           <div className={`bg-${color}-400 rounded-md  py-4 px-8 border-4 border-white`}>
//             <h3 className="font-bold text-lg text-white">{color.charAt(0).toUpperCase() + color.slice(1)}</h3>
//           </div>

//         </div>
        
//       )
//     }

//     {
//       !(gameProgress.gameStarted) && (
//         <>
//           <div className="absolute bg-yellow-300 w-full h-full top-0 left-0 z-10"></div>
//           <InstructionsMiniGame handleClose={startGame} styleAnimated={popupAnimation}/>
//         </>
//       )
//     }

//     {
//       (gameProgress.gameOver) && (
//         <>
//           <div className="absolute bg-red-700 w-full h-full top-0 left-0 z-10"></div>
//           <GameOverPopup isDarkmode={false} handleGameRestart={startGame}  styleAnimated={popupAnimation} score={scores.currentScore}/>
//         </>
//       )
//     }
    
    
    
//     <Layout>
//       <MiniGameWorld gameStarted={gameProgress.gameStarted}/>
//     </Layout>
//     </>
    
    
//   );
// };

// export { MiniGamePage };


import { useSpring } from "@react-spring/web";
import { GroupProps } from "@react-three/fiber";
import { MiniGameWorld } from "Components/Physics/Rapier/World/MinigameWorld";
import InstructionsMiniGame from "Components/UserInterface/Popups/InstructionsMiniGame";
import GameOverPopup from "Components/UserInterface/Popups/gameOverPopup";
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

  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  // _______ Update current score ___________
  useEffect(() => {
    sessionStorage.clear();

    if(!gameOver){
      const interval = setInterval(()=>{
        setCurrentScore(()=>{
          const storedScore = sessionStorage.getItem("score");
          return storedScore ? Number(storedScore) : 0;
        });
  
        setGameOver(sessionStorage.getItem("gameOver") === "true" ? true : false);
  
        if(gameOver){
          setGameStarted(false);
        }
  
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
          <div className={`bg-${color}-400 rounded-md  py-4 px-8 border-4 border-white`}>
            <h3 className="font-bold text-lg text-white">{color.charAt(0).toUpperCase() + color.slice(1)}</h3>
          </div>

        </div>
        
      )
    }


    {/* Instruction */}
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


    {/* Game over */}
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
