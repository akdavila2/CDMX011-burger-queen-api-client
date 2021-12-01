import React, { useRef, useEffect, useState } from "react";

export const Timer = () => {
  const [num, setNum] = useState(0);
  const [ready, setReady] = useState(false);
  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev + 1);
  useEffect(() => {
    setReady(false);
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!ready) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setReady((prev) => !prev);
  };

  return (
    <div className= "content-timer">
      <div>{num}</div>
      <button onClick={handleClick}>{ready ? "Run" : "Ready"}</button>
    </div>
  );
};
