
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  jours?: number;
  heures?: number;
  minutes?: number;
  secondes?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft] && timeLeft[interval as keyof TimeLeft] !==0) { // Handles case where value might be 0
      return;
    }
    timerComponents.push(
      <div key={interval} className="text-center p-2 sm:p-4">
        <span className="text-3xl sm:text-5xl font-bold text-primary">
          {String(timeLeft[interval as keyof TimeLeft]!).padStart(2, '0')}
        </span>
        <span className="block text-xs sm:text-sm uppercase text-foreground/80 pt-1">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 animate-fade-in-up animation-delay-500">
      {timerComponents.length ? timerComponents : <span className="text-xl text-primary">Le grand jour est arrivé !</span>}
    </div>
  );
};

export default Countdown;
