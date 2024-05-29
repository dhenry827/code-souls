import React, { useState, createContext, useContext, useEffect } from "react";
import Results from "./Results";
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../stylesheets/styles.css'
import { TopicContext } from "../App";

export const GameDataContext = createContext();

const Game = () => {

  const topic = useContext(TopicContext)

  const [problems, setProblems] = useState(topic.topic) //because 'topic' is passed through useContext as an object we use dot notion to access the topic key within the topic object ex. topic = {topic: [problem: '', value: ''], changeTopic: (newTopic) => {..}} 
  const [index, setIndex] = useState(0)
  const [currentProblem, setCurrentProblem] = useState(problems[index])
  const [userAnswer, setUserAnswer] = useState('')
  const [currentExplanation, setCurrentExplanation] = useState('""')
  const [playerHp, setPlayerHp] = useState(1000)
  const [playerFlash, setPlayerFlash] = useState(false)
  const [bossHP, setBossHP] = useState(10000)
  const [bossFlash, setBossFlash] = useState(false)
  const [multiplier, setMultiplier] = useState(1)
  const [highMult, setHighMult] = useState(1)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [status, setStatus] = useState('')

  const shuffleProblems = (array) => { //randomly shuffles problems array
    for (let i = array.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let store = array[i]
      array[i] = array[randomIndex]
      array[randomIndex] = store
    }
  }

  useEffect(() => { //handles problem shuffling on initialization
    const shuffledProblems = [...problems]
    shuffleProblems(shuffledProblems)
    setProblems(shuffledProblems)
    setCurrentProblem(shuffledProblems[0])
  }, [])

  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState()

  useEffect(() => { //handles starting game timer 
    let startTime = Date.now()

    const timerInterval = setInterval(() => {
      setLapse(Date.now() - startTime)
    }, 0)

    console.log(currentProblem)

    return () => {
      clearInterval(timerInterval)
    }
  }, [])

  const timeConverter = () => { //converts time from miliseconds to HH/MM/SS format
    let seconds = Math.floor((lapse / 1000) % 60),
      minutes = Math.floor((lapse / (1000 * 60)) % 60),
      hours = Math.floor((lapse / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    setElapsedTime(hours + ":" + minutes + ":" + seconds)

  }

  useEffect(() => { //ensures time convertersion function runs whenever the state of lapse changes
    timeConverter()
  }, [lapse])

  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)

  const handleCorrectAnswer = () => { //handles events for a correct answer
    console.log('correct')
    setStreak(streak + 1)
    if (streak + 1 > bestStreak) {
      setBestStreak(streak + 1)
    }

    setBossHP(bossHP - 100 * multiplier)
    setBossFlash(true)
    setTimeout(() => setBossFlash(false), 500)

    if (streak > 0 && (streak + 1) % 5 === 0) {
      setMultiplier(multiplier + 0.5)
      if (multiplier + + 0.5 > multiplier) {
        setHighMult(multiplier + 0.5)
      }
    }
    setCorrect(true)
    setTimeout(() => setCorrect(false), 1000)
  }



  const handleIncorrectAnswer = () => { //handles events for an incorrect answer
    console.log('incorrect')
    setStreak(0)
    setMultiplier(1)
    setPlayerHp(playerHp - 100)
    setPlayerFlash(true)
    setTimeout(() => setPlayerFlash(false), 500)
    setCurrentExplanation(currentProblem[2].explanation)
    setIncorrect(true)
    setTimeout(() => setIncorrect(false), 1000)
  }

  const handleSubmit = (e) => { //handle slogic for assesing user answer and what happens in the event of a(n) correct/incorrect answer
    e.preventDefault()
    const correctAnswer = currentProblem[1].answers.includes(userAnswer.toLowerCase()); //assigns the 'correctAanswer' a boolean vlue based on whether or not the current problems answer matches the users input answer
    if (correctAnswer) { //checks if the value of 'correctAnswer' is true
      handleCorrectAnswer()
    } else {
      handleIncorrectAnswer()
    }

    setUserAnswer('') //resets input field to blank after each question is answered

    if (index + 1 < problems.length) {
      setIndex(index + 1)
    }
  }

  // useEffect(() => {
  //   if (bossFlash) {
  //     setTimeout(() => setBossFlash(false), 500)
  //   }

  //   if (playerFlash) {
  //     setTimeout(() => setPlayerFlash(false), 500)
  //   }
  // }, [bossFlash, playerFlash])

  useEffect(() => {//useEffect in charge of shuffling problems as well as advancing problems and checking for player win loss
    if (index < problems.length) {
      setCurrentProblem(problems[index])
    }

    if (playerHp <= 0) {
      setStatus('LOSE')
      setRunning(false)
    }

    if (bossHP <= 0) {
      setStatus('WIN')
      setRunning(false)
    }

  }, [index, playerHp, bossHP])

  return (
    <div id="gameCont">
      {status != 'WIN' && status != 'LOSE' ? (
        <div id="elements">
          <div id="bossElements">
            <ProgressBar id="bossHealthBar" variant="danger" label={`${bossHP}/100000`} now={bossHP} max={10000}></ProgressBar>
            Boss Health: {bossHP}
            <div id="boss" className={bossFlash ? 'flash' : ''} style={{ height: '400px', width: '500px', backgroundColor: 'red' }}></div>
          </div>

          <div id="playerElements">
            <ProgressBar id="playerHealthBar" label={`${playerHp}/1000`} now={playerHp} max={1000} />
            Player Health: {playerHp}
            <div id="player" className={playerFlash ? 'flash' : ''} style={{ height: '175px', width: '175px', backgroundColor: 'red' }}></div>
          </div>

          <div id="interactiveArea">
            <div style={{ display: 'flex' }}>
              <p>Streak: <b>{streak}</b> </p>
              <p>Multiplier: <b>{multiplier}</b> </p>
              <p>Elapsed Time: <b>{elapsedTime}</b> </p>
            </div>

            <form onSubmit={handleSubmit}>
              {correct == false && incorrect == false ? (
                <fieldset>
                  <p><b>Problem:</b> {currentProblem[0].problem}</p>
                  <b>Answer:</b> <input value={userAnswer} type="text" onChange={(e) => { setUserAnswer(e.target.value) }} required></input>
                  <button type="submit">Submit</button>
                </fieldset>) : correct == true ? (
                  <fieldset>
                    <p>Correct!</p>
                  </fieldset>
                ) : (
                <fieldset>
                  <p>Incorrect! {currentExplanation}</p>
                </fieldset>
              )}
            </form>
          </div>
        </div>

      ) : (
        <>
          <GameDataContext.Provider value={{ status, setStatus, bestStreak, setStreak, setMultiplier, highMult, setBestStreak, setPlayerHp, setBossHP, elapsedTime }}>
            <Results />
          </GameDataContext.Provider>
        </>
      )}
    </div>
  )
}

export default Game