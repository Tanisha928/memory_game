import medal from '../assets/medal.svg'
import flip from '../assets/flip.svg'
import timer from '../assets/stopwatch.svg'


function ScoreHeaders(props){
    return (
        <div className="mt-20 ms-96 flex">
            <div className='mx-6'>
                <div className='bg-white rounded-xl h-9 flex items-center justify-start w-48'>
                    
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                    <img src={medal} alt="medal"></img>
                </div>
                <div className='ms-5 text-lg'>Score : {props.score}</div>
                </div>
            </div>
            <div className='mx-6'>
                <div className='bg-white rounded-xl h-9 flex items-center justify-start w-48'>
                    
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                    <img src={flip} alt="flip"></img>
                </div>
                <div className='ms-5 text-lg'>Flips : {props.flipCount}</div>
                </div>
            </div>
            <div className='mx-6'>
                <div className='bg-white rounded-xl h-9 flex items-center justify-start w-48'>
                    
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                    <img src={timer} alt="timer"></img>
                </div>
                <div className='ms-5 text-lg'>Timer : {props.timer}</div>
                </div>
            </div>
        </div>
    )
}

export default ScoreHeaders;