import { useEffect, useState } from "react";

function parseDate(dateString: string) {
  const normalized = dateString.replace(/\//g, "-").replace(" ", "T");

  return new Date(normalized);
}

function calculateTimeLeft(targetDate: string) {
  const parsedDate = parseDate(targetDate);

  if (isNaN(parsedDate.getTime())) {
    return {
      expired: true,
      invalid: true,
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  const difference = parsedDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      expired: true,
      invalid: false,
      days: 0,
      hours: 0,
      minutes: 0,
    };
  }

  return {
    expired: false,
    invalid: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
  };
}

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
