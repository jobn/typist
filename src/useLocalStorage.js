import React from "react";

function getItem(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function setItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useLocalStorage(key, initialValue) {
  const [state, setState] = React.useState(() => {
    const value = getItem(key);

    if (value === null) {
      return initialValue;
    }

    return value;
  });

  React.useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
