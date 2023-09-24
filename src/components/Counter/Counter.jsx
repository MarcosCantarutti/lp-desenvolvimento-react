import React, { useState, useEffect } from 'react';
import './Counter.scss';

const Counter = ({ initialValue, finalValue }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const animationDuration = 250; // duração da animação em milissegundos
    const step = (finalValue - initialValue) / animationDuration;
    let currentValue = initialValue;

    const interval = setInterval(() => {
      currentValue += step;
      setCount(Math.round(currentValue));

      if (currentValue >= finalValue) {
        setCount(finalValue);
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [initialValue, finalValue]);

  return <span className="counter">{count}</span>;
};

export default Counter;
