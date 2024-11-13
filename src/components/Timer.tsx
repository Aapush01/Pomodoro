import React, { useEffect, useState } from 'react'

const Timer = ({ initialMinutes = 25, initialSeconds = 0}) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    // Start or Pause the timer
    const toggleTimer = () => {
        setIsActive(!isActive);
    }
 
    //Effect to run the timer
    useEffect(() => {
        let timerInterval:any;
        if(isActive) {
            timerInterval = setInterval(() => {
                if(seconds > 0) {
                    setSeconds(seconds - 1);
                }else if (seconds === 0 && minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else if(minutes === 0 && seconds === 0) {
                    setIsActive(false);
                    alert("Time is up!")
                }
            }, 1000);
        }
        //cleanup interval on component ummount or pause
        return () => clearInterval(timerInterval);
    }, [isActive, seconds, minutes])
  return (
    <div className='flex flex-col justify-center items-center py-20'>
      <div className='font-mono text-9xl font-extrabold '>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2,"0")}
      </div>
      <div className='font-mono text-3xl font-bold py-28'>
        <button onClick={toggleTimer}>{isActive? "Pause":"Start"}</button> 
      </div>
    </div>
  )
}

export default Timer
