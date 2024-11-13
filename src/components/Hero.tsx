import React from 'react'
import Timer from './Timer'

const Hero = () => {
  return (
    <div className='font-mono flex flex-col justify-center items-center'>
      <div className='flex gap-6 py-10'>
         <button>Pomodoro</button>
         <button>Short Break</button>
         <button>Long Break</button>
      </div>
      <div> <Timer/> </div>
    </div>
  )
}

export default Hero
