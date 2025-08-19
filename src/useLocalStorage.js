import { useEffect, useState } from "react";
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const stored = localStorage.getItem(key);
    return initialState ? JSON.parse(stored) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
