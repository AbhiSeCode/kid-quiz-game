import React, {useEffect} from 'react'
import { Form } from './Form'
import Cookie from 'js-cookie'


export const Home = () => {

    useEffect(()=>{
        Cookie.remove('name')
        Cookie.remove('score')
    },[])
    return (
        <>
            <Form/>
        </>
    )
}
