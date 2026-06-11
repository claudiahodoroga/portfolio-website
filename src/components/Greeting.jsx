import React, { useState, useEffect } from 'react';

const greetings = [
  "Hello! I'm Claudia.",
  "Hola! Soy Claudia.",
  "Bună, sunt Claudia."
];

export default function Greeting() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{
      fontSize: 'var(--font-size-large)',
      fontWeight: 'var(--font-weight)',
      color: 'var(--primary-color)',
      marginBottom: '12px'
    }}>
      {greetings[index]}
    </h1>
  );
}
