import React from 'react';
import useTimer from '../hooks/useTimer';
import ChildTimer from './ChildTimer';

function Timer() {
  const [isActive, timer, setIsActive] = useTimer();

  const styles = {
    margin: "1em auto",
    padding: "1em",
    width: "80%",
    border: "solid black .5em",
    borderRadius: "1em",
    backgroundColor: "lightBlue"
  }

  return (
    <div style={styles}>
      {isActive ? <h1>{timer}</h1> : <h1>Timer Stopped</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
      <ChildTimer parentIsActive={isActive} parentTimer={timer} parentSetIsActive={setIsActive}/>
    </div>
  );
}

export default Timer;