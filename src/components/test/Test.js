import { useState  } from 'react'
import "./style.css"
import arow from "./arow.png"

function Test(){
    const [RoundNumber, setRoundNumber] = useState(1)
    const [DailyStoppingDistance, setDailyStoppingDistance] = useState(0)
    const StoppingDistance = 3
    const side = 1
    
        function Round(){
            setRoundNumber(RoundNumber+1)
            setDailyStoppingDistance(DailyStoppingDistance+StoppingDistance)
            if(RoundNumber>4){
                setDailyStoppingDistance(DailyStoppingDistance/4)
            }
    
     alert(DailyStoppingDistance)
    }
    
    switch(side){
        case 0:
      return <>
          <button className= "button" onClick={Round}>stop</button>
     </>
     break;
     case 1:
        return <>
        <div className="back_center_Left"> <div className="text_box">Move the phone a bit to the left so the dot is in your center</div> 
        <img  className="flip_img_left"src={arow} alt="img"/></div> 
        <button className= "button" onClick={Round}>stop</button>
        </>
       break;
       case 2:
        return <>
            <div className="back_center_Right"> <div className="text_box">Move the phone a bit to the right so the dot is in your center</div>
            <img  className="flip_img_right"src={arow} alt="img"/></div>
            <button className= "button" onClick={Round}>stop</button>
           </>
       break;
       default:
        break;
     
    }
    
    
       
    }

    export default Test