import React, { useEffect, useState } from "react";

const Timer = ({
  time,
  autostart,
  step,
  onTick,
  onTimeEnd,
  onTimeStart,
  onTimePause,
}) => {
  const [isRunning, setIsRunning] = useState(autostart);
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    let interval;

    if (isRunning) {
      onTimeStart(currentTime);
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const timeLeft = prevTime - step;

          if (timeLeft <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            onTick(0);
            onTimeEnd();
            return 0;
          }

          onTick(timeLeft);
          return timeLeft;
        });
      }, step);
    } else {
      clearInterval(interval);
      onTimePause(currentTime);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isRunning, time, step, onTick, onTimeEnd, onTimeStart, onTimePause]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>{currentTime} ms</p>
      <button onClick={startPauseTimer}>{isRunning ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Timer;
