import { useEffect, useState } from 'react';
import cardFront from '../assets/card-front.svg'


function Card(props){

    const [isShape,setIsShape] = useState(false);
    const [isClickEnable,setIsClickEnable] = useState(true);

    useEffect(() => {
        const a = props.cards.find((card) => card.id === props.id);
        if(!a.isClick){
            setIsShape(true);
        }else{setIsShape(a.isOpen);}
        
        setIsClickEnable(a.isClick);
       
        
      }, [props.cards, props.id]);

      useEffect(() => {
        if (props.timer > 0 && props.isFirst) {
          const time = setTimeout(() => {
            props.setTimer(props.timer - 1);
          }, 1000);
    
          
          return () => clearTimeout(time);
        }
        else if(props.timer<1){
            props.setGameFinish(true);
        }
      }, [props.timer,props.isFirst]);

    const changeHandler = (id) => {
     
        props.setFlipCount(props.flipCount+1);
        if(!props.isFirst){
            props.setIsFirst(true);
           
        }
        if(!isShape){
            props.setCount(props.count+1);
            props.setOpen([...props.open,{id:props.id,shapeId:props.shapeId}]);
     
        }
        else{
            props.setCount(props.count-1);
            props.setOpen([]);
        }
       
        setIsShape(!isShape);  

       
        if(props.count+1 === 2){
        if(props.open[0].shapeId === props.shapeId && props.open[0].id !== props.id){
           
            const updateCards = props.cards.map((ele)=>{
                if((ele.id === props.open[0].id) || (ele.id === props.id) ){    
                    return{...ele,isClick : false};
                }
                return ele;}
                
                )
                props.setCards(updateCards);
                props.setOpen([]);
                props.setCount(0);
                props.setScore(props.score+10);
                props.setMatchCount(props.matchCount+1);
                if(props.matchCount+1===5 && props.timer>0){
                    props.setWin(true);
                    props.setGameFinish(true);
                }
            //console.log("match");
          }
          else{
            
            
            const time=setTimeout(()=>{
                setIsShape(false);
                const updateCards = props.cards.map((ele)=>{
                    if(ele.id === props.open[0].id){    
                        return{...ele,isOpen : false};
                    }
                    return ele;}
                    )
                props.setCards(updateCards);
                
               
                ;
            },400)
            props.setOpen([]);
            props.setCount(0);
            props.setScore(props.score-5);

            //console.log("Not match");
            
            return ()=>clearTimeout(time);
            
          }
        }
        props.cards.map((ele)=>{
            if(ele.id === id){
                ele.isOpen = !isShape;
                
            }
        })
        
    }
    const clickHandler = () => {
        changeHandler(props.id);
    }
   
    return (
        <>
            <div key={props.id} className='my-3' onClick={isClickEnable ? clickHandler : null}>
                <div id="card-content">
                    {!isShape && <div id="card-front">
                        <img src={cardFront}  alt="Card Front" />
                    </div>}
                   {isShape && <div id="card-back" className='border w-36 h-36 rounded-lg bg-white flex justify-center items-center'>
                        <img src={props.shape}  alt="shape"/>
                    </div>}
                </div> 
            </div>
        </>
    )

}

export default Card;