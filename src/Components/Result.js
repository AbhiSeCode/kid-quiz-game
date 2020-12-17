import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'
import Confetti from 'react-confetti'
import applause from '../sounds/applause.wav'

export const Result = () => {
    const [name, setName] = useState('')
    const [score, setScore]= useState(0)
    const sound = new Audio(applause)
    const history = useHistory()
    useEffect(()=>{
        if(Cookie.get('name') && Cookie.get('score')){
            sound.play()
            setName(Cookie.get('name'))
            setScore(Cookie.get('score'))
            Cookie.remove('name')
            Cookie.remove('score')
        }
        else{
            history.push('/')
        }
    },[])
    if(!name){
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }
    else{
        return (
            <div className="result">
                {score >0 && <Confetti/>}
                <div className="page-result">
                    <p>{name} got {score} correct answers</p>
                </div>
            </div>
        )
    }
}
