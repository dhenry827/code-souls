import React, {useState, useEffect, useRef} from "react";

const Settings = () => {
    const [lapse, setLapse] = useState(0)
    const [running, setRunning] = useState(false)
    let intervalRef = useRef(null)

    useEffect(() => {
        // runs when the component mounts (aka on initialization)

        // the return below will run when the component unmounts
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    // dependency array -- when the values in here change, the code inside of the useEffect hook will run again -- this is the component did update portion of the lifecycle

    const handleClearClick = () => {
        //I want this to make our clock stop
        clearInterval(intervalRef.current)

        // reset the state to its initial value
        setLapse(0)
        setRunning(false)
    }

    const handleRunClick = () => {
        //Need to check if the clock is running
        if(running){
            // stop the clock by allowing the user to pause. Set the clock: state = true
            /* `clearInterval(intervalRef.current)` is clearing the interval that was set using
            `setInterval`. It stops the execution of the interval function and prevents it from
            running again. */
            clearInterval(intervalRef.current)
        }
        else{
            //start the clock: state = false
            let startTime = Date.now() - lapse;
            console.log('this is the start time: ', startTime)

            /* `intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime)
            }, 0)` is setting up an interval that will run every 0 milliseconds (essentially as fast
            as possible). */
            intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime)
            }, 0)

        }
        setRunning(!running)
    }
  return (
    <div>
        <label>{lapse}ms</label>
        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={handleClearClick}>Clear</button>
    </div>
  )
}

export default Settings