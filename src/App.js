import {formatTime} from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, isActive } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={isActive ? stopTimer : startTimer}>
            {isActive ? "Stop" : "Start"}
          </button>
          {/* <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button> */}
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
