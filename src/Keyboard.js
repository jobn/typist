import React from "react";
import cx from "classnames";

const keymap = {
  a: "green",
  b: "red",
  c: "yellow",
  d: "yellow",
  e: "yellow",
  f: "red",
  g: "red",
  h: "red",
  i: "yellow",
  j: "red",
  k: "yellow",
  l: "blue",
  m: "red",
  n: "red",
  o: "blue",
  p: "green",
  q: "green",
  r: "red",
  s: "blue",
  t: "red",
  u: "red",
  v: "red",
  w: "blue",
  x: "blue",
  y: "red",
  z: "green",
  æ: "green",
  ø: "green",
  å: "green",
  ",": "yellow",
  ".": "blue",
  " ": "purple",
  "'": "green"
};

function getColor(key) {
  return `bg-${keymap[key]}-400`;
}

const rows = ["qwertyuiopå", "asdfghjklæø'", "zxcvbnm,.", " "];

function Key({ char, showColors, isCurrent }) {
  return (
    <div
      className={cx(
        "h-16 w-16 flex justify-center items-center border border-gray-700 m-1 rounded",
        {
          [getColor(char)]: showColors || isCurrent
        }
      )}
      style={char === " " ? { width: "22rem" } : {}}
    >
      {char}
    </div>
  );
}

function Keyboard({ currentKey }) {
  const [showColors, setShowColors] = React.useState(false);

  return (
    <div className="flex flex-col">
      {rows.map((row, index) => (
        <div
          key={row}
          className={cx("flex", {
            "ml-4": index === 1,
            "ml-12": index === 2,
            "ml-48": index === 3
          })}
        >
          {row.split("").map(key => (
            <Key
              key={key}
              char={key}
              showColors={showColors}
              isCurrent={currentKey === key}
            />
          ))}
        </div>
      ))}
      <div
        className="self-start mt-4 p-3 border border-gray-700 rounded"
        onMouseEnter={() => setShowColors(true)}
        onMouseLeave={() => setShowColors(false)}
      >
        Vis alle farver
      </div>
    </div>
  );
}

export default Keyboard;
export { keymap };
