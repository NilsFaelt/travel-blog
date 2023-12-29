import { useEffect, useRef, useState } from "react";

export const useDebounce = <T,>(value: T, delay = 1000): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const latestTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (latestTimeoutRef.current) {
      clearInterval(latestTimeoutRef.current);
    }

    latestTimeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (latestTimeoutRef.current) {
        clearTimeout(latestTimeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
