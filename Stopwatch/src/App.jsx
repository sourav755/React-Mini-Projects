import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="flex flex-col text-center justify-center py-8">
        <h1 className="text-2xl font-semibold pb-2">Stopwatch</h1>
        <div className="text-xl font-semibold py-4">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="flex flex-row justify-center gap-4">
          {running ? (
            <button
              className="border-2 rounded-lg py-1 px-3.5"
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className="border-2 rounded-lg py-1 px-3"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )}

          <button
            className="border-2 rounded-lg py-1 px-3.5"
            onClick={() => setTime(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
