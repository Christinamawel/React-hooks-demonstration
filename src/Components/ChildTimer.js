import React from 'react';
import useTimer from '../hooks/useTimer';

function ChildTimer(props) {
  const [isActive, timer, setIsActive] = useTimer();
  const {parentIsActive, parentTimer, parentSetIsActive} = props

  const styles = {
    margin: "1em auto",
    padding: "1em",
    width: "60%",
    border: "solid black .5em",
    borderRadius: "1em",
    backgroundColor: "purple",
    color: "white"
  }


  return (
    <div style={styles}>
      {isActive ? <h1>{timer}</h1> : <h1>Child Timer at {timer} seconds</h1>}
      <button onClick={() => setIsActive(!isActive)}>Start/Stop</button>
      {parentIsActive ? <h1>{parentTimer}</h1> : <h1> Parent Timer at {parentTimer} seconds</h1>}
      <button onClick={() => parentSetIsActive(!parentIsActive)}>Start/Stop</button>
    </div>
  );
}

export default ChildTimer;