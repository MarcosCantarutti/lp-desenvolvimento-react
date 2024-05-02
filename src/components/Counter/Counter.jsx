import React, { useState, useEffect, useRef } from 'react';
import './Counter.scss';

function Counter({ initialValue, finalValue }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      const animationDuration = 300; // Duração da animação em milissegundos
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
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Elemento raiz (nulo para a viewport)
      rootMargin: '0px', // Margem em torno do elemento raiz
      threshold: 0.5, // Porcentagem visível para disparar a ação
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []); // O array vazio garante que o useEffect só seja executado uma vez

  return (
    <span className="counter" ref={counterRef}>
      {count}
    </span>
  );
}

export default Counter;
