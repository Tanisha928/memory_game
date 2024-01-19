import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import starfill from '../assets/stars-filled.svg'
import starempty from '../assets/stars-empty.svg'
import medal from '../assets/medal.svg'
import flip from '../assets/flip.svg'
import refresh from '../assets/refresh.svg'
import * as React from 'react';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function GameFinish(props){
    const [open, setOpen] = React.useState(true);
 
  const handleClose = () => {
    setOpen(false);
    
    window.location.reload();
}

  const resetHandler = () => {
    window.location.reload();

  }
  

  return(
    <>
    
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='text-center justify-center items-center'>
                
                <img src={props.win ? starfill : starempty} alt="game status" className='ms-28' />
                <div className='text-red-700 font-bold text-4xl mt-6'>{props.win ? 'You’re a Champ!' : 'Next time, champ! Time Over!'}</div>
                <div className='flex mt-8'>
                <div className='mx-6'>
                <div className='bg-white rounded-xl h-9 flex items-center justify-start w-48 border'>
                    
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                    <img src={medal} alt="medal"></img>
                </div>
                <div className='ms-5 text-lg'>Score : {props.score}</div>
                </div>
            </div>
            <div className='mx-6'>
                <div className='bg-white rounded-xl h-9 flex items-center justify-start w-48 border'>
                    
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border">
                    <img src={flip} alt="flip"></img>
                </div>
                <div className='ms-5 text-lg'>Flips : {props.flipCount}</div>
                </div>
            </div>
                </div>
                <img src={refresh} alt='refresh' className='mx-48 mt-8' onClick={resetHandler} />
            </div>
        
        </Box>
      </Modal>
    </>
  )

}

export default GameFinish;