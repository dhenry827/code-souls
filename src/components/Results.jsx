import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GameDataContext } from "./Game";
import { TopicContext } from "../App";

const Results = () => {
    const {changeTopic} = useContext(TopicContext)
    const { status, setStatus, bestStreak, setStreak, setMultiplier, highMult, setBestStreak, setPlayerHp, setBossHP, elapsedTime } = useContext(GameDataContext)

    const reset = () => {
        setStreak(0)
        setBestStreak(0)
        setMultiplier(1)
        setPlayerHp(1000)
        setBossHP(100000)
        setStatus('')
        changeTopic([])
    }

    useEffect(() => {

    }, [])
    return (
        <div>
            <h1>YOU {status} </h1>
            <div>
                Best Streak: {bestStreak}<br/>
                Highest Multiplier: {highMult}
                {/* Elapsed Time: {elapsedTime} */}
            </div>
            <Link to={'/'}><button onClick={reset}>Play Again</button></Link>
        </div>
    )
}

export default Results