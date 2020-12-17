import React, { useState } from 'react'
import { Timer } from './Timer'
import selectSound from '../sounds/select.mp3'
import {Bubble} from './Bubble'

export const Question = ({question, pointer, setPointer, score, setScore}) => {
    const [disable, setDisable] = useState(true)
    const [answer, setAnswer] = useState(null)
    const [selected, setSelected] = useState(null)
    const [flag, setFlag] = useState(null)
    const [disableOptions, setDisableOptions] = useState(false)
    const sound = new Audio(selectSound)
    

    const nextQuestion = ()=>{
        setDisableOptions(true)
        setAnswer(question.answer)
        if(selected === question.answer){
            setFlag(1)
            setScore((score)=> score+1)
        }
        else{
            setFlag(2)
        }
        setTimeout(() => {
            setAnswer(null)
            setFlag(null)
            setPointer(pointer=>pointer+1)
            setDisableOptions(false)
            setDisable(true)
            setSelected(null)   
        }, 5000);
    }

    const selectOption= (selected)=>{
        sound.play()
        setSelected(selected)
        setDisable(false)  
    }

    return (
        <>
        {flag && <Bubble flag={flag}/>}
        <div className="question">
            {disableOptions &&<Timer/>}
            <div className="question-element">
                <p>Your Score: {score}</p>
                <p>Question No. {pointer+1}: {question.question}</p>
                {question.options.map((option, index)=>{
                    return (
                        <div key={index} className="question-options">
                            <button id={answer === index && "correct"}
                            className={index === selected? "option selected":"option"}
                            disabled={disableOptions}
                            value={index} 
                            onClick={(e)=>selectOption(parseInt(e.target.value))}>
                            {option}</button>
                        </div>
                    )
                })}
            </div>
            {!disable && <button className="next" onClick={()=>nextQuestion()}>Next</button>}
        </div>
        </>
    )
}
