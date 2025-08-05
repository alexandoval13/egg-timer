import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  // state for managing the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  // run timeout in useEffect
  useEffect(() => {
    // set the debounced value with timeout
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
    //
  }, [value, delay]);

  // return
  return debouncedValue;
};

export default useDebounce;
