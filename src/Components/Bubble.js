import React, { useEffect, useState } from 'react'

export const Bubble = ({flag}) => {
    const [text, setText] = useState('')
    useEffect(()=>{
        if(flag===1){
            setText('Correct')
        }
        else{
            setText('Wrong')
        }
    },[])
    if(setText){
        return (
            <div className={flag ===1 ? "bubble correct": "bubble wrong"}>
                <div>{text}</div>
            </div>
        )
    }
}
