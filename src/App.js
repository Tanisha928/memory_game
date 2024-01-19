
import { useState,useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import ScoreHeaders from './components/ScoreHeaders';
import shapesRandom from './data';
import GameFinish from './components/GameFinish';

function App() {
  const [count,setCount] = useState(0);
  const [open,setOpen] = useState([]);
  const [cards,setCards] = useState(
    
      shapesRandom.map((ele)=>({id:ele.uniqueId,isOpen:false,isClick:true}))
    
  )
  const [flipCount,setFlipCount] = useState(0);
  const [score,setScore]= useState(0);
  const [timer,setTimer] = useState(30);
  const [isFirst,setIsFirst] = useState(false);
  const [matchCount,setMatchCount] = useState(0);
  const [gameFinish,setGameFinish] = useState(false);
  const [win,setWin] = useState(false);
  
  return (
    <>
    <h1 className='text-white text-center mt-10 text-5xl font-bold'>Memory Game</h1>
    <ScoreHeaders flipCount={flipCount} score={score} timer={timer}/>
    <div className='mt-20 ms-40 grid grid-cols-5 gap-4'>
    {shapesRandom.map((ele)=>(
      <Card key={ele.uniqueId} id={ele.uniqueId} shapeId={ele.shapeId} shape={ele.shape} count={count} setCount={setCount} open={open} setOpen={setOpen} cards={cards} setCards={setCards} flipCount={flipCount} setFlipCount={setFlipCount} score={score} setScore={setScore} isFirst={isFirst} setIsFirst={setIsFirst} timer={timer} setTimer={setTimer} matchCount={matchCount} setMatchCount={setMatchCount} setWin={setWin} setGameFinish={setGameFinish} />
    ))}

    </div>
      {gameFinish && <GameFinish win={win} flipCount={flipCount} score={score}  />}
    
    </>
  );
}

export default App;
