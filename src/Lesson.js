import React from "react";
import cx from "classnames";
import Keyboard, { keymap } from "./Keyboard";
import Modal from "./Modal";

function getKeyColor(key) {
  return `text-${keymap[key]}-600`;
}

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "keypress":
      if (state.keys[state.current] === payload) {
        return {
          ...state,
          current: state.current + 1
        };
      }

      return state;

    case "reset":
      return {
        ...state,
        current: 0
      };

    default:
      return state;
  }
}

function Lesson({ keys }) {
  const [state, dispatch] = React.useReducer(reducer, {
    keys,
    current: 0
  });

  React.useEffect(() => {
    const handleKeypress = e => {
      e.preventDefault();
      dispatch({ type: "keypress", payload: e.key });
    };

    window.addEventListener("keypress", handleKeypress);
    return () => window.removeEventListener("keypress", handleKeypress);
  }, [dispatch]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center relative">
      <div className="font-mono text-4xl mb-12">
        {keys.map((key, index) => (
          <span
            key={key + index}
            className={cx({ [getKeyColor(key)]: index === state.current })}
          >
            {key === " " && index === state.current ? "_" : key}
          </span>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Keyboard currentKey={keys[state.current]} />
      </div>

      {state.current === state.keys.length && <Modal dispatch={dispatch} />}
    </div>
  );
}

export default Lesson;
