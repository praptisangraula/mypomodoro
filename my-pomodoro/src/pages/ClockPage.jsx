import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
function ClockPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [task, setTask] = useState("");
  const startTimeRef = useRef(0);
  const intervalRef = useRef(null);
  const targetTime = 25 * 60 * 1000;

  useEffect(() => {
    const updateTimer = () => {
      const currentElapsedTime = Date.now() - startTimeRef.current;

      if (currentElapsedTime >= targetTime) {
        setElapsedTime(targetTime);
        clearInterval(intervalRef.current);
        alertUser();
        setIsRunning(false);
      } else {
        setElapsedTime(currentElapsedTime);
      }
    };
    if (isRunning) {
      intervalRef.current = setInterval(updateTimer, 5);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function start() {
    if (!isRunning) {
      startTimeRef.current = Date.now();
      setIsRunning(true);
    }
  }

  function pause() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      startTimeRef.current = Date.now() - elapsedTime;
      setIsRunning(true);
    }
  }

  function stop() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function setTaskValue() {
    const task = document.getElementById("task-input").value;
    setTask(task);
    document.getElementById("task-input").value = "";
  }

  function alertUser() {
    document.getElementById("alert").textContent = "Time's up! Take a break!";
  }

  return (
    <>
      <Link to="/">
        <button id="back-button">Back</button>
      </Link>
      <div id="main">
        <input id="task-input" type="text" placeholder="Your task:" />
        <button id="enter-task" onClick={setTaskValue}>
          {" "}
          Enter{" "}
        </button>
        <p id="task">{task}</p>
        <div id="pomodoro-timer">
          <h1>{formatTime()}</h1>
          <div id="tasks">
            <button onClick={start}>Start</button>
            <button onClick={pause}>||</button>
            <button onClick={stop}>Stop</button>
          </div>
          <p id="alert"> </p>
        </div>
      </div>
    </>
  );
}

export default ClockPage;
