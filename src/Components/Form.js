import React, {useEffect, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'

export const Form = () => {
    const [name, setName] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const controls = useAnimation()
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name){
            setShowPopup(true)
            controls.start({
                x: ['2%', '-2%' , '2%', '-2%', '2%' ,'0%'],
                transition: {duration: .6},
                outlineColor: '#dd0000',
            })
        }
        else{
            Cookie.set('name', name)
            history.push('/questions')
        }
    }
    useEffect(()=>{
        if(showPopup){
            setTimeout(()=>{
                setShowPopup(false)
            },2000)
        }
    },[showPopup])

    return (
        <form className="form" 
        onSubmit={handleSubmit}>
            {showPopup && <div className="form-popup">
                <p>Please enter your name</p>
                </div>}
            <motion.div animate={controls} className="form-element">
                <input type="text" 
                    id="name" 
                    value={name}
                    placeholder="Enter your name"
                    autoComplete="off"
                    onChange={(e)=>{setName(e.target.value)}}/>
            </motion.div>
            <motion.div 
            className="form-element">
                <button className="submit" 
                type="submit">Let's Play</button>
            </motion.div>
        </form>
    )
}
