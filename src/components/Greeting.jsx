import React, { useState, useEffect, useRef } from 'react';

const greetings = [
  "Hello! I'm Claudia.",
  "Hola! Soy Claudia.",
  "Bună, sunt Claudia."
];

// Duration in ms for each phase
const EXIT_DURATION = 320;   // outgoing text slides down + fades out
const ENTER_DURATION = 480;  // incoming text slides in from top + bounces

export default function Greeting() {
  const [displayed, setDisplayed] = useState(0);  // index currently visible
  const [phase, setPhase] = useState('idle');      // 'idle' | 'exit' | 'enter'
  const nextIndex = useRef(1);

  useEffect(() => {
    const schedule = () => {
      // Start exit phase
      setPhase('exit');

      // After exit completes, swap text and start enter
      setTimeout(() => {
        setDisplayed(nextIndex.current);
        setPhase('enter');
        nextIndex.current = (nextIndex.current + 1) % greetings.length;

        // After enter completes go idle until next cycle
        setTimeout(() => {
          setPhase('idle');
        }, ENTER_DURATION);
      }, EXIT_DURATION);
    };

    const interval = setInterval(schedule, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greeting-container" aria-live="polite">
      <h1
        className={`greeting-text greeting-${phase}`}
      >
        {greetings[displayed]}
      </h1>
    </div>
  );
}
