import React, { useState } from 'react';
import './Main.scss';
import dice from './Images/icon-dice.svg'

const Main = () => {

    const [adviceCount, setAdviceCount] = useState(1)
    const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.")

    const getQuote = async() =>{
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const res = await response.json();
        setAdvice(res.slip.advice)
        setAdviceCount(adviceCount + 1)
    }

    return (
        <main>
            <h1 aria-live='polite'>
                Advice #{adviceCount}
            </h1>
            <p aria-live='polite'>
                "{advice}"
            </p>
            <div className='pattern-divider'/>
            <button onClick={() => getQuote().catch(err =>{console.error(err)})}>
                <img src={dice} alt='shuffle advice' />
            </button>
        </main>
    );
}
 
export default Main;