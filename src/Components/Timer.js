import React, {useEffect, useState} from 'react'

export const Timer = () => {
    const [time, setTime]= useState(5)
    
    useEffect(()=>{
        const timerFunction = setInterval(()=>{
            setTime(time => time-1)
        },1000)
        return ()=> clearInterval(timerFunction)
    },[])
    return (
        <>
           <p className="timer-text">Will proceed in <span className="timer-time">
               {time}</span>
            </p> 
        </>
    )
}
