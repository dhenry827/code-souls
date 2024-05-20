import { createContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import Settings from './Settings'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const TopicContext = createContext();

function App() {

  const [topic, setTopic] = useState([])

  const changeTopic = (newTopic) => {
    setTopic(newTopic)
    // console.log(topic)
  }

  return (
    <>
      <TopicContext.Provider value={{topic, changeTopic}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={topic.length > 0 ? <Game /> : <Navigate to="/"/>} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </TopicContext.Provider>
    </>
  )
}

export default App
