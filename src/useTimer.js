import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false)

  const isStart = useRef(true);
  // const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    setIsActive(true);
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000)
    // active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false;
    setIsActive(false)
    clearInterval(refInterval.current);
    // active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    setIsActive(false)
    clearInterval(refInterval.current);
    // active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, isActive };
};
export default useTimer;
