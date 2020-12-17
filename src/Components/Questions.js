import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'
import demoQuestions from '../Data/demodata'
import {Question} from './Question'


export const Questions = () => {
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [pointer, setPointer] = useState(0)
    const history = useHistory()


    const shuffelQuestions= (array)=>{
        for(let i = array.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        setQuestions((question)=>question = array.slice(0,5))
    }
    useEffect(()=>{
        if(demoQuestions){
            shuffelQuestions(demoQuestions)
            Cookie.set('score', score)
        }
    },[])

    useEffect(()=>{
        if(pointer && pointer >= questions.length){
            history.push('/result')
        }
    },[pointer])

    useEffect(()=>{
        Cookie.set('score', score)
    },[score])

    if(questions.length === 0){
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }
    else if(pointer >= questions.length){
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }
    else{
        return (
            <Question question={questions[pointer]} 
            pointer={pointer} 
            setPointer={setPointer} 
            score={score} 
            setScore={setScore} />
        )
    }
}
